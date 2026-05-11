import { Coffee, Scissors, MessageCircle, Home, Award, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Coffee,
    title: 'Tempat Nyaman & Santai',
    description: 'Suasana vintage modern yang hangat, membuat waktu tunggu terasa lebih rileks.'
  },
  {
    icon: Award,
    title: 'Tukang Cukur Berpengalaman',
    description: 'Ditangani oleh tenaga profesional yang detail dan paham karakter rambut Anda.'
  },
  {
    icon: MessageCircle,
    title: 'Booking via WhatsApp',
    description: 'Tidak perlu antri lama. Reservasi jadwal dengan mudah hanya melalui chat.'
  },
  {
    icon: Home,
    title: 'Tersedia Home Service',
    description: 'Layanan pangkas rambut langsung di rumah Anda untuk kenyamanan ekstra.'
  },
  {
    icon: Scissors,
    title: 'Gaya Casual & Modern',
    description: 'Mulai dari potongan klasik hingga tekstur modern kekinian, hasil selalu rapi.'
  },
  {
    icon: CheckCircle,
    title: 'Pelayanan Detail & Profesional',
    description: 'Kami memperhatikan setiap sisi potongan untuk menyempurnakan penampilan Anda.'
  }
];

export function Features() {
  return (
    <section id="keunggulan" className="scroll-mt-32 py-24 bg-mh-brown relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Mengapa Machine Head?
          </h2>
          <p className="text-mh-light/70 max-w-2xl mx-auto text-lg">
            Kami tidak hanya sekadar memotong rambut, tetapi memberikan pengalaman premium dalam suasana yang bersahabat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-sm group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-mh-dark rounded-sm flex items-center justify-center mb-6 border border-mh-brown group-hover:border-mh-orange transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-mh-gold group-hover:text-mh-orange transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-mh-light/70 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
