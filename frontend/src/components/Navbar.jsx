import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LOGO_URL, NAV_LINKS, WA_DEFAULT } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        data-testid="site-header"
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/15"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" data-testid="nav-logo" className="flex items-center">
            <img
              src={LOGO_URL}
              alt="Deyede Custom Semarang"
              className="h-7 md:h-9 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                to={link.to}
                data-testid={`nav-link-${link.id}`}
                className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:text-white ${
                  location.pathname === link.to ? "text-white" : "text-white/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-wa-button"
              className="group flex items-center gap-2 bg-white text-black font-mono text-xs uppercase tracking-[0.2em] px-5 py-2.5 transition-colors duration-300 hover:bg-transparent hover:text-white border border-white"
            >
              Pesan
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Buka menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center px-8 lg:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
              >
                <Link
                  to={link.to}
                  data-testid={`mobile-nav-link-${link.id}`}
                  className={`block font-serif text-4xl py-3 border-b border-white/10 ${
                    location.pathname === link.to ? "text-white" : "text-white/50"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-nav-wa-button"
              className="mt-8 flex items-center justify-center gap-2 bg-white text-black font-mono text-xs uppercase tracking-[0.2em] px-6 py-4"
            >
              Pesan via WhatsApp
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
