import React from 'react';
import { ArrowRight, Calendar, Star, Clock, MapPin, Compass } from 'lucide-react';
import { ASSET_IMAGES } from '../assets/images';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.hero}
          alt="Vintage colonial interior of Cafe De Central 1881 at Kurseong Railway Station"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#081c15] via-[#081c15]/75 to-[#081c15]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#081c15_95%)] opacity-80" />
      </div>

      {/* Decorative Heritage Border Hairlines */}
      <div className="absolute top-20 left-4 right-4 sm:left-8 sm:right-8 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059]/30 to-transparent pointer-events-none z-10" />

      {/* Hero Content Container */}
      <div className="relative z-10 flex-1 flex items-center pt-28 pb-12 sm:pt-36 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Natural Editorial Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f2d22]/90 border border-[#c5a059]/40 backdrop-blur-md mb-6">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#c5a059] uppercase font-cinzel">
              Est. 1881 · Kurseong Railway Station · Platform 1
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif-vintage text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#f7f3ea] leading-[1.08] text-balance mb-6 drop-shadow-md">
            Where Heritage <br />
            <span className="italic font-normal text-[#dfb76c] font-serif-vintage">Meets Flavour.</span>
          </h1>

          {/* Introduction Copy */}
          <p className="text-base sm:text-lg text-[#d5cbba] leading-relaxed max-w-2xl mb-8 font-sans-body font-light">
            Perched along the mist-draped tracks of the UNESCO World Heritage Darjeeling Himalayan Railway,{' '}
            <strong className="text-[#f7f3ea] font-medium">CAFÉ DE CENTRAL 1881</strong> invites you into a colonial-era sanctuary of polished teakwood, vintage brass chandeliers, artisanal Darjeeling teas, sizzling delicacies, and timeless mountain charm.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onExploreMenu}
              className="group flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-semibold tracking-wider text-[#081c15] bg-[#c5a059] hover:bg-[#dfb76c] active:bg-[#a98741] rounded-lg transition-all shadow-xl shadow-black/40"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onOpenReservation}
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide text-[#f7f3ea] bg-[#0f2d22]/80 hover:bg-[#143b2d] border border-[#c5a059]/50 hover:border-[#c5a059] rounded-lg backdrop-blur-md transition-all"
            >
              <Calendar className="w-4 h-4 text-[#c5a059]" />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Direct Station Details Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#d5cbba]/80 font-sans-body">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
              Platform 1, Kurseong Station (4,864 ft)
            </span>
            <span aria-hidden="true" className="text-[#c5a059]/40">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
              Open Daily: 9:00 AM – 9:30 PM
            </span>
          </div>
        </div>
      </div>

      {/* Trust Strip & Social Proof Adjacency */}
      <div className="relative z-10 border-t border-[#1a4435] bg-[#0b231a]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {/* Google Rating */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0f2d22] border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 text-[#dfb76c] fill-[#dfb76c]" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-serif-vintage text-lg font-bold text-[#f7f3ea] tabular-nums">4.4</span>
                  <span className="text-xs text-[#c5a059]">★★★★★</span>
                </div>
                <p className="text-xs text-[#d5cbba]">363 Google Reviews</p>
              </div>
            </div>

            {/* Heritage Location */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0f2d22] border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 text-[#c5a059]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#f7f3ea]">Kurseong Stn.</p>
                <p className="text-xs text-[#d5cbba]">Platform No. 1</p>
              </div>
            </div>

            {/* Historical Heritage */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0f2d22] border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                <span className="font-cinzel text-xs font-bold text-[#c5a059]">1881</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#f7f3ea]">UNESCO DHR</p>
                <p className="text-xs text-[#d5cbba]">Toy Train Corridor</p>
              </div>
            </div>

            {/* Cuisine & Teas */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0f2d22] border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                <span className="text-base">☕</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#f7f3ea]">Darjeeling Teas</p>
                <p className="text-xs text-[#d5cbba]">Continental & Sizzlers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
