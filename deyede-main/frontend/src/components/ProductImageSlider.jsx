import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductImageSlider({ images, alt, contain = false, testid }) {
  const [index, setIndex] = useState(0);
  const multi = images.length > 1;

  const go = (dir) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  const pick = (i) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex(i);
  };

  return (
    <div className="relative w-full h-full group/slider" data-testid={testid}>
      <AnimatePresence mode="wait" initial={false}>
        {images[index].endsWith(".mp4") ? (
          <motion.video
            key={images[index]}
            src={images[index]}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            aria-label={multi ? `${alt} — video ${index + 1}` : alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className={`w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ${
              contain ? "object-contain p-6 md:p-8" : "object-cover"
            }`}
          />
        ) : (
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={multi ? `${alt} — tampilan ${index + 1}` : alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className={`w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ${
              contain ? "object-contain p-6 md:p-8" : "object-cover"
            }`}
          />
        )}
      </AnimatePresence>

      {multi && (
        <>
          <button
            type="button"
            onClick={go(-1)}
            data-testid={`${testid}-prev`}
            aria-label="Foto sebelumnya"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/70 text-white border border-white/25 p-1.5 md:opacity-0 md:group-hover/slider:opacity-100 transition-opacity duration-300 hover:bg-black"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={go(1)}
            data-testid={`${testid}-next`}
            aria-label="Foto berikutnya"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/70 text-white border border-white/25 p-1.5 md:opacity-0 md:group-hover/slider:opacity-100 transition-opacity duration-300 hover:bg-black"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={pick(i)}
                data-testid={`${testid}-dot-${i}`}
                aria-label={`Ke foto ${i + 1}`}
                className={`w-1.5 h-1.5 transition-colors duration-300 ${
                  i === index ? "bg-black" : "bg-black/30 hover:bg-black/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
