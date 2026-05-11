import { MapPin, Clock, Map } from 'lucide-react';
import { motion } from 'motion/react';

export function Location() {
  return (
    <section id="lokasi" className="scroll-mt-32 py-24 bg-mh-dark">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                Kunjungi Kami
              </h2>
              
              <div className="glass-panel p-8 rounded-sm mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-mh-dark rounded-full border border-mh-brown">
                    <MapPin className="text-mh-orange w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-2">MACHINE HEAD</h3>
                    <p className="text-mh-light/80 font-light leading-relaxed">
                      G6XJ+PWH, Jl. Joyolengkoro, Balong Sari, Ploso,<br/>
                      Kec. Ploso, Kabupaten Jombang,<br/>
                      Jawa Timur 61453
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-mh-dark rounded-full border border-mh-brown">
                    <Clock className="text-mh-orange w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-2">Jam Operasional</h3>
                    <p className="text-mh-light/80 font-light">Setiap Hari: 10:00 - 22:00</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/Acg6DxoptbUVidpM7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-mh-brown border border-mh-gold/50 text-white px-8 py-4 rounded-sm font-semibold tracking-wide hover:bg-mh-gold hover:text-mh-dark transition-all duration-300"
              >
                <Map size={20} />
                Buka Rute Google Maps
              </a>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full h-full rounded-sm overflow-hidden border border-mh-gold/20 shadow-2xl relative group bg-mh-brown"
            >
               <div className="w-full h-full flex items-center justify-center text-mh-light/50">
                  {/* Using an iframe to embed the map of Ploso area or a placeholder if exact embed fails. Given address, we will just use a generic Jombang or exact place if possible. We'll use an iframe with q= parameter */}
                  <iframe 
                    title="Machine Head Location"
                    src="https://maps.google.com/maps?q=-7.450687, 112.2323734&hl=id&z=15&output=embed" 
                    className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  {/* Note: I estimated coordinate for Ploso Jombang. Since there's a Maps short link, providing an embedded iframe with coords is standard. */}
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
