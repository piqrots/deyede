import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, ArrowUpRight } from "lucide-react";
import { ADMINS, WA_MESSAGE, waLinkFor } from "@/data/content";

export default function WaChooser() {
  const [message, setMessage] = useState(null);

  const close = useCallback(() => setMessage(null), []);

  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest("a[href^='https://wa.me/']");
      if (!anchor || anchor.hasAttribute("data-wa-direct")) return;
      e.preventDefault();
      let text = WA_MESSAGE;
      try {
        text = new URL(anchor.href).searchParams.get("text") || WA_MESSAGE;
      } catch {
        text = WA_MESSAGE;
      }
      setMessage(text);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (message === null) return;
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [message, close]);

  return (
    <AnimatePresence>
      {message !== null && (
        <motion.div
          data-testid="wa-chooser-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[110] flex items-center justify-center px-6"
          onClick={close}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-md bg-black border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/15">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-thread">
                Chat WhatsApp
              </p>
              <button
                type="button"
                onClick={close}
                data-testid="wa-chooser-close"
                aria-label="Tutup"
                className="text-white/50 hover:text-white transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl md:text-3xl uppercase tracking-tight">
                Pilih Admin
              </h3>
              <p className="mt-2 text-sm text-white/50 leading-relaxed">
                Keduanya siap melayani 24 jam — pilih salah satu untuk mulai
                chat dengan pesan yang sama.
              </p>
              <div className="mt-6 border border-white/15 divide-y divide-white/15">
                {ADMINS.map((admin, i) => (
                  <a
                    key={admin.label}
                    href={waLinkFor(admin.number, message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-wa-direct="true"
                    data-testid={`wa-chooser-admin-${i + 1}`}
                    onClick={close}
                    className="group flex items-center justify-between gap-4 p-5 hover:bg-white/[0.04] transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <MessageCircle
                        className="w-5 h-5 text-thread"
                        strokeWidth={1.5}
                      />
                      <div>
                        <p className="font-sans font-light">{admin.label}</p>
                        <p className="mt-1 font-mono text-xs text-white/50">
                          {admin.display}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-thread transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
