import React from 'react';
import { Sparkles, MapPin, Compass, Train } from 'lucide-react';
import { ASSET_IMAGES } from '../assets/images';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-[#081c15] text-[#ede4d3] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#0f2d22] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#c5a059]" />
            <span className="font-cinzel text-xs font-semibold tracking-[0.25em] text-[#c5a059] uppercase">
              Our Heritage & Origin
            </span>
            <span className="h-[1px] w-8 bg-[#c5a059]" />
          </div>
          <h2 className="font-serif-vintage text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f3ea] tracking-tight mb-4">
            A Journey Through 1881 & The Mist-Veiled Rails
          </h2>
          <p className="text-sm sm:text-base text-[#d5cbba] leading-relaxed">
            Where the legendary whistle of the Darjeeling Toy Train echoes against colonial teakwood, and generations of tea planters, travelers, and mountain connoisseurs gather.
          </p>
        </div>

        {/* 2-Column Split: Visual Narrative & Editorial History */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Atmospheric Platform Image Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#1a4435] shadow-2xl bg-[#0b231a] group">
              <img
                src={ASSET_IMAGES.stationPlatform}
                alt="Kurseong Railway Station Platform 1 and Cafe De Central 1881 exterior at dusk"
                className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081c15] via-transparent to-black/20" />

              {/* Station Elevation Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#081c15]/90 border border-[#c5a059]/30 backdrop-blur-md flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-cinzel text-[#c5a059] tracking-wider uppercase font-semibold">
                    <Train className="w-4 h-4 text-[#c5a059]" />
                    Kurseong Station · Platform 1
                  </div>
                  <p className="text-xs text-[#d5cbba] mt-0.5 font-light">
                    Elevation: 4,864 ft (1,483 m) above sea level
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-[#c5a059] tabular-nums block">EST. 1881</span>
                  <span className="text-[11px] text-[#d5cbba]/70">UNESCO DHR</span>
                </div>
              </div>
            </div>

            {/* Vintage Stamp Accent */}
            <div className="hidden sm:block absolute -top-5 -right-5 w-24 h-24 rounded-full border-2 border-dashed border-[#c5a059]/40 bg-[#0f2d22]/90 backdrop-blur-md p-2 flex items-center justify-center text-center shadow-lg transform rotate-12">
              <span className="font-cinzel text-[10px] text-[#dfb76c] font-bold tracking-widest leading-tight uppercase">
                Historic <br />Platform <br />1881
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Chapters */}
          <div className="lg:col-span-6 space-y-8">
            {/* Story Block 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs font-cinzel text-[#c5a059] tracking-widest uppercase">
                <span className="text-sm font-bold">01.</span>
                <span>The Platform 1 Legacy</span>
              </div>
              <h3 className="font-serif-vintage text-2xl sm:text-3xl font-semibold text-[#f7f3ea]">
                Born with the Darjeeling Himalayan Railway
              </h3>
              <p className="text-sm sm:text-base text-[#d5cbba] leading-relaxed">
                In 1881, the pioneering narrow-gauge tracks of the Darjeeling Himalayan Railway climbed through the steep cloud-capped ridges of Kurseong. Platform 1 became the soul of this hill town — a meeting place where steam engines rested, brass lanterns flickered, and weary travelers were welcomed with fragrant infusions of fresh hill tea.
              </p>
            </div>

            {/* Story Block 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs font-cinzel text-[#c5a059] tracking-widest uppercase">
                <span className="text-sm font-bold">02.</span>
                <span>Restored Colonial Grandeur</span>
              </div>
              <h3 className="font-serif-vintage text-2xl sm:text-3xl font-semibold text-[#f7f3ea]">
                Teakwood, Brass & Mountain Whispers
              </h3>
              <p className="text-sm sm:text-base text-[#d5cbba] leading-relaxed">
                Carefully revitalized to honor its Victorian railway heritage, CAFÉ DE CENTRAL 1881 preserves original wood-paneled walls, crystal and brass chandeliers, tufted emerald leather seating, and arched colonial window bays that look directly out onto the platform where vintage steam locomotives still roll by.
              </p>
            </div>

            {/* Story Block 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs font-cinzel text-[#c5a059] tracking-widest uppercase">
                <span className="text-sm font-bold">03.</span>
                <span>The Culinary Philosophy</span>
              </div>
              <h3 className="font-serif-vintage text-2xl sm:text-3xl font-semibold text-[#f7f3ea]">
                From Colonial Roast to Himalayan Hearth
              </h3>
              <p className="text-sm sm:text-base text-[#d5cbba] leading-relaxed">
                Our kitchen bridges worlds: from authentic first-flush brews sourced directly from adjoining estates like Makaibari and Castleton, to legendary British railway mutton curries, hand-wrapped Himalayan momos, sizzling continental platters, and European bakery patisserie.
              </p>
            </div>

            {/* Heritage Features Grid */}
            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-[#1a4435]">
              <div className="p-3.5 rounded-xl bg-[#0b231a] border border-[#1a4435]">
                <div className="font-serif-vintage text-lg font-bold text-[#f7f3ea] mb-1">
                  Single-Estate
                </div>
                <div className="text-xs text-[#d5cbba]">
                  Fresh Darjeeling teas from Kurseong’s oldest tea gardens.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0b231a] border border-[#1a4435]">
                <div className="font-serif-vintage text-lg font-bold text-[#f7f3ea] mb-1">
                  Toy Train View
                </div>
                <div className="text-xs text-[#d5cbba]">
                  Dine right beside the tracks as UNESCO steam locomotives arrive.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
