import React, { useState } from 'react';
import { Maximize2, X, ChevronRight, ChevronLeft, Camera } from 'lucide-react';
import { ASSET_IMAGES } from '../assets/images';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Ambience' | 'Beverages' | 'Dining' | 'Bakery';
  src: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Vintage Colonial Dining Room',
    category: 'Ambience',
    src: ASSET_IMAGES.hero,
    description: 'Polished teakwood walls, antique railway station clock, glowing brass chandeliers, and tufted emerald banquettes overlooking the platform.'
  },
  {
    id: 'g-2',
    title: 'Platform 1 & The UNESCO Toy Train',
    category: 'Ambience',
    src: ASSET_IMAGES.stationPlatform,
    description: 'The exterior of Cafe De Central 1881 at dusk, with misty mountain clouds rolling past the historic Kurseong steam engine.'
  },
  {
    id: 'g-3',
    title: 'First Flush Darjeeling Tea Ceremony',
    category: 'Beverages',
    src: ASSET_IMAGES.darjeelingTea,
    description: 'Fresh artisanal amber tea poured from a vintage silver pot, accompanied by mountain honey, fresh lemon, and panoramic valley views.'
  },
  {
    id: 'g-4',
    title: 'Central 1881 Signature Sizzler',
    category: 'Dining',
    src: ASSET_IMAGES.signatureSizzler,
    description: 'Aromatic steam rising from a piping-hot cast iron platter with spiced grilled chicken, cottage cheese cubes, herb rice, and charred vegetables.'
  },
  {
    id: 'g-5',
    title: 'Famous Blueberry Cheesecake & Espresso',
    category: 'Bakery',
    src: ASSET_IMAGES.blueberryCheesecake,
    description: 'The cafe’s hallmark artisanal cheesecake with wild blueberry compote glaze served on vintage ceramic porcelain with rich espresso.'
  }
];

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Ambience', 'Beverages', 'Dining', 'Bakery'];

  const filteredItems = activeTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <section id="gallery" className="py-24 bg-[#081c15] text-[#ede4d3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#c5a059]" />
            <span className="font-cinzel text-xs font-semibold tracking-[0.25em] text-[#c5a059] uppercase">
              Visual Chronicle
            </span>
            <span className="h-[1px] w-8 bg-[#c5a059]" />
          </div>
          <h2 className="font-serif-vintage text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f3ea] tracking-tight mb-4">
            Ambience, Flavour & Heritage
          </h2>
          <p className="text-sm sm:text-base text-[#d5cbba]">
            Moments captured along the mist of Platform 1 and inside our restored colonial dining room.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all border ${
                activeTab === cat
                  ? 'bg-[#c5a059] text-[#081c15] border-[#c5a059]'
                  : 'bg-[#0b231a] text-[#d5cbba] border-[#1a4435] hover:border-[#c5a059]/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden border border-[#1a4435] bg-[#0b231a] cursor-pointer shadow-lg hover:border-[#c5a059] transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081c15] via-[#081c15]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-5">
                <span className="text-[10px] font-cinzel font-semibold text-[#dfb76c] uppercase tracking-widest mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif-vintage text-base font-bold text-[#f7f3ea] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#d5cbba] line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#081c15]/80 border border-[#c5a059]/40 flex items-center justify-center text-[#dfb76c] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="max-h-[75vh] rounded-xl overflow-hidden border border-[#c5a059]/30 shadow-2xl">
              <img
                src={GALLERY_ITEMS[lightboxIndex].src}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                className="w-full h-auto max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 text-center max-w-xl">
              <h3 className="font-serif-vintage text-xl font-bold text-[#f7f3ea]">
                {GALLERY_ITEMS[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#d5cbba] mt-1 font-light">
                {GALLERY_ITEMS[lightboxIndex].description}
              </p>
              <div className="text-[11px] text-[#c5a059] mt-2 font-cinzel">
                {lightboxIndex + 1} of {GALLERY_ITEMS.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
