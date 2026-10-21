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
import Promo from "@/pages/Promo";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function GoogleAnalytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;
    if (!measurementId || !/^G-[A-Z0-9]+$/.test(measurementId)) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function () {
        window.dataLayer.push(arguments);
      };

    if (!document.querySelector(`script[data-ga4="${measurementId}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.dataset.ga4 = measurementId;
      document.head.appendChild(script);
    }

    if (window.ga4MeasurementId !== measurementId) {
      window.gtag("js", new Date());
      window.gtag("config", measurementId, { send_page_view: false });
      window.ga4MeasurementId = measurementId;
    }

    window.gtag("event", "page_view", {
      page_path: `${pathname}${search}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search]);

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
        <Route path="/promo" element={<Promo />} />
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
      <GoogleAnalytics />
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
