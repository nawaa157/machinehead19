import { motion } from 'motion/react';

export function About() {
  return (
    <section id="tentang" className="py-24 bg-mh-dark relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
              Tentang Machine Head
            </h2>
            
            <div className="glass-panel p-8 md:p-12 rounded-lg relative overflow-hidden">
               <div className="absolute -top-10 -left-10 w-32 h-32 bg-mh-gold/10 rounded-full blur-2xl" />
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-mh-orange/10 rounded-full blur-2xl" />
               
              <p className="text-lg md:text-2xl text-mh-light/90 leading-relaxed font-light relative z-10">
                "Machine Head menghadirkan pengalaman pangkas rambut casual dan profesional dengan sentuhan vintage modern yang nyaman, santai, dan tetap elegan. Setiap potongan dibuat detail untuk menyesuaikan karakter dan gaya pelanggan."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
