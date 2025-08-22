import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import Clients from './components/Clients';
import Contact from './components/Contact';
import PageHeader from './components/PageHeader';
import Services from './pages/Services';
import Careers from './pages/Careers';
import './App.css';
import './components/PageHeader.css';

// Main App content with theme and routing
const AppContent = () => {
  const location = useLocation();
  const { theme } = useTheme();

  // Apply theme class to body for global theming
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Header />
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={
                <>
                  <Hero />
                  <IntroSection />
                  <AboutSection />
                  <Clients />
                  <Contact />
                </>
              } />
                <Route path="/services" element={
                  <div className="page-content">
                    <PageHeader />
                    <Services />
                  </div>
                } />
              
              <Route path="/about" element={
                <div className="page-content">
                  <PageHeader />
                  <AboutSection expanded={true} fullPage={true} />
                </div>
              } />
              
              <Route path="/contact" element={
                <div className="page-content">
                  <PageHeader />
                  <Contact fullPage={true} />
                </div>
              } />
              
              <Route path="/careers" element={
                <div className="page-content">
                  <PageHeader />
                  <Careers />
                </div>
              } />
              
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
      <Footer />
    </div>
  );
};

// Main App component with theme provider
function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="*" element={<AppContent />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;