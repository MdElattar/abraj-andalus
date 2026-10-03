import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    // بيانات المشاريع مع صور معمارية احترافية عالية الجودة
    const projectsData = [
        {
            id: 1,
            title: t('proj1Title'),
            category: t('proj1Cat'),
            image: "https://images.unsplash.com/photo-1579625402016-11f8b1d30561?auto=format&fit=crop&w=1000&q=80",
        },
        {
            id: 2,
            title: t('proj2Title'),
            category: t('proj2Cat'),
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
        },
        {
            id: 3,
            title: t('proj3Title'),
            category: t('proj3Cat'),
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
        }
    ];

    // إعدادات الأنيميشن لظهور الكروت بالتدريج
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* لمسة تصميمية خلفية (Pattern) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-100 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -left-24 w-72 h-72 bg-slate-200 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-3 block">
                            {t('projects')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                            {t('projectsSecTitle')}
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {t('projectsSecSubtitle')}
                        </p>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projectsData.map((project) => (
                        <motion.div 
                            key={project.id}
                            variants={itemVariants}
                            className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
                        >
                            {/* Project Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                            {/* Project Info Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-amber-400 bg-slate-900/50 backdrop-blur-sm rounded-full">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    
                                    {/* Reveal on Hover Action Button */}
                                    <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <span className="text-white text-sm font-medium">
                                            {t('viewProject')}
                                        </span>
                                        <div className={`bg-amber-500 rounded-full p-1.5 ${isRtl ? 'rotate-0' : 'rotate-0'}`}>
                                            <ArrowUpRight size={16} className={`text-slate-900 ${isRtl ? '-scale-x-100' : ''}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;