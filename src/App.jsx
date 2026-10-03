import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contacts';

// الصفحة الرئيسية (SPA): بتجمع كل السكاشن تحت بعضها بتسلسل منطقي
const Home = () => (
  <main>
    <Hero />
    <About />
    <Projects />
    <Contact />
  </main>
);

function App() {
  const { i18n } = useTranslation();

  // تغيير اتجاه الموقع ونوع الخط بناءً على اللغة
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <div className={`min-h-screen bg-white ${i18n.language === 'ar' ? 'font-arabic' : 'font-english'}`}>
        <Navbar />
        
        {/* 
          تم تبسيط الـ Routes لأننا حولنا الموقع لـ One-Page Scroll 
          وده بيخلي تجربة المستخدم (UX) أسرع وأفخم بكتير 
        */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;