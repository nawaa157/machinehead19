import { Instagram, MapPin, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a1000] pt-16 pb-8 border-t border-mh-gold/10">
      <div className="container mx-auto px-6 justify-between flex flex-col md:flex-row gap-12 mb-12">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-serif font-bold text-mh-light mb-4">MACHINE HEAD</h2>
          <p className="text-mh-light/60 font-light italic text-sm mb-6 max-w-sm">
            "Pangkas rambut casual dan profesional dengan sentuhan vintage modern."
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-mh-gold to-mh-orange" />
        </div>

        <div className="flex flex-col sm:flex-row gap-12 md:w-2/3 md:justify-end">
          <div>
            <h4 className="text-white font-semibold tracking-widest uppercase mb-6 text-sm">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://wa.me/6285942177166?text=Halo%20Machine%20Head,%20saya%20ingin%20booking%20pangkas%20rambut." 
                  className="flex items-center gap-3 text-mh-light/70 hover:text-mh-gold transition-colors text-sm"
                >
                  <MessageCircle size={18} />
                  Booking via WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/machinehead19" 
                  className="flex items-center gap-3 text-mh-light/70 hover:text-mh-gold transition-colors text-sm"
                >
                  <Instagram size={18} />
                  @machinehead19
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.app.goo.gl/Acg6DxoptbUVidpM7" 
                  className="flex items-center gap-3 text-mh-light/70 hover:text-mh-gold transition-colors text-sm"
                >
                  <MapPin size={18} />
                  Lokasi Maps
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 border-t border-mh-brown/30 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        <p className="text-mh-light/40 text-xs font-light tracking-wide uppercase">
          &copy; {new Date().getFullYear()} Machine Head. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
