import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="w-full overflow-x-hidden bg-white mt-[112px]">

      {/* ── HERO BANNER (Official Layout) ────────────────────────────────────── */}
      <section className="relative h-[60vh] md:h-[50vh] w-full overflow-hidden bg-[#002b5b] flex items-center">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
        ></div>

        {/* Diagonal Graphic Overlays */}
        <div 
          className="absolute top-0 right-0 h-[100%] w-[60%] md:w-[45%] bg-[#ff6600] z-10 opacity-90"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 h-[70%] w-[50%] md:w-[35%] bg-[#81d4fa]/30 z-[11] mix-blend-screen"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        ></div>

        <div className="relative z-20 w-full">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-[#ff6600]" />
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#ff6600]">
                  Layanan Bantuan BEN
                </span>
              </div>
              <h1 className="font-heading font-black text-white leading-[0.9] tracking-tighter text-[clamp(3rem,6.5vw,5.5rem)] mb-6">
                {t('contact.heroTitle')}{' '}
                <span className="text-[#ff6600]">{t('contact.heroTitleHighlight')}</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed hidden md:block">
                {t('contact.heroDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ASYMMETRIC SPLIT ─────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 relative overflow-hidden">
        {/* Right background slice for form */}
        <div 
          className="absolute top-0 right-0 h-full w-[40%] bg-[#f8f9fa] z-0 hidden lg:block"
        ></div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] max-w-[1400px] mx-auto min-h-screen relative z-10 lg:shadow-xl">
          
          {/* Left: Contact Details (White background) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 lg:p-24 lg:pr-32 bg-white flex flex-col justify-center border-r border-gray-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#ff6600]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#ff6600]">{t('contact.getInTouch')}</span>
            </div>
            
            <h2 className="font-heading font-black text-[#002b5b] text-[clamp(2.5rem,4vw,3.5rem)] leading-tight tracking-tight mb-8">
              {t('contact.headOffice')}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-16 max-w-lg border-l-4 border-[#ff6600] pl-6">
              {t('contact.headOfficeDesc')}
            </p>

            {/* List of details with flat icons */}
            <div className="space-y-12">
              <div className="flex items-start gap-6 group">
                <div className="bg-[#f8f9fa] p-4 group-hover:bg-[#ff6600] group-hover:text-white text-[#ff6600] transition-colors duration-300">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-heading font-black text-[#002b5b] text-xl mb-2">{t('contact.address')}</h4>
                  <p className="text-gray-500 leading-relaxed whitespace-pre-line text-[15px]">
                    {t('contact.addressDetails')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-[#f8f9fa] p-4 group-hover:bg-[#ff6600] group-hover:text-white text-[#ff6600] transition-colors duration-300">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-heading font-black text-[#002b5b] text-xl mb-2">{t('contact.phone')}</h4>
                  <p className="text-gray-500 leading-relaxed text-[15px]">
                    {t('contact.phoneMain')}<br />
                    {t('contact.phoneSales')}<br />
                    {t('contact.phoneSupport')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-[#f8f9fa] p-4 group-hover:bg-[#ff6600] group-hover:text-white text-[#ff6600] transition-colors duration-300">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-heading font-black text-[#002b5b] text-xl mb-2">{t('contact.email')}</h4>
                  <p className="text-gray-500 leading-relaxed text-[15px]">
                    {t('contact.emailGeneral')}<br />
                    {t('contact.emailSales')}<br />
                    {t('contact.emailPartner')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-[#f8f9fa] p-4 group-hover:bg-[#ff6600] group-hover:text-white text-[#ff6600] transition-colors duration-300">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[#002b5b] text-xl mb-2">{t('contact.businessHours')}</h4>
                  <p className="text-gray-500 leading-relaxed text-[15px]">
                    {t('contact.hoursWeekdays')}<br />
                    {t('contact.hoursWeekends')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form (Light Gray background with deep blue elements) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#f8f9fa] p-8 lg:p-24 lg:pl-20 border-t lg:border-t-0 border-gray-100 flex flex-col justify-center"
          >
            <h3 className="font-heading font-black text-[#002b5b] text-[clamp(2rem,3vw,2.5rem)] mb-10 tracking-tight leading-tight">
              {t('contact.sendMessage')}
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 relative group flex-1">
                  <label htmlFor="firstName" className="text-[11px] font-bold tracking-widest uppercase text-[#002b5b]">{t('contact.firstName')}</label>
                  <input type="text" id="firstName" className="w-full bg-white border border-gray-200 px-4 py-3.5 text-[#002b5b] focus:outline-none focus:border-[#ff6600] transition-colors" required />
                </div>
                <div className="flex flex-col gap-2 relative group flex-1">
                  <label htmlFor="lastName" className="text-[11px] font-bold tracking-widest uppercase text-[#002b5b]">{t('contact.lastName')}</label>
                  <input type="text" id="lastName" className="w-full bg-white border border-gray-200 px-4 py-3.5 text-[#002b5b] focus:outline-none focus:border-[#ff6600] transition-colors" required />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 relative group">
                <label htmlFor="email" className="text-[11px] font-bold tracking-widest uppercase text-[#002b5b]">{t('contact.emailAddress')}</label>
                <input type="email" id="email" className="w-full bg-white border border-gray-200 px-4 py-3.5 text-[#002b5b] focus:outline-none focus:border-[#ff6600] transition-colors" required />
              </div>

              <div className="flex flex-col gap-2 relative group">
                <label htmlFor="company" className="text-[11px] font-bold tracking-widest uppercase text-[#002b5b]">{t('contact.companyName')}</label>
                <input type="text" id="company" className="w-full bg-white border border-gray-200 px-4 py-3.5 text-[#002b5b] focus:outline-none focus:border-[#ff6600] transition-colors" />
              </div>

              <div className="flex flex-col gap-2 relative group">
                <label htmlFor="subject" className="text-[11px] font-bold tracking-widest uppercase text-[#002b5b]">{t('contact.subject')}</label>
                <div className="relative">
                  <select id="subject" defaultValue="" className="w-full bg-white border border-gray-200 px-4 py-3.5 text-[#002b5b] focus:outline-none focus:border-[#ff6600] transition-colors appearance-none" required>
                    <option value="" disabled>{t('contact.selectSubject')}</option>
                    <option value="sales">{t('contact.subjectSales')}</option>
                    <option value="partnership">{t('contact.subjectPartnership')}</option>
                    <option value="support">{t('contact.subjectSupport')}</option>
                    <option value="other">{t('contact.subjectOther')}</option>
                  </select>
                  {/* Custom arrow for select */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#ff6600]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 relative group">
                <label htmlFor="message" className="text-[11px] font-bold tracking-widest uppercase text-[#002b5b]">{t('contact.message')}</label>
                <textarea id="message" rows={5} className="w-full bg-white border border-gray-200 px-4 py-3.5 text-[#002b5b] focus:outline-none focus:border-[#ff6600] transition-colors resize-none" required></textarea>
              </div>

              <button type="submit" className="w-full bg-[#002b5b] hover:bg-[#ff6600] text-white px-8 py-5 font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-4 group mt-8 shadow-md">
                {t('contact.sendBtn')} <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* ── MINIMAL MAP BANNER ───────────────────────────────────────────────── */}
      <section className="h-[40vh] w-full bg-[#002b5b] relative overflow-hidden flex items-center justify-center group border-t border-white/5">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1596443686812-2f45229eebc3?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay transition-transform duration-1000 group-hover:scale-105"></div>
        <div className="absolute inset-0 bg-[#002b5b]/90"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <div className="w-20 h-20 border-2 border-white/20 flex items-center justify-center mb-6 group-hover:bg-[#ff6600] group-hover:border-[#ff6600] transition-all duration-500 shadow-xl">
            <MapPin size={32} className="text-white" strokeWidth={1.5} />
          </div>
          <h3 className="font-heading font-black text-white text-3xl md:text-5xl tracking-tight mb-4">
            PT. Bersama Energi Nusapersada
          </h3>
          <p className="text-gray-300 font-medium tracking-widest uppercase text-sm">
            Kawasan Industri Terpadu, Indonesia
          </p>
        </div>
      </section>

    </div>
  );
}
