import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Star } from "lucide-react";
import { cn } from "../lib/utils";

const barbers = [
  {
    name: "Rofiqi",
    badge: "Profesional",
    services: [
      { name: "Haircut & styling", price: "20k" },
      { name: "Woman Haircut & Styling", price: "start from 50k" },
      { name: "For booking", price: "25k" },
      { name: "Perm Treatment", isTitle: true },
      { name: "Downperm", price: "start from 70k" },
      { name: "Design perm", price: "start from 100k" },
      { name: "Kreatif perm", price: "start from 110k" },
      { name: "Home Service", price: "start from 40k" },
    ],
  },

  {
    name: "Ghofar",
    badge: "Profesional",
    services: [
      { name: "Haircut & styling", price: "20k" },
      { name: "Woman Haircut & Styling", price: "start from 50k" },
      { name: "For booking", price: "25k" },
      { name: "Perm Treatment", isTitle: true },
      { name: "Downperm", price: "start from 70k" },
      { name: "Design perm", price: "start from 100k" },
      { name: "Kreatif perm", price: "start from 110k" },
      { name: "Home Service", price: "start from 40k" },
    ],
  },

  {
    name: "Alan",
    badge: "Profesional",
    services: [
      { name: "Haircut & styling", price: "15k" },
      { name: "For booking", price: "20k" },
      { name: "Home Service", price: "start from 30k" },
    ],
  },

  {
    name: "Azul",
    badge: "Profesional",
    services: [
      { name: "Haircut & styling", price: "15k" },
      { name: "For booking", price: "20k" },
      { name: "Home Service", price: "start from 30k" },
    ],
  },

  {
    name: "Habil",
    badge: "Profesional",
    services: [
      { name: "Haircut & styling", price: "15k" },
      { name: "For booking", price: "20k" },
      { name: "Home Service", price: "start from 30k" },
    ],
  },
];

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="layanan"
      className="scroll-mt-32 py-24 bg-mh-brown relative"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-mh-dark/40 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Layanan & Tukang Cukur
          </h2>

          <p className="text-mh-light/70 max-w-2xl mx-auto">
            Pilih tukang cukur profesional kami dan temukan layanan
            yang sesuai dengan kebutuhan Anda.
          </p>
        </div>

        {/* LIST BARBER */}
        <div className="max-w-3xl mx-auto space-y-4">
          {barbers.map((barber, index) => (
            <div
              key={barber.name}
              className="bg-mh-dark/50 border border-mh-gold/20 rounded-sm overflow-hidden transition-all duration-300 hover:border-mh-gold/40 hover:shadow-[0_0_15px_rgba(155,136,22,0.15)]"
            >

              {/* BUTTON */}
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div className="flex items-center gap-4">
                  <h3 className="text-xl md:text-2xl font-serif text-white">
                    {barber.name}
                  </h3>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-mh-gold/20 border border-mh-gold/30 text-mh-light text-xs uppercase tracking-wider font-medium">
                    <Star
                      size={12}
                      className="text-mh-gold fill-current"
                    />

                    {barber.badge}
                  </span>
                </div>

                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-mh-gold transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>

              {/* CONTENT */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >

                    {/* SERVICES */}
                    <div className="px-6 pb-6 pt-2 border-t border-mh-brown/50">
                      <ul className="space-y-3">
                        {barber.services.map((service, idx) => (
                          <li
                            key={idx}
                            className={cn(
                              "flex justify-between items-end",
                              service.isTitle
                                ? "mt-4 mb-2 pb-1 border-b border-mh-brown/50"
                                : ""
                            )}
                          >
                            {service.isTitle ? (
                              <span className="font-semibold text-mh-gold text-lg tracking-wide">
                                {service.name}
                              </span>
                            ) : (
                              <>
                                <span className="text-mh-light/90">
                                  {service.name}
                                </span>

                                <div className="flex-grow border-b border-dotted border-mh-light/20 mx-4 mb-1" />

                                <span className="text-mh-orange font-medium">
                                  {service.price}
                                </span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* RAZIA SECTION */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="bg-mh-dark/50 border border-mh-gold/20 rounded-xl p-6 md:p-8 space-y-8">

            {/* TITLE */}
            <div className="text-center space-y-3">
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-white">
                Kami Juga Melayani Razia Rambut
              </h3>

              <p className="text-mh-light/70">
                Tersedia untuk berbagai tempat seperti:
              </p>

              <ul className="text-mh-light/70 text-sm md:text-base grid grid-cols-2 md:grid-cols-4 gap-2 list-disc pl-5 text-left max-w-2xl mx-auto">
                <li>sekolah</li>
                <li>kantor</li>
                <li>pesantren</li>
                <li>tempat lainnya</li>
              </ul>
            </div>

            {/* VIDEO */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <video
                src="/razia-1.mp4"
                controls
                muted
                playsInline
                preload="metadata"
                className="w-full aspect-video rounded-xl object-cover bg-black"
              ></video>

              <video
                src="/razia-2.mp4"
                controls
                muted
                playsInline
                preload="metadata"
                className="w-full aspect-video rounded-xl object-cover bg-black"
              ></video>

              <video
                src="/razia-3.mp4"
                controls
                muted
                playsInline
                preload="metadata"
                className="w-full aspect-video rounded-xl object-cover bg-black"
              ></video>

            </div>

            {/* CTA */}
            <div className="text-center space-y-2">
              <p className="text-mh-light/80 font-medium text-sm md:text-base">
                Tertarik mengadakan razia rambut di tempatmu?
              </p>

              <p className="text-mh-gold font-semibold text-lg md:text-xl">
                Buruan hubungi kami !!
              </p>

              <p className="text-mh-light/60 italic text-xs md:text-sm">
                “Kami datang bukan merusak penampilan,
                tapi menyelamatkan masa depan rambutmu”
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}