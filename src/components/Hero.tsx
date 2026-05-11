import { motion } from 'motion/react';
import { Scissors, MapPin, Instagram } from 'lucide-react';

export function Hero() {
  return (
    <section id="beranda" className="scroll-mt-32 relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Cinematic Dark Vintage Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/machinehead19-bg.jpg)` }}
      >
        <div className="absolute inset-0 bg-mh-dark/70 sm:bg-mh-dark/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-mh-dark via-transparent to-mh-dark/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-mh-dark/50 to-mh-dark/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6 opacity-80">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
               <Scissors className="w-12 h-12 text-mh-gold" />
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-wider drop-shadow-2xl">
            Machine Head
          </h1>
          
          <p className="text-xl md:text-2xl text-mh-light/90 font-medium mb-4 tracking-wide uppercase">
            Pangkas Rambut Casual dan Profesional
          </p>
          
          <p className="text-base md:text-lg text-mh-light/70 mb-12 max-w-2xl mx-auto font-light">
            "Potongan rapi dengan sentuhan tukang cukur modern. Gaya casual, hasil profesional."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://wa.me/6285942177166?text=Halo%20Machine%20Head,%20saya%20ingin%20booking%20pangkas%20rambut."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-gradient-hover text-white px-8 py-4 rounded-sm font-semibold text-sm tracking-widest uppercase shadow-[0_0_20px_rgba(249,137,72,0.3)] hover:shadow-[0_0_30px_rgba(249,137,72,0.5)] transition-all flex items-center justify-center gap-3"
            >
              <Scissors size={18} />
              Booking Sekarang
            </a>
            
            <a
              href="https://maps.app.goo.gl/Acg6DxoptbUVidpM7"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto glass-panel text-mh-light px-8 py-4 rounded-sm font-semibold text-sm tracking-widest uppercase hover:bg-mh-brown/60 transition-all flex items-center justify-center gap-3"
            >
              <MapPin size={18} />
              Lokasi
            </a>

            <a
              href="https://instagram.com/machinehead19"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto border border-mh-gold/50 text-mh-gold px-8 py-4 rounded-sm font-semibold text-sm tracking-widest uppercase hover:bg-mh-gold hover:text-mh-dark transition-all flex items-center justify-center gap-3"
            >
              <Instagram size={18} />
              Instagram
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating dust particles or subtle gradient lights could go here */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mh-orange/10 rounded-full blur-[128px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mh-gold/10 rounded-full blur-[128px] pointer-events-none mix-blend-screen" />
    </section>
  );
}
