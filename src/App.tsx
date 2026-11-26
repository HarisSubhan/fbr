import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ToastProvider } from './components/Toast'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Home from './pages/Home'
import About from './pages/About'
import ServicesIndex from './pages/ServicesIndex'
import ServiceDetail from './pages/ServiceDetail'
import ProjectsPage from './pages/ProjectsPage'
import BeforeAfterPage from './pages/BeforeAfterPage'
import OneWindow from './pages/OneWindow'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion()
  return (
    <motion.main
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><ServicesIndex /></PageWrapper>} />
        <Route path="/services/:slug" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
        <Route path="/before-after" element={<PageWrapper><BeforeAfterPage /></PageWrapper>} />
        <Route path="/one-window" element={<PageWrapper><OneWindow /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <AnimatedRoutes />
        <Footer />
        <FloatingWhatsApp />
      </BrowserRouter>
    </ToastProvider>
  )
}
