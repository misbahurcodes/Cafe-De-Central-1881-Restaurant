import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, Compass, ArrowUp, Star } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05130e] text-[#ede4d3] border-t border-[#1a4435] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1a4435]/60">
          {/* Brand & Heritage Blurb */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#c5a059] bg-[#0f2d22] flex items-center justify-center text-[#c5a059]">
                <span className="font-cinzel text-xs font-bold">1881</span>
              </div>
              <div>
                <span className="font-cinzel text-lg font-bold tracking-wider text-[#f7f3ea] block">
                  CAFÉ DE CENTRAL 1881
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#c5a059] uppercase block">
                  Kurseong Station · Platform 1
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#d5cbba] leading-relaxed max-w-sm font-light">
              Where Heritage Meets Flavour. A historic colonial refreshment salon dating back to the inception of the Darjeeling Himalayan Railway in 1881.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b231a] border border-[#1a4435] text-xs">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="font-bold text-white tabular-nums">4.4</span>
                <span className="text-[#d5cbba]">(363 Google Reviews)</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-[#c5a059] tracking-widest uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#d5cbba]">
              <li>
                <a href="#story" className="hover:text-[#c5a059] transition-colors">
                  Our Story & Heritage
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#c5a059] transition-colors">
                  Interactive Digital Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#c5a059] transition-colors">
                  Ambience & Dining Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#c5a059] transition-colors">
                  Guest Feedback & Ratings
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#c5a059] transition-colors">
                  Platform 1 Location & Map
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenReservation}
                  className="text-[#dfb76c] hover:underline font-semibold"
                >
                  Reserve a Heritage Table
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-[#c5a059] tracking-widest uppercase">
              Station Address
            </h4>
            <div className="space-y-2.5 text-xs text-[#d5cbba]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>
                  Railway Station, Platform 1, Naya Bazaar, Kurseong, West Bengal 734203
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href="tel:+919832340454" className="hover:text-[#dfb76c] font-medium tabular-nums">
                  +91 98323 40454
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>Open Daily: 9:00 AM – 9:30 PM</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/919832340454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0f2d22] border border-[#1a4435] text-[#dfb76c] hover:border-[#c5a059] transition-colors text-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#d5cbba]/60">
          <p>© {new Date().getFullYear()} CAFÉ DE CENTRAL 1881. All Rights Reserved. Kurseong Railway Station.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#c5a059]">
              <Compass className="w-3.5 h-3.5" />
              UNESCO DHR Heritage Site
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#d5cbba] hover:text-[#dfb76c] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
