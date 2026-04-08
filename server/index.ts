import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// ── CORS for Vite dev (port 3000) ──────────────────────────────────────────
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (_req.method === 'OPTIONS') { res.sendStatus(200); return; }
  next();
});

// ── Nodemailer transporter ──────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,   // Gmail App Password (16-char)
  },
});

// ── POST /api/contact ───────────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, company, subject, message } = req.body;

  // Basic validation
  if (!firstName || !email || !subject || !message) {
    res.status(400).json({ error: 'Mohon lengkapi semua field yang wajib diisi.' });
    return;
  }

  const subjectLabels: Record<string, string> = {
    sales:       'Pertanyaan Penjualan',
    partnership: 'Peluang Kemitraan',
    support:     'Dukungan Teknis',
    other:       'Lainnya',
  };

  const subjectLabel = subjectLabels[subject] || subject;
  const fullName     = `${firstName} ${lastName}`.trim();

  try {
    // 1️⃣  Kirim notifikasi ke info@bersamaenergi.co.id
    await transporter.sendMail({
      from:    `"${fullName} (Web BEN)" <${process.env.SMTP_USER}>`,
      to:      'info@bersamaenergi.co.id',
      replyTo: email,
      subject: `[Hubungi Kami] ${subjectLabel} — ${fullName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
          <div style="background:#1a2340;padding:24px 32px;">
            <img src="https://cdn.gulfoilltd.com/apac/branding/gulf-logo-white.png" alt="BEN" height="40" style="margin-bottom:8px"/>
            <h2 style="color:#f59e0b;margin:0;font-size:20px;">Pesan Baru dari Website</h2>
          </div>
          <div style="padding:32px;background:#fff;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#6b7280;width:140px;font-size:14px;">Nama</td><td style="padding:8px 0;font-weight:600;color:#111827;">${fullName}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#f59e0b;">${email}</a></td></tr>
              ${company ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Perusahaan</td><td style="padding:8px 0;color:#111827;">${company}</td></tr>` : ''}
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Subjek</td><td style="padding:8px 0;color:#111827;">${subjectLabel}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;"/>
            <p style="color:#374151;line-height:1.7;white-space:pre-wrap;">${message.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</p>
          </div>
          <div style="background:#f9fafb;padding:16px 32px;font-size:12px;color:#9ca3af;text-align:center;">
            PT. Bersama Energi Nusapersada · Tangerang, Indonesia
          </div>
        </div>
      `,
    });

    // (Auto-reply to sender has been removed as requested)

    res.json({ success: true, message: 'Pesan berhasil dikirim!' });
  } catch (err: unknown) {
    console.error('Mail error:', err);
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: 'Gagal mengirim email. Silakan coba lagi.', detail: errorMessage });
  }
});

const PORT = process.env.API_PORT || 3001;
app.listen(PORT, () => console.log(`✅ API server running on http://localhost:${PORT}`));
