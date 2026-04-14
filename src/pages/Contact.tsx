import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex flex-col justify-end bg-secondary overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://assets.gulfoilltd.com/apac/default_images/1.%20About%20us_WWA_Banner_640x505_0.webp?VersionId=PPhCN_.eu9AGZh.d8fnkpCEItM1QJ9oD")' }}
        >
          <div className="absolute inset-0 bg-secondary/80" />
        </div>

        {/* Content anchored to bottom */}
        <div className="relative z-20 w-full pb-0 pt-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-16 bg-primary" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
                {t('contact.heroSubtitle')}
              </span>
            </motion.div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-heading font-black text-white leading-[0.9] tracking-tighter text-[clamp(2.5rem,6.5vw,6rem)] mb-0"
            >
              {t('contact.heroTitle')}{' '}
              <span className="text-primary">{t('contact.heroTitleHighlight')}</span>
            </motion.h1>
          </div>

          {/* Bottom strip */}
          <div className="border-t border-white/10 mt-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-gray-300 text-base leading-relaxed max-w-2xl"
              >
                {t('contact.heroDesc')}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ASYMMETRIC SPLIT ─────────────────────────────────────────── */}
      <section className="bg-white border-y border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

          {/* Left: Contact Details (White background) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 lg:p-24 border-r border-gray-100 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{t('contact.getInTouch')}</span>
            </div>

            <h2 className="font-heading font-black text-secondary text-[clamp(2.5rem,4vw,3.5rem)] leading-[1] tracking-tighter mb-8">
              {t('contact.headOffice')}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-16 max-w-lg">
              {t('contact.headOfficeDesc')}
            </p>

            {/* List of details with flat icons */}
            <div className="space-y-12">
              <div className="flex items-start gap-6 group">
                <MapPin className="text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="font-heading font-bold text-secondary text-lg mb-2">{t('contact.address')}</h4>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Epica+Tangerang+Great+Western+Jl.+M.H.+Thamrin+Blk.+AA2+No.29+Tangerang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary leading-relaxed whitespace-pre-line text-sm transition-colors"
                  >
                    {t('contact.addressDetails')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <MapPin className="text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="font-heading font-bold text-secondary text-lg mb-2">{t('contact.warehouseTitle')}</h4>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Desa+Seradang+Kecamatan+Haruai+RT+1+Kabupaten+Tabalong+Kalimantan+Selatan+71572"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary leading-relaxed whitespace-pre-line text-sm transition-colors block"
                  >
                    Desa Seradang<br />
                    Kecamatan Haruai<br />
                    RT 1, Kabupaten Tabalong<br />
                    Kalimantan Selatan<br />
                    Kode Pos 71572
                  </a>
                  <p className="text-gray-400 italic text-xs mt-1">{t('contact.warehouseAdjacent')}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <Mail className="text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="font-heading font-bold text-secondary text-lg mb-2">{t('contact.email')}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {t('contact.emailGeneral')}<br />
                    {t('contact.emailSales')}<br />
                    {t('contact.emailPartner')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <Clock className="text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="font-heading font-bold text-secondary text-lg mb-2">{t('contact.businessHours')}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {t('contact.hoursWeekdays')}<br />
                    {t('contact.hoursWeekends')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form (Gray background, flat geometric border) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gray-50 p-8 lg:p-24 flex flex-col justify-center"
          >
            <h3 className="font-heading font-black text-secondary text-3xl mb-10 tracking-tight">
              {t('contact.sendMessage')}
            </h3>

            {status === 'success' && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 p-4 bg-green-50 border border-green-200 flex items-start gap-3 text-green-800">
                <CheckCircle2 className="mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-sm">{t('contact.successTitle')}</h4>
                  <p className="text-sm mt-1 opacity-90">{t('contact.successDesc')}</p>
                </div>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 p-4 bg-red-50 border border-red-200 flex items-start gap-3 text-red-800">
                <AlertCircle className="mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-sm">{t('contact.errorTitle')}</h4>
                  <p className="text-sm mt-1 opacity-90">{t('contact.errorDesc')}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-xs font-bold tracking-widest uppercase text-gray-500">{t('contact.firstName')}</label>
                  <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-white border border-gray-200 px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-xs font-bold tracking-widest uppercase text-gray-500">{t('contact.lastName')}</label>
                  <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-white border border-gray-200 px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold tracking-widest uppercase text-gray-500">{t('contact.emailAddress')}</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-white border border-gray-200 px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors" required />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-xs font-bold tracking-widest uppercase text-gray-500">{t('contact.companyName')}</label>
                <input type="text" id="company" value={formData.company} onChange={handleChange} className="w-full bg-white border border-gray-200 px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold tracking-widest uppercase text-gray-500">{t('contact.subject')}</label>
                <div className="relative">
                  <select id="subject" value={formData.subject} onChange={handleChange} className="w-full bg-white border border-gray-200 px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors appearance-none" required>
                    <option value="" disabled>{t('contact.selectSubject')}</option>
                    <option value="sales">{t('contact.subjectSales')}</option>
                    <option value="partnership">{t('contact.subjectPartnership')}</option>
                    <option value="support">{t('contact.subjectSupport')}</option>
                    <option value="other">{t('contact.subjectOther')}</option>
                  </select>
                  {/* Custom arrow for select */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold tracking-widest uppercase text-gray-500">{t('contact.message')}</label>
                <textarea id="message" value={formData.message} onChange={handleChange} rows={5} className="w-full bg-white border border-gray-200 px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors resize-none" required></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-primary hover:bg-primary-hover disabled:bg-primary/50 disabled:cursor-not-allowed text-white px-8 py-4 font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-3 group mt-4"
              >
                {status === 'loading' ? t('contact.sending') : t('contact.sendBtn')} 
                {status !== 'loading' && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* ── GOOGLE MAPS SECTION ───────────────────────────────────────────────── */}
      <section className="w-full relative bg-gray-50 border-b border-gray-200">
        {/* Aesthetic Map embed without redundant text header */}
        <div className="w-full h-[60vh] min-h-[450px] max-h-[700px] relative group overflow-hidden">
          {/* subtle loading placeholder if needed but iframe handles it */}
          <iframe
            title="Lokasi PT. Bersama Energi Nusapersada"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1!2d106.6499!3d-6.2218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8b9e1d0f4e5%3A0x1bc!2sEpica+Flexible+Office+by+TwoSpaces!5e0!3m2!1sen!2sid!4v1699999999999!5m2!1sen!2sid&q=Epica+Tangerang+Great+Western,+Jl.+M.H.+Thamrin+Blk.+AA2+No.29,+Tangerang"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover saturate-[0.8] contrast-[1.05] group-hover:saturate-100 transition-all duration-1000 ease-in-out"
          />
          {/* Inner Shadow for depth */}
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.05)] ring-1 ring-inset ring-black/5"></div>
          
          {/* Floating Action Button */}
          <div className="absolute bottom-8 right-8 z-10 flex flex-col items-end gap-3 pointer-events-none">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Epica+Tangerang+Great+Western+Jl.+M.H.+Thamrin+Blk.+AA2+No.29+Tangerang"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto flex items-center gap-3 bg-secondary hover:bg-primary text-white px-7 py-4 font-bold uppercase tracking-widest text-xs transition-all duration-500 shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
            >
              <MapPin size={16} strokeWidth={2} className="animate-bounce" />
              Buka di Google Maps
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
