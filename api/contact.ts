import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  // Enable CORS if needed (though usually same domain on Vercel)
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, company, subject, message } = req.body;

  // Basic validation
  if (!firstName || !email || !subject || !message) {
    return res.status(400).json({ error: 'Mohon lengkapi semua field yang wajib diisi.' });
  }

  const subjectLabels: Record<string, string> = {
    sales:       'Pertanyaan Penjualan',
    partnership: 'Peluang Kemitraan',
    support:     'Dukungan Teknis',
    other:       'Lainnya',
  };

  const subjectLabel = subjectLabels[subject] || subject;
  const fullName     = `${firstName} ${lastName}`.trim();

  // ── Nodemailer transporter ──────────────────────────────────────────────────
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS, // Gmail App Password
    },
  });

  try {
    // 1️⃣ Kirim notifikasi ke info@bersamaenergi.co.id
    await transporter.sendMail({
      from:    `"${fullName} (Web BEN)" <${process.env.SMTP_USER}>`,
      to:      process.env.RECEIVER_EMAIL || 'info@bersamaenergi.co.id',
      replyTo: email,
      subject: `[Hubungi Kami] ${subjectLabel} — ${fullName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
          <div style="background:#1a2340;padding:24px 32px;">
            <img src="https://ben-nu.vercel.app/ben_exact.png" alt="BEN" height="40" style="margin-bottom:8px"/>
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

    return res.status(200).json({ success: true, message: 'Pesan berhasil dikirim!' });
  } catch (err: any) {
    console.error('Mail error:', err);
    return res.status(500).json({ error: 'Gagal mengirim email. Silakan coba lagi.', detail: err.message });
  }
}
