import React, { useState } from 'react';
import { X, Calendar, Clock, Video, Phone, Building, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    country?: string;
    purpose?: string;
    score?: number;
    education?: string;
    serviceTitle?: string;
  };
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState(initialData?.country || 'Canada');
  const [visaType, setVisaType] = useState(initialData?.serviceTitle || initialData?.purpose || 'Study Abroad');
  const [mode, setMode] = useState<'video' | 'phone' | 'office'>('video');
  const [preferredDate, setPreferredDate] = useState('2025-10-15');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    const ref = `FO-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102A43]/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl border border-[#E8E8E8] shadow-2xl overflow-hidden my-8 animate-fadeIn">
        {/* Modal Top Bar */}
        <div className="bg-[#102A43] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4A72C]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8C968]">
              Licensed Visa Advisor Booking
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="mb-2">
                <h3 className="font-display text-2xl font-bold text-[#102A43]">
                  Schedule Your 1-on-1 Visa Consultation
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  Connect directly with our senior immigration caseworkers. No generic agents; real certified guidance.
                </p>
                {initialData?.score && (
                  <div className="mt-2.5 p-2.5 bg-[#FBF8F1] rounded-lg border border-[#D4A72C]/40 text-xs font-semibold text-[#102A43] flex items-center justify-between">
                    <span>Attached Evaluation Score:</span>
                    <span className="text-[#D4A72C] font-bold font-mono">{initialData.score}/100 Fit</span>
                  </div>
                )}
              </div>

              {/* Personal Details */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 bg-[#FBF8F1] border border-[#E8E8E8] rounded-xl text-xs sm:text-sm text-[#102A43] focus:outline-none focus:border-[#D4A72C] focus:bg-white transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 bg-[#FBF8F1] border border-[#E8E8E8] rounded-xl text-xs sm:text-sm text-[#102A43] focus:outline-none focus:border-[#D4A72C] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 bg-[#FBF8F1] border border-[#E8E8E8] rounded-xl text-xs sm:text-sm text-[#102A43] focus:outline-none focus:border-[#D4A72C] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                      Target Destination
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#FBF8F1] border border-[#E8E8E8] rounded-xl text-xs sm:text-sm text-[#102A43] focus:outline-none focus:border-[#D4A72C] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Canada">🇨🇦 Canada</option>
                      <option value="Australia">🇦🇺 Australia</option>
                      <option value="United Kingdom">🇬🇧 United Kingdom</option>
                      <option value="United States">🇺🇸 United States</option>
                      <option value="Germany">🇩🇪 Germany</option>
                      <option value="New Zealand">🇳🇿 New Zealand</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                      Visa Stream
                    </label>
                    <select
                      value={visaType}
                      onChange={(e) => setVisaType(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#FBF8F1] border border-[#E8E8E8] rounded-xl text-xs sm:text-sm text-[#102A43] focus:outline-none focus:border-[#D4A72C] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Study Abroad">Higher Education & Student Visa</option>
                      <option value="Skilled Work">Skilled Employment Visa</option>
                      <option value="Permanent Residency">Permanent Residency (PR)</option>
                      <option value="Visitor Visa">Visitor / Tourist Visa</option>
                      <option value="Family Sponsorship">Family / Spouse Visa</option>
                      <option value="Business Expansion">Investor & Business Visa</option>
                    </select>
                  </div>
                </div>

                {/* Consultation Format */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2">
                    Preferred Consultation Format
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setMode('video')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                        mode === 'video'
                          ? 'bg-[#FBF8F1] border-[#D4A72C] text-[#102A43] shadow-2xs'
                          : 'bg-white border-[#E8E8E8] text-[#64748B]'
                      }`}
                    >
                      <Video className="w-4 h-4 text-[#D4A72C]" />
                      <span className="text-[11px] font-bold">Video Call</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode('phone')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                        mode === 'phone'
                          ? 'bg-[#FBF8F1] border-[#D4A72C] text-[#102A43] shadow-2xs'
                          : 'bg-white border-[#E8E8E8] text-[#64748B]'
                      }`}
                    >
                      <Phone className="w-4 h-4 text-[#D4A72C]" />
                      <span className="text-[11px] font-bold">Direct Phone</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode('office')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                        mode === 'office'
                          ? 'bg-[#FBF8F1] border-[#D4A72C] text-[#102A43] shadow-2xs'
                          : 'bg-white border-[#E8E8E8] text-[#64748B]'
                      }`}
                    >
                      <Building className="w-4 h-4 text-[#D4A72C]" />
                      <span className="text-[11px] font-bold">Office Visit</span>
                    </button>
                  </div>
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#FBF8F1] border border-[#E8E8E8] rounded-xl text-xs sm:text-sm text-[#102A43] focus:outline-none focus:border-[#D4A72C] focus:bg-white transition-all cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                      Time Slot
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#FBF8F1] border border-[#E8E8E8] rounded-xl text-xs sm:text-sm text-[#102A43] focus:outline-none focus:border-[#D4A72C] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="10:00 AM">10:00 AM - 11:00 AM IST</option>
                      <option value="11:30 AM">11:30 AM - 12:30 PM IST</option>
                      <option value="02:00 PM">02:00 PM - 03:00 PM IST</option>
                      <option value="04:30 PM">04:30 PM - 05:30 PM IST</option>
                      <option value="06:00 PM">06:00 PM - 07:00 PM IST</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E8E8E8] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-[#64748B] hover:bg-[#F4F6F8] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-7 py-3 rounded-xl text-xs font-bold text-[#102A43] bg-[#D4A72C] hover:bg-[#B88A18] transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Confirm Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          ) : (
            /* Confirmation State */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#16835B]/10 border border-[#16835B]/30 flex items-center justify-center text-[#16835B] mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-display text-2xl font-bold text-[#102A43]">
                Consultation Booked Successfully!
              </h3>

              <div className="p-4 bg-[#FBF8F1] rounded-xl border border-[#E8E8E8] max-w-sm mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Booking Ref:</span>
                  <span className="font-mono font-bold text-[#102A43]">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Candidate:</span>
                  <span className="font-semibold text-[#102A43]">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Destination:</span>
                  <span className="font-semibold text-[#102A43]">{destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Format & Time:</span>
                  <span className="font-semibold text-[#102A43] capitalize">{mode} · {preferredTime}</span>
                </div>
              </div>

              <p className="text-xs text-[#64748B] max-w-sm mx-auto">
                A calendar invitation with joining credentials and preparation notes has been dispatched to <strong className="text-[#102A43]">{email}</strong>.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#102A43] bg-[#D4A72C] hover:bg-[#B88A18] transition-all cursor-pointer"
                >
                  Done & Return to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
