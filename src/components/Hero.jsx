import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Pause } from 'lucide-react'; // أيقونات تشغيل وتوقيف الفيديو

const Hero = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // --- الإعدادات ---
  // لو عندك فيديو مقاولات احترافي (mp4)، خليه true وحط الفيديو في مجلد public باسم hero-video.mp4
  // لو عايز صور بس، خليها false
  const useVideoBackground = false; 

  const images = [
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  ];

  // دالة لتغيير الصورة (تعمل فقط إذا كان useVideoBackground = false)
  useEffect(() => {
    if (useVideoBackground) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 6000); // 6 ثواني مدة ممتازة ومريحة للعين
    return () => clearInterval(interval);
  }, [useVideoBackground, images.length]);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
      
      {/* 1. طبقة الخلفية (فيديو أو صور) */}
      {useVideoBackground ? (
        <>
          <video 
            id="hero-bg-video"
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 z-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* زر التوقف/التشغيل للفيديو */}
          <button 
            onClick={() => {
              const video = document.getElementById('hero-bg-video');
              if (isVideoPlaying) video.pause();
              else video.play();
              setIsVideoPlaying(!isVideoPlaying);
            }}
            className="absolute bottom-8 right-8 z-20 text-white/50 hover:text-white transition"
          >
            {isVideoPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
        </>
      ) : (
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} // انتقال ناعم جداً بدون زووم (Scale)
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${images[currentImageIndex]}')` }}
          />
        </AnimatePresence>
      )}

      {/* 2. طبقة التعتيم (Overlay) لضمان وضوح النص دائماً */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* 3. المحتوى النصي والأزرار */}
      <div className="container relative z-10 mx-auto px-6 text-center text-white mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary tracking-wide drop-shadow-md"
        >
          {t('heroTitle')}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-light text-gray-200 drop-shadow-md leading-relaxed"
        >
          {t('heroSubtitle')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <Link 
            to="/projects" 
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded font-bold transition duration-300"
          >
            {t('ctaProjects')}
          </Link>
          <Link 
            to="/contact" 
            className="border-2 border-white/80 text-white hover:bg-white hover:text-dark px-8 py-3.5 rounded font-bold transition duration-300 backdrop-blur-sm"
          >
            {t('ctaContact')}
          </Link>
        </motion.div>
      </div>

      {/* 4. مؤشرات الصور (تظهر فقط إذا لم نستخدم الفيديو) */}
      {!useVideoBackground && (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === currentImageIndex ? 'bg-primary w-8' : 'bg-white/40 hover:bg-white/80 w-4'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;