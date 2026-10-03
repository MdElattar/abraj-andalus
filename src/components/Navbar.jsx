import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // مراقبة السكرول لتغيير شكل الـ Navbar وتحديد القسم النشط
    useEffect(() => {
        const handleScroll = () => {
            // تغيير خلفية الناف بار
            setScrolled(window.scrollY > 50);

            // تحديد القسم المعروض حالياً على الشاشة
            const sections = ['home', 'about', 'projects', 'contact'];
            const current = sections.find(section => {
                if (section === 'home' && window.scrollY < 200) return true;
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'ar' ? 'en' : 'ar';
        i18n.changeLanguage(newLang);
    };

    // تم تغيير الـ paths لتتطابق مع الـ IDs الخاصة بالأقسام
    const navLinks = [
        { name: t('home'), path: 'home' },
        { name: t('about'), path: 'about' },
        { name: t('projects'), path: 'projects' },
        { name: t('contact'), path: 'contact' },
    ];

    // الانتقال السلس للأقسام
    const scrollToSection = (id) => {
        setIsOpen(false);
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(id);
            if (element) {
                const offset = 80; // تعويض ارتفاع الناف بار
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed w-full z-50 transition-all duration-500 ${
                scrolled 
                ? 'bg-white/95 backdrop-blur-xl shadow-sm py-4 border-b border-slate-200/50' 
                : 'bg-gradient-to-b from-slate-950/60 to-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                
                {/* Logo Section */}
                <div 
                    onClick={() => scrollToSection('home')} 
                    className="flex items-center gap-3 cursor-pointer"
                >
                    <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
                    <div className="hidden sm:flex flex-col">
                        <span className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                            {t('companyName')}
                        </span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex gap-8">
                        {navLinks.map((link, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSection(link.path)}
                                className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 relative group ${
                                    activeSection === link.path
                                    ? 'text-amber-500'
                                    : scrolled ? 'text-slate-600 hover:text-amber-500' : 'text-gray-300 hover:text-white'
                                }`}
                            >
                                {link.name}
                                {/* خط التحديد السفلي (Indicator) */}
                                <span className={`absolute -bottom-2 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                                    activeSection === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                            </button>
                        ))}
                    </div>

                    {/* فاصل عمودي */}
                    <div className={`h-6 w-px ${scrolled ? 'bg-slate-300' : 'bg-white/30'}`}></div>

                    <button
                        onClick={toggleLanguage}
                        className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 border ${
                            scrolled 
                            ? 'border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300' 
                            : 'border-white/30 text-white hover:bg-white/10 hover:border-white'
                        }`}
                    >
                        <Globe size={16} className={scrolled ? 'text-amber-500' : 'text-white'} />
                        {t('lang')}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 rounded-md transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-4 gap-2">
                            {navLinks.map((link, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(link.path)}
                                    className={`text-right text-lg font-bold py-3 border-b border-slate-50 transition-colors ${
                                        activeSection === link.path ? 'text-amber-500' : 'text-slate-700 hover:text-amber-500'
                                    }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                            <button
                                onClick={() => {
                                    toggleLanguage();
                                    setIsOpen(false);
                                }}
                                className="flex items-center justify-center gap-2 w-full mt-4 bg-slate-900 text-white py-4 rounded-xl font-bold shadow-lg shadow-slate-900/20 active:scale-95 transition-all"
                            >
                                <Globe size={20} className="text-amber-500" />
                                {t('lang')}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;