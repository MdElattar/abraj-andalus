import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const handleSubmit = (e) => {
        e.preventDefault();
        // هنا بيتم ربط الفورم بالباك إند (Node.js/Express)
        console.log("Form Submitted");
    };

    // إعدادات الأنيميشن
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 md:px-12">
                
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={fadeUp}
                    >
                        <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-3 block">
                            {t('contact')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                            {t('contactSecTitle')}
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {t('contactSecSubtitle')}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
                    
                    {/* Contact Information Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
                    >
                        {/* تصميم هندسي في الخلفية */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"></div>

                        <h3 className="text-2xl font-bold mb-8 relative z-10">{t('contactSecTitle')}</h3>
                        
                        <div className="space-y-8 relative z-10">
                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="bg-slate-800/80 p-3 rounded-lg text-amber-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-400 mb-1">{t('contactAddressLabel')}</h4>
                                    <p className="text-lg font-medium">{t('contactAddress')}</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="bg-slate-800/80 p-3 rounded-lg text-amber-500">
                                    <Phone size={24} />
                                </div>
                                <div style={{ direction: 'ltr' }} className={isRtl ? 'text-right w-full' : ''}>
                                    <h4 className={`text-sm font-semibold text-slate-400 mb-1 ${isRtl ? 'text-right' : ''}`}>{t('contactPhoneLabel')}</h4>
                                    <p className={`text-lg font-medium ${isRtl ? 'text-right' : ''}`}>{t('contactPhone')}</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="bg-slate-800/80 p-3 rounded-lg text-amber-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-400 mb-1">{t('contactEmailLabel')}</h4>
                                    <p className="text-lg font-medium">info@company.com</p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex items-start gap-4">
                                <div className="bg-slate-800/80 p-3 rounded-lg text-amber-500">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-400 mb-1">{t('contactHoursLabel')}</h4>
                                    <p className="text-lg font-medium">{t('contactHours')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3 bg-white p-8 md:p-10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.03)] border border-slate-100"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                                        {t('contactName')}
                                    </label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                                        required
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                                        {t('contactEmail')}
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        style={{ direction: isRtl ? 'rtl' : 'ltr' }}
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-left"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Subject Input */}
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-semibold text-slate-700">
                                    {t('contactSubject')}
                                </label>
                                <input 
                                    type="text" 
                                    id="subject"
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                                    required
                                />
                            </div>

                            {/* Message Input */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                                    {t('contactMessage')}
                                </label>
                                <textarea 
                                    id="message"
                                    rows="5"
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-none"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit"
                                className="group flex items-center justify-center gap-2 w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 active:scale-95"
                            >
                                <span>{t('contactSubmit')}</span>
                                <Send size={18} className={`transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;