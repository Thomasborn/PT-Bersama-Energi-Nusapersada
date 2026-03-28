import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="w-full pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-black/50 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">{t('contact.heroTitle')} <span className="text-primary">{t('contact.heroTitleHighlight')}</span></h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('contact.heroDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">{t('contact.getInTouch')}</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6 leading-tight">
                {t('contact.headOffice')}
              </h3>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {t('contact.headOfficeDesc')}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-secondary mb-2">{t('contact.address')}</h4>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {t('contact.addressDetails')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-secondary mb-2">{t('contact.phone')}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t('contact.phoneMain')}<br />
                      {t('contact.phoneSales')}<br />
                      {t('contact.phoneSupport')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-secondary mb-2">{t('contact.email')}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t('contact.emailGeneral')}<br />
                      {t('contact.emailSales')}<br />
                      {t('contact.emailPartner')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-secondary mb-2">{t('contact.businessHours')}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t('contact.hoursWeekdays')}<br />
                      {t('contact.hoursWeekends')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-grey p-8 md:p-12 rounded-sm shadow-sm border-t-4 border-primary"
            >
              <h3 className="text-2xl font-heading font-bold text-secondary mb-6">{t('contact.sendMessage')}</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.firstName')}</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.lastName')}</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.emailAddress')}</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" required />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.companyName')}</label>
                  <input type="text" id="company" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.subject')}</label>
                  <select id="subject" className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" required>
                    <option value="">{t('contact.selectSubject')}</option>
                    <option value="sales">{t('contact.subjectSales')}</option>
                    <option value="partnership">{t('contact.subjectPartnership')}</option>
                    <option value="support">{t('contact.subjectSupport')}</option>
                    <option value="other">{t('contact.subjectOther')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.message')}</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" required></textarea>
                </div>

                <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-sm font-bold transition-colors text-lg flex items-center justify-center gap-2">
                  {t('contact.sendBtn')} <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200 relative">
        {/* Placeholder for Google Maps iframe */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 flex-col gap-4">
          <MapPin size={48} className="text-primary" />
          <p className="font-heading font-semibold text-xl">{t('contact.mapIntegration')}</p>
          <p className="text-sm">{t('contact.mapDesc')}</p>
        </div>
      </section>
    </div>
  );
}
