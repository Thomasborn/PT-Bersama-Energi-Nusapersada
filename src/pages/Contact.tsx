import { motion } from 'motion/react';
import { MapPin, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

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
                Hubungi BEN
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
                  <p className="text-gray-500 leading-relaxed whitespace-pre-line text-sm">
                    {t('contact.addressDetails')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <MapPin className="text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="font-heading font-bold text-secondary text-lg mb-2">Gudang BEN</h4>
                  <p className="text-gray-500 leading-relaxed whitespace-pre-line text-sm">
                    Desa Seradang<br />
                    Kecamatan Haruai<br />
                    RT 1, Kabupaten Tabalong<br />
                    Kalimantan Selatan<br />
                    Kode Pos 71572<br />
                    <span className="text-gray-400 italic">(Samping PT Mantimin Coal)</span>
                  </p>
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

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-xs font-bold tracking-widest uppercase text-gray-500">{t('contact.firstName')}</label>
                  <input type="text" id="firstName" className="w-full bg-white border border-gray-200 px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-xs font-bold tracking-widest uppercase text-gray-500">{t('contact.lastName')}</label>
                  <input type="text" id="lastName" className="w-full bg-white border border-gray-200 px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors" required />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold tracking-widest uppercase text-gray-500">{t('contact.emailAddress')}</label>
                <input type="email" id="email" className="w-full bg-white border border-gray-200 px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors" required />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-xs font-bold tracking-widest uppercase text-gray-500">{t('contact.companyName')}</label>
                <input type="text" id="company" className="w-full bg-white border border-gray-200 px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold tracking-widest uppercase text-gray-500">{t('contact.subject')}</label>
                <div className="relative">
                  <select id="subject" defaultValue="" className="w-full bg-white border border-gray-200 px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors appearance-none" required>
                    <option value="" disabled>{t('contact.selectSubject')}</option>
                    <option value="sales">{t('contact.subjectSales')}</option>
                    <option value="partnership">{t('contact.subjectPartnership')}</option>
                    <option value="support">{t('contact.subjectSupport')}</option>
                    <option value="other">{t('contact.subjectOther')}</option>
                  </select>
                  {/* Custom arrow for select */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold tracking-widest uppercase text-gray-500">{t('contact.message')}</label>
                <textarea id="message" rows={5} className="w-full bg-white border border-gray-200 px-4 py-3 text-secondary focus:outline-none focus:border-primary transition-colors resize-none" required></textarea>
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white px-8 py-4 font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-3 group mt-4">
                {t('contact.sendBtn')} <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* ── MINIMAL MAP BANNER ───────────────────────────────────────────────── */}
      <section className="h-[50vh] w-full bg-secondary relative overflow-hidden flex items-center justify-center group">
        {/* Very muted, abstracted map background approach */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1596443686812-2f45229eebc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center grayscale mix-blend-luminosity transition-transform duration-1000 group-hover:scale-105"></div>
        <div className="absolute inset-0 bg-secondary/80"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <div className="w-16 h-16 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
            <MapPin size={24} className="text-white" strokeWidth={1.5} />
          </div>
          <h3 className="font-heading font-black text-white text-3xl tracking-tight mb-3">
            PT. Bersama Energi Nusapersada
          </h3>
          <p className="text-gray-400 font-medium tracking-wide">
            DKI Jakarta, Indonesia
          </p>
        </div>
      </section>

    </div>
  );
}
