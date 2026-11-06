import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu as MenuIcon, X, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#081c15]/95 backdrop-blur-md border-b border-[#1a4435] shadow-lg shadow-black/20 py-3.5'
            : 'bg-gradient-to-b from-[#081c15]/90 via-[#081c15]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar 3-Zone Contract */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="group flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
            >
              <div className="w-10 h-10 rounded-full border border-[#c5a059]/40 bg-[#0f2d22] flex items-center justify-center text-[#c5a059] group-hover:border-[#c5a059] transition-colors">
                <span className="font-cinzel text-xs font-bold tracking-widest">1881</span>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-base sm:text-lg lg:text-xl font-bold tracking-wider text-[#f7f3ea] group-hover:text-[#c5a059] transition-colors whitespace-nowrap">
                  CAFÉ DE CENTRAL 1881
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#c5a059] uppercase -mt-0.5 whitespace-nowrap">
                  Kurseong Station · Platform 1
                </span>
              </div>
            </a>

            {/* Zone 2: 4-5 single-line clean text links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#d5cbba]" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#c5a059] transition-colors whitespace-nowrap tracking-wide py-1 border-b border-transparent hover:border-[#c5a059]/50"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href="tel:+919832340454"
                className="flex items-center gap-2 text-xs font-medium text-[#c5a059] hover:text-[#dfb76c] px-3 py-2 rounded-lg border border-[#c5a059]/30 hover:border-[#c5a059] transition-colors whitespace-nowrap"
                title="Call Cafe De Central 1881"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="tabular-nums">+91 98323 40454</span>
              </a>

              <button
                type="button"
                onClick={onOpenReservation}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider text-[#081c15] bg-[#c5a059] hover:bg-[#dfb76c] active:bg-[#b08e48] rounded-lg transition-all shadow-md shadow-[#c5a059]/10 whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve a Table</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={onOpenReservation}
                className="sm:hidden px-3 py-1.5 text-xs font-semibold text-[#081c15] bg-[#c5a059] rounded-md"
              >
                Reserve
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#f7f3ea] hover:text-[#c5a059] focus:outline-none focus:ring-2 focus:ring-[#c5a059] rounded-lg"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#0b231a] border-l border-[#1a4435] p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#1a4435]">
                <div className="font-cinzel text-base font-bold text-[#c5a059]">
                  CAFÉ DE CENTRAL 1881
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#d5cbba] hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-[#f7f3ea] hover:text-[#c5a059] transition-colors py-2 border-b border-[#1a4435]/40"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#d5cbba]">
                  <MapPin className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>Platform 1, Kurseong Station</span>
                </div>
                <a
                  href="tel:+919832340454"
                  className="flex items-center gap-2 text-xs text-[#c5a059] font-medium"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span className="tabular-nums">+91 98323 40454</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1a4435] space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-[#081c15] bg-[#c5a059] hover:bg-[#dfb76c] rounded-lg transition-colors shadow-md"
              >
                Reserve a Table
              </button>
              <a
                href="https://wa.me/919832340454"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2.5 text-center text-xs font-medium text-[#d5cbba] hover:text-white border border-[#1a4435] rounded-lg"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
