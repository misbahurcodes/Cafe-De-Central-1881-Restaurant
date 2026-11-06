import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, User, MessageSquare, Check, Send } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('13:00');
  const [guests, setGuests] = useState('2');
  const [seatingPreference, setSeatingPreference] = useState('Platform 1 Window View (Toy Train Track)');
  const [specialRequest, setSpecialRequest] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `CDC-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleWhatsAppDispatch = () => {
    let msg = `*Table Reservation Request - Cafe De Central 1881*\n`;
    msg += `Booking Ref: ${bookingRef}\n`;
    msg += `Name: ${name}\n`;
    msg += `Phone: ${phone}\n`;
    msg += `Date: ${date}\n`;
    msg += `Time: ${time}\n`;
    msg += `Guests: ${guests} Person(s)\n`;
    msg += `Seating Preference: ${seatingPreference}\n`;
    if (specialRequest) {
      msg += `Special Request: ${specialRequest}\n`;
    }
    msg += `\nPlease confirm my reservation on Platform 1. Thank you!`;

    window.open(`https://wa.me/919832340454?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setDate('');
    setSpecialRequest('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[#081c15] border border-[#c5a059] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#ede4d3] max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 text-[#d5cbba] hover:text-white rounded-full bg-[#0b231a] hover:bg-[#1a4435] transition-colors"
          aria-label="Close reservation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-cinzel font-semibold tracking-widest text-[#c5a059] uppercase">
                Reserve Your Experience
              </span>
              <h3 className="font-serif-vintage text-2xl sm:text-3xl font-bold text-[#f7f3ea] mt-1">
                Book a Heritage Table
              </h3>
              <p className="text-xs text-[#d5cbba] mt-1">
                Kurseong Railway Station, Platform 1 · Daily 9:00 AM – 9:30 PM
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#d5cbba] font-medium mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#c5a059]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Arjun Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b231a] border border-[#1a4435] text-[#f7f3ea] placeholder-[#d5cbba]/40 focus:outline-none focus:border-[#c5a059] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#d5cbba] font-medium mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98323 XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b231a] border border-[#1a4435] text-[#f7f3ea] placeholder-[#d5cbba]/40 focus:outline-none focus:border-[#c5a059] transition-colors"
                  />
                </div>
              </div>

              {/* Date, Time, Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[#d5cbba] font-medium mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#0b231a] border border-[#1a4435] text-[#f7f3ea] focus:outline-none focus:border-[#c5a059] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#d5cbba] font-medium mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                    Time Slot *
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#0b231a] border border-[#1a4435] text-[#f7f3ea] focus:outline-none focus:border-[#c5a059] transition-colors"
                  >
                    <option value="09:30">09:30 AM (Breakfast & Tea)</option>
                    <option value="11:30">11:30 AM (Morning Brew)</option>
                    <option value="13:00">01:00 PM (Lunch)</option>
                    <option value="15:30">03:30 PM (Afternoon High Tea)</option>
                    <option value="17:30">05:30 PM (Sunset / Toy Train)</option>
                    <option value="19:30">07:30 PM (Heritage Dinner)</option>
                    <option value="20:30">08:30 PM (Late Dinner)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#d5cbba] font-medium mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#c5a059]" />
                    Guests *
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#0b231a] border border-[#1a4435] text-[#f7f3ea] focus:outline-none focus:border-[#c5a059] transition-colors"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5">5 Persons</option>
                    <option value="6">6+ Large Table</option>
                  </select>
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-[#d5cbba] font-medium mb-1.5">
                  Preferred Seating Area
                </label>
                <select
                  value={seatingPreference}
                  onChange={(e) => setSeatingPreference(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b231a] border border-[#1a4435] text-[#f7f3ea] focus:outline-none focus:border-[#c5a059] transition-colors"
                >
                  <option value="Platform 1 Window View (Toy Train Track)">
                    Platform 1 Window View (Toy Train Track)
                  </option>
                  <option value="Vintage Teakwood Booth (Emerald Leather)">
                    Vintage Teakwood Booth (Emerald Leather)
                  </option>
                  <option value="Colonial Tea Lounge Area">
                    Colonial Tea Lounge Area
                  </option>
                  <option value="Quiet Corner Table">
                    Quiet Corner Table
                  </option>
                </select>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-[#d5cbba] font-medium mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#c5a059]" />
                  Special Requests / Occasion (Optional)
                </label>
                <textarea
                  rows={2}
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  placeholder="Anniversary, birthday, dietary requirements, or specific cake pre-order..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#0b231a] border border-[#1a4435] text-[#f7f3ea] placeholder-[#d5cbba]/40 focus:outline-none focus:border-[#c5a059] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-bold tracking-wider text-[#081c15] bg-[#c5a059] hover:bg-[#dfb76c] rounded-xl transition-all shadow-lg shadow-black/30"
                >
                  Confirm Table Request
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-900/60 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-cinzel text-[#c5a059] tracking-widest uppercase">
                Reservation Request Generated
              </span>
              <h3 className="font-serif-vintage text-2xl font-bold text-[#f7f3ea] mt-1">
                We Look Forward to Welcoming You
              </h3>
              <p className="text-xs text-[#d5cbba] mt-2">
                Your reservation reference is{' '}
                <span className="font-mono font-bold text-[#dfb76c]">{bookingRef}</span> for{' '}
                <strong className="text-white">{guests} guests</strong> on{' '}
                <strong className="text-white">{date || 'today'}</strong> at{' '}
                <strong className="text-white">{time}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0b231a] border border-[#1a4435] text-left text-xs space-y-1.5 text-[#d5cbba]">
              <div><strong className="text-white">Guest:</strong> {name} ({phone})</div>
              <div><strong className="text-white">Seating:</strong> {seatingPreference}</div>
              <div><strong className="text-white">Location:</strong> Kurseong Railway Station, Platform 1</div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppDispatch}
                className="w-full py-3 text-xs font-bold text-[#081c15] bg-[#c5a059] hover:bg-[#dfb76c] rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Notify Cafe on WhatsApp (+91 98323 40454)</span>
              </button>

              <a
                href="tel:+919832340454"
                className="block w-full py-2.5 text-center text-xs font-semibold text-[#d5cbba] hover:text-white border border-[#1a4435] rounded-xl hover:border-[#c5a059] transition-colors"
              >
                Direct Call: +91 98323 40454
              </a>

              <button
                type="button"
                onClick={resetAndClose}
                className="text-xs text-[#d5cbba]/70 hover:text-white underline pt-2"
              >
                Done / Back to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
