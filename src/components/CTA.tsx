import { Scissors } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-mh-dark border-t border-b border-mh-brown/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-mh-brown/30 via-mh-dark to-mh-dark" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          Siap tampil lebih rapi <br className="hidden md:block"/> dan percaya diri?
        </h2>
        <p className="text-xl text-mh-light/80 mb-10 max-w-2xl mx-auto font-light">
          Booking sekarang dan temukan gaya terbaikmu bersama Machine Head.
        </p>

        <a
          href="https://wa.me/6285942177166?text=Halo%20Machine%20Head,%20saya%20ingin%20booking%20pangkas%20rambut."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-hover text-white px-10 py-5 rounded-sm font-bold text-lg tracking-widest uppercase shadow-[0_0_20px_rgba(249,137,72,0.3)] hover:shadow-[0_0_40px_rgba(249,137,72,0.6)] hover:-translate-y-1 transition-all duration-300"
        >
          <Scissors size={24} />
          Booking Pangkas Rambut
        </a>
      </div>
    </section>
  );
}
