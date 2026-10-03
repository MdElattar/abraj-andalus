import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Building2, 
  Award, 
  Clock, 
  Sparkles, 
  TrendingUp 
} from 'lucide-react';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // أنيميشن تتابعي احترافي
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="about" className="py-28 bg-slate-50 relative overflow-hidden">
      {/* خلفية جمالية خفيفة */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-12 left-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* معرض الصور الفاخر والمتقاطع */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, margin: "-80px" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* الصورة الرئيسية: أبراج معمارية فاخرة */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/60 group">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="مشروع أبراج هندسي" 
                  className="w-full h-[520px] object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
              </div>

              {/* الصورة الفرعية المتقاطعة: تصميم هندسي وتنفيذي */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className={`absolute -bottom-10 ${isRTL ? '-left-6 sm:-left-10' : '-right-6 sm:-right-10'} w-2/3 sm:w-1/2 rounded-xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block`}
              >
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="موقع إنشاءات وتنفيذ" 
                  className="w-full h-48 object-cover"
                />
              </motion.div>

              {/* بطاقة الإحصائيات الفاخرة (Glassmorphism Card) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className={`absolute -top-8 ${isRTL ? '-right-4 sm:-right-8' : '-left-4 sm:-left-8'} bg-slate-900/90 backdrop-blur-md text-white p-6 rounded-2xl shadow-2xl border border-amber-500/30 flex items-center gap-5`}
              >
                <div className="bg-amber-500/20 p-3.5 rounded-xl border border-amber-500/40 text-amber-400">
                  <Award size={36} />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-amber-400">15+</span>
                    <span className="text-xs text-amber-300 uppercase tracking-widest">{t('years', 'عاماً')}</span>
                  </div>
                  <p className="text-xs font-medium text-slate-300 mt-1">{t('yearsExp', 'من التميز والريادة الإنشائية')}</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* النص والميزات التنفيذية */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full lg:w-1/2"
          >
            {/* الشارة العلوية */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-700 font-semibold text-xs tracking-wider uppercase mb-4">
              <Sparkles size={14} className="text-amber-600" />
              <span>{t('aboutSubtitle', 'ريادة المعايير الإنشائية')}</span>
            </motion.div>

            {/* العنوان الرئيسي */}
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
              {t('aboutTitle', 'شركة أبراج أندلس الخليج للمقاولات')}
            </motion.h2>

            <motion.div variants={itemVariants} className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-8"></motion.div>

            {/* الوصف والفقرات */}
            <motion.p variants={itemVariants} className="text-slate-600 text-lg leading-relaxed mb-6 font-normal">
              {t('aboutText1', 'نحن نبتكر معالم معمارية فريدة تجمع بين صلابة الهندسة وأناقة التصميم العصري. نعمل وفق منظومة متكاملة تضمن أعلى مستويات الجودة والسلامة لتجسيد رؤى شركائنا في مشاريع ضخمة تدوم لأجيال.')}
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-slate-500 text-base leading-relaxed mb-10">
              {t('aboutText2', 'بخبرة تمتد لسنوات في تنفيذ المقاولات المتقدمة، نلتزم بالدقة التامة في المواعيد والمواصفات القياسية الدولية، مما جعلنا الخيار الأول للمشاريع التجارية، السكنية، والبنية التحتية.')}
            </motion.p>

            {/* شبكة الميزات الاستراتيجية */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
              
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white transition duration-300 shadow-sm sm:shadow-none">
                <div className="bg-amber-500/10 p-2.5 rounded-lg text-amber-600 shrink-0 mt-1">
                  <Building2 size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{t('qualityTitle', 'إدارة المشاريع الكبرى')}</h4>
                  <p className="text-slate-500 text-xs mt-1 leading-normal">{t('qualityDesc', 'خبرة واسعة في إدارة وتنفيذ الأبراج والمجمعات الضخمة.')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white transition duration-300 shadow-sm sm:shadow-none">
                <div className="bg-amber-500/10 p-2.5 rounded-lg text-amber-600 shrink-0 mt-1">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{t('timeTitle', 'انضباط زمني دقيق')}</h4>
                  <p className="text-slate-500 text-xs mt-1 leading-normal">{t('timeDesc', 'تسليم كافة مراحل المشروع وفق مخططات زمنية صارمة.')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white transition duration-300 shadow-sm sm:shadow-none">
                <div className="bg-amber-500/10 p-2.5 rounded-lg text-amber-600 shrink-0 mt-1">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{t('safetyTitle', 'أعلى معايير الأمان')}</h4>
                  <p className="text-slate-500 text-xs mt-1 leading-normal">{t('safetyDesc', 'تطبيق الدساتير الهندسية ومعايير السلامة العالمية.')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white transition duration-300 shadow-sm sm:shadow-none">
                <div className="bg-amber-500/10 p-2.5 rounded-lg text-amber-600 shrink-0 mt-1">
                  <TrendingUp size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{t('growthTitle', 'حلول استثمارية مستدامة')}</h4>
                  <p className="text-slate-500 text-xs mt-1 leading-normal">{t('growthDesc', 'تعظيم قيمة العقار من خلال جودة المواد والتنفيذ.')}</p>
                </div>
              </div>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;