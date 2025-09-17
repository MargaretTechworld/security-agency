import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';
import './components/PageHeader.css';

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const IntroSection = lazy(() => import('./components/IntroSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const Clients = lazy(() => import('./components/Clients'));
const Contact = lazy(() => import('./components/Contact'));
const PageHeader = lazy(() => import('./components/PageHeader'));
const Services = lazy(() => import('./pages/Services'));
const Careers = lazy(() => import('./pages/Careers'));

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="loading-container">
    <LoadingSpinner />
  </div>
);

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
        <Suspense fallback={<LoadingFallback />}>
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route 
                path="/" 
                element={
                  <>
                    <Hero />
                    <IntroSection />
                    <AboutSection />
                    <Clients />
                    <Contact />
                  </>
                } 
              />
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
        </Suspense>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

// Main App component with theme provider
const App = () => (
  <ThemeProvider>
    <Routes>
      <Route path="*" element={<AppContent />} />
    </Routes>
  </ThemeProvider>
);

export default App;