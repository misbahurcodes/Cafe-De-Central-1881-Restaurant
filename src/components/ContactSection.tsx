import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, Check, Navigation, MessageCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormName('');
      setFormPhone('');
      setFormMessage('');
    }, 6000);
  };

  const kurseongStationDirectionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Kurseong+Railway+Station+Platform+1+West+Bengal+734203';

  return (
    <section id="contact" className="py-24 bg-[#081c15] text-[#ede4d3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#c5a059]" />
            <span className="font-cinzel text-xs font-semibold tracking-[0.25em] text-[#c5a059] uppercase">
              Location & Inquiries
            </span>
            <span className="h-[1px] w-8 bg-[#c5a059]" />
          </div>
          <h2 className="font-serif-vintage text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7f3ea] tracking-tight mb-4">
            Visit Us on Platform 1
          </h2>
          <p className="text-sm sm:text-base text-[#d5cbba]">
            Whether arriving via the historic Toy Train or ascending the hill cart road, we await your arrival in Kurseong.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Info & Quick Message */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-[#0b231a] border border-[#1a4435] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#081c15] border border-[#c5a059]/40 flex items-center justify-center shrink-0 text-[#c5a059]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-vintage text-base font-bold text-[#f7f3ea]">
                    Historic Location
                  </h3>
                  <p className="text-xs text-[#d5cbba] mt-1 leading-relaxed">
                    Railway Station, Platform 1, Naya Bazaar,<br />
                    Kurseong, West Bengal 734203
                  </p>
                  <p className="text-[11px] text-[#c5a059] mt-1 font-cinzel">
                    Elevation: 4,864 ft · Darjeeling Himalayan Railway
                  </p>
                </div>
              </div>

              {/* Phone Card with Click-to-Call */}
              <div className="p-5 rounded-2xl bg-[#0b231a] border border-[#1a4435] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#081c15] border border-[#c5a059]/40 flex items-center justify-center shrink-0 text-[#c5a059]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif-vintage text-base font-bold text-[#f7f3ea]">
                    Direct Telephone
                  </h3>
                  <a
                    href="tel:+919832340454"
                    className="inline-block text-sm font-bold text-[#dfb76c] hover:underline mt-1 tabular-nums"
                  >
                    +91 98323 40454
                  </a>
                  <p className="text-[11px] text-[#d5cbba]/80 mt-0.5">
                    Click to call for table inquiries & instant takeaways
                  </p>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="p-5 rounded-2xl bg-[#0b231a] border border-[#1a4435] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#081c15] border border-[#c5a059]/40 flex items-center justify-center shrink-0 text-[#c5a059]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-vintage text-base font-bold text-[#f7f3ea]">
                    Service Hours
                  </h3>
                  <p className="text-xs text-[#d5cbba] mt-1">
                    Monday to Sunday: <strong className="text-white">9:00 AM – 9:30 PM</strong>
                  </p>
                  <p className="text-[11px] text-[#d5cbba]/70 mt-0.5">
                    Breakfast, lunch, high tea & candlelit evening dining
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={kurseongStationDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#081c15] bg-[#c5a059] hover:bg-[#dfb76c] rounded-xl transition-all shadow-md text-center"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </a>

              <a
                href="https://wa.me/919832340454"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#f7f3ea] bg-[#0b231a] border border-[#c5a059]/50 hover:border-[#c5a059] rounded-xl transition-all text-center"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Map & Interactive Route Card */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden border border-[#1a4435] bg-[#0b231a] shadow-2xl">
            <div className="p-5 border-b border-[#1a4435] flex items-center justify-between">
              <div>
                <span className="font-cinzel text-xs text-[#c5a059] uppercase tracking-wider font-semibold">
                  Platform 1 Interactive Map
                </span>
                <h4 className="font-serif-vintage text-base font-semibold text-[#f7f3ea]">
                  Kurseong Railway Station
                </h4>
              </div>
              <a
                href={kurseongStationDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#dfb76c] hover:underline flex items-center gap-1 font-medium"
              >
                <span>View on Google Maps</span>
              </a>
            </div>

            {/* Real Interactive Map Iframe */}
            <div className="relative w-full h-[380px] sm:h-[450px] bg-[#081c15]">
              <iframe
                title="Google Maps Location of Cafe De Central 1881 Kurseong Railway Station"
                src="https://maps.google.com/maps?q=Kurseong%20Railway%20Station%20Platform%201%20West%20Bengal&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(0.95)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick Travel Note */}
            <div className="p-4 bg-[#081c15] border-t border-[#1a4435] flex items-center justify-between text-[11px] text-[#d5cbba]">
              <span>Accessible directly from Hill Cart Road via the Kurseong Station entrance.</span>
              <span className="font-mono text-[#c5a059]">PIN: 734203</span>
            </div>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="mt-16 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0b231a] border border-[#1a4435]">
          <div className="text-center mb-6">
            <h3 className="font-serif-vintage text-2xl font-bold text-[#f7f3ea]">
              Send an Inquiry to the Kitchen or Management
            </h3>
            <p className="text-xs text-[#d5cbba] mt-1">
              For group bookings, catering, or event inquiries at Cafe De Central 1881.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 text-center space-y-2">
              <Check className="w-8 h-8 text-emerald-400 mx-auto" />
              <div className="text-sm font-semibold text-white">
                Message Received with Pleasure
              </div>
              <p className="text-xs text-emerald-200">
                Our station team will contact you shortly via phone or WhatsApp at {formPhone}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#d5cbba] font-medium mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Priyanshu Bose"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#081c15] border border-[#1a4435] text-[#f7f3ea] placeholder-[#d5cbba]/40 focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
                <div>
                  <label className="block text-[#d5cbba] font-medium mb-1.5">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="+91 98323 XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#081c15] border border-[#1a4435] text-[#f7f3ea] placeholder-[#d5cbba]/40 focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#d5cbba] font-medium mb-1.5">
                  Your Message or Special Request *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Tell us how we can make your visit or event extraordinary..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#081c15] border border-[#1a4435] text-[#f7f3ea] placeholder-[#d5cbba]/40 focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-wider text-[#081c15] bg-[#c5a059] hover:bg-[#dfb76c] rounded-xl transition-all shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Message</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
