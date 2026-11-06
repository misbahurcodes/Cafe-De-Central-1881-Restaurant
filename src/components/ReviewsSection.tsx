import React from 'react';
import { Star, ExternalLink, CheckCircle, Award, MapPin } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const googleReviewSearchUrl =
    'https://www.google.com/search?q=Cafe+De+Central+1881+Kurseong+Railway+Station+reviews';

  return (
    <section id="reviews" className="py-24 bg-[#0b231a] text-[#ede4d3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#c5a059]" />
            <span className="font-cinzel text-xs font-semibold tracking-[0.25em] text-[#c5a059] uppercase">
              Guest Feedback & Ratings
            </span>
            <span className="h-[1px] w-8 bg-[#c5a059]" />
          </div>
          <h2 className="font-serif-vintage text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f3ea] tracking-tight mb-4">
            Celebrated by Travelers & Connoisseurs
          </h2>
          <p className="text-sm sm:text-base text-[#d5cbba]">
            Verified Google Ratings from visitors traveling on the historic Darjeeling Himalayan Railway.
          </p>
        </div>

        {/* Rating Hero Card */}
        <div className="max-w-4xl mx-auto bg-[#081c15] border border-[#c5a059]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle gold watermark */}
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Award className="w-48 h-48 text-[#c5a059]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Score Block */}
            <div className="md:col-span-5 text-center md:text-left border-b md:border-b-0 md:border-r border-[#1a4435] pb-6 md:pb-0 md:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f2d22] border border-[#1a4435] text-xs text-[#d5cbba] mb-3">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Google Business Profile</span>
              </div>

              <div className="flex items-baseline justify-center md:justify-start gap-3 my-2">
                <span className="font-serif-vintage text-6xl sm:text-7xl font-bold text-[#f7f3ea] tabular-nums">
                  4.4
                </span>
                <div className="flex flex-col">
                  <div className="flex text-amber-400 text-xl tracking-wider">
                    ★★★★★
                  </div>
                  <span className="text-xs text-[#c5a059] font-medium uppercase tracking-wider">
                    Out of 5.0 Stars
                  </span>
                </div>
              </div>

              <p className="text-sm font-semibold text-[#f7f3ea] mt-2">
                Based on <span className="text-[#dfb76c] font-bold tabular-nums">363 Reviews</span>
              </p>
              <p className="text-xs text-[#d5cbba] mt-1 font-light">
                Kurseong Railway Station, Platform 1, West Bengal
              </p>

              <div className="mt-6">
                <a
                  href={googleReviewSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider text-[#081c15] bg-[#c5a059] hover:bg-[#dfb76c] active:bg-[#a5843f] rounded-xl transition-all shadow-md shadow-black/40"
                >
                  <span>Read All 363 Google Reviews</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Highlights Block */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="font-serif-vintage text-lg font-semibold text-[#f7f3ea]">
                What Visitors Consistently Applaud
              </h3>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#0b231a] border border-[#1a4435]">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-[#f7f3ea]">Colonial Railway Ambience & Heritage</span>
                    <span className="text-[#c5a059] font-mono tabular-nums">4.8 / 5</span>
                  </div>
                  <p className="text-xs text-[#d5cbba] font-light leading-relaxed">
                    Preserved 1881 wooden architecture, chandeliers, antique railway station memorabilia, and direct views of Platform 1 tracks.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b231a] border border-[#1a4435]">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-[#f7f3ea]">Darjeeling Tea & Artisanal Coffee</span>
                    <span className="text-[#c5a059] font-mono tabular-nums">4.6 / 5</span>
                  </div>
                  <p className="text-xs text-[#d5cbba] font-light leading-relaxed">
                    Fresh first-flush Darjeeling tea, Makaibari brews, and comforting hot mountain beverages served in vintage china.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b231a] border border-[#1a4435]">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-[#f7f3ea]">Sizzlers, Bakery & Mountain Fare</span>
                    <span className="text-[#c5a059] font-mono tabular-nums">4.4 / 5</span>
                  </div>
                  <p className="text-xs text-[#d5cbba] font-light leading-relaxed">
                    Renowned blueberry cheesecake, piping hot sizzlers, steamed momos, and hearty colonial club sandwiches.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 text-[11px] text-[#d5cbba]/70">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                <span>
                  Official Google Review metrics verified for Kurseong Railway Station Platform 1.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
