import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Layanan', href: '#layanan' },
  { name: 'Galeri', href: '#galeri' },
  { name: 'Keunggulan', href: '#keunggulan' },
  { name: 'Lokasi', href: '#lokasi' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-mh-dark/80 backdrop-blur-md shadow-lg shadow-mh-dark/50 py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#beranda" className="text-2xl font-serif font-bold text-mh-light tracking-wider hover:text-mh-gold transition-colors">
          MACHINE HEAD
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
<a
  key={link.name}
  href={link.href}
  onClick={(e) => {
      e.preventDefault();

      const section = document.querySelector(link.href);

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }}
  className="text-sm font-medium tracking-wide text-mh-light/80 hover:text-mh-gold transition-colors"
>
  {link.name}
</a>
          ))}
          <a
            href="https://instagram.com/machinehead19"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium tracking-wide text-mh-light/80 hover:text-mh-gold transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/6285942177166?text=Halo%20Machine%20Head,%20saya%20ingin%20booking%20pangkas%20rambut."
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-hover text-white px-6 py-2.5 rounded-sm font-medium text-sm tracking-wide shadow-lg hover:shadow-mh-orange/20"
          >
            Booking
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-mh-light hover:text-mh-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-mh-dark/95 backdrop-blur-xl border-b border-mh-brown overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link) => (
<a
    key={link.name}
    href={link.href}
    onClick={(e) => {
      e.preventDefault();

      const section = document.querySelector(link.href);

      setIsMobileMenuOpen(false);

      if (section) {
        setTimeout(() => {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 200);
      }
    }}
    className="text-lg font-medium text-mh-light/90 hover:text-mh-gold transition-colors"
  >
    {link.name}
  </a>
))}
              <a
                href="https://instagram.com/machinehead19"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium text-mh-light/90 hover:text-mh-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/6285942177166?text=Halo%20Machine%20Head,%20saya%20ingin%20booking%20pangkas%20rambut."
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-hover text-white px-8 py-3 rounded-sm font-medium text-base tracking-wide shadow-lg w-4/5 text-center"
              >
                Booking Sekarang
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
