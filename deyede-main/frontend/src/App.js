import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaChooser from "@/components/WaChooser";
import Home from "@/pages/Home";
import Katalog from "@/pages/Katalog";
import Portofolio from "@/pages/Portofolio";
import CaraPesan from "@/pages/CaraPesan";
import Tentang from "@/pages/Tentang";
import Kontak from "@/pages/Kontak";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/cara-pesan" element={<CaraPesan />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-black text-white min-h-screen font-sans">
        <div aria-hidden="true" className="grain-overlay pointer-events-none fixed inset-0 z-[100]" />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <WaChooser />
      </div>
    </BrowserRouter>
  );
}

export default App;
