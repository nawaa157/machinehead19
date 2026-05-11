import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    url: 'image-a.jpg',
    title: 'Casual Style',
  },
  {
    url: 'image-b.jpg',
    title: 'Modern Cut',
  },
  {
    url: 'image-c.jpg',
    title: 'Clean Texture',
  }
];

export function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="galeri" className="scroll-mt-32 py-24 bg-mh-dark">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Galeri Hasil Pangkas Rambut
          </h2>
          <p className="text-mh-light/70 max-w-2xl mx-auto">
            Sentuhan rapi dan profesional dari tukang cukur kami untuk berbagai gaya rambut modern.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-sm cursor-pointer break-inside-avoid shadow-lg"
              onClick={() => setSelectedImg(img.url)}
            >
              {/* Warm vintage filter layer */}
              <div className="absolute inset-0 bg-[#A67B5B]/20 mix-blend-color z-10 transition-opacity duration-300 group-hover:opacity-0" />
              
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-6">
                <span className="text-white font-medium tracking-wide uppercase text-sm border-l-2 border-mh-orange pl-3">
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-mh-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-mh-light hover:text-mh-gold transition-colors z-[101]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
            >
              <X size={32} />
            </button>
            
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded-sm shadow-2xl border border-mh-brown"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
