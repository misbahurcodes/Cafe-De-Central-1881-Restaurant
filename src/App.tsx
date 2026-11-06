/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const handleOpenReservation = () => {
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
  };

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#081c15] text-[#ede4d3] selection:bg-[#c5a059] selection:text-[#081c15]">
      {/* Top Navigation */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenReservation={handleOpenReservation}
          onExploreMenu={handleExploreMenu}
        />

        {/* Our Story & Station Heritage */}
        <OurStory />

        {/* Interactive Digital Menu */}
        <MenuSection />

        {/* Ambience & Culinary Gallery */}
        <GallerySection />

        {/* Verified Google Reviews */}
        <ReviewsSection />

        {/* Contact, Location & Directions */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={handleCloseReservation}
      />
    </div>
  );
}
