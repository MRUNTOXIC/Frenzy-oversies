'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { ContactPayload } from '@/lib/email/send';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactPayload>({
    fullName: '',
    email: '',
    phone: '',
    countryOfInterest: 'United Kingdom',
    serviceRequired: 'Overseas Education',
    message: '',
    consent: false,
    honeypot: '', // anti-spam
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');

  const services = [
    'Overseas Education',
    'Visitor Visa',
    'Family and Dependent Visa',
    'Work and Career Opportunities',
    'Travel Assistance',
    'General Enquiry',
  ];

  const countries = [
    'United Kingdom',
    'Canada',
    'Australia',
    'United States',
    'New Zealand',
    'Germany & Europe',
    'United Arab Emirates',
    'Asian Countries',
    'Other / Undecided',
  ];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    const cleanedPhone = formData.phone.replace(/[\s\-\+\(\)]/g, '');
    if (!cleanedPhone || cleanedPhone.length < 8) {
      errs.phone = 'Please provide a valid phone number with area/country code.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide details about your inquiry (minimum 10 characters).';
    }

    if (!formData.consent) {
      errs.consent = 'You must consent to being contacted by Frenzy Overseas.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('loading');
    setServerMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setServerMessage(data.message || 'Your inquiry has been successfully received.');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          countryOfInterest: 'United Kingdom',
          serviceRequired: 'Overseas Education',
          message: '',
          consent: false,
          honeypot: '',
        });
      } else {
        setStatus('error');
        setServerMessage(data.message || 'There was an issue processing your inquiry.');
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch {
      setStatus('error');
      setServerMessage('A network error occurred. Please try again or reach out on WhatsApp.');
    }
  };

  return (
    <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-luxury">
      <div className="mb-8">
        <h3 className="font-serif text-2xl sm:text-3xl text-navy font-normal">
          Book Your Consultation
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 font-light mt-1">
          Complete this form to schedule an in-person session in Rajkot or arrange a virtual video conference.
        </p>
      </div>

      {status === 'success' ? (
        <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-serif text-2xl text-emerald-900 font-normal">
            Inquiry Successfully Submitted
          </h4>
          <p className="text-xs sm:text-sm text-emerald-800 font-light max-w-md mx-auto leading-relaxed">
            {serverMessage}
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-4 px-6 py-2.5 rounded-full bg-midnight text-gold text-xs font-semibold tracking-wider uppercase hover:bg-royal transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Honeypot field (hidden from real users, traps bots) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp_field">Do not fill this field</label>
            <input
              type="text"
              id="hp_field"
              name="honeypot"
              tabIndex={-1}
              value={formData.honeypot}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-medium text-navy uppercase tracking-wider mb-2">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Aarav Patel"
                className={`w-full px-4 py-3 rounded-xl bg-cream border text-xs text-navy focus:outline-none transition-colors ${
                  errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-gold'
                }`}
              />
              {errors.fullName && (
                <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-navy uppercase tracking-wider mb-2">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. aarav@example.com"
                className={`w-full px-4 py-3 rounded-xl bg-cream border text-xs text-navy focus:outline-none transition-colors ${
                  errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-gold'
                }`}
              />
              {errors.email && (
                <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-medium text-navy uppercase tracking-wider mb-2">
                Phone Number (WhatsApp) <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full px-4 py-3 rounded-xl bg-cream border text-xs text-navy focus:outline-none transition-colors ${
                  errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-gold'
                }`}
              />
              {errors.phone && (
                <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Country of Interest */}
            <div>
              <label htmlFor="countryOfInterest" className="block text-xs font-medium text-navy uppercase tracking-wider mb-2">
                Country of Interest <span className="text-rose-500">*</span>
              </label>
              <select
                id="countryOfInterest"
                name="countryOfInterest"
                value={formData.countryOfInterest}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-cream border border-slate-200 text-xs text-navy focus:outline-none focus:border-gold cursor-pointer"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Service Required */}
          <div>
            <label htmlFor="serviceRequired" className="block text-xs font-medium text-navy uppercase tracking-wider mb-2">
              Service Required <span className="text-rose-500">*</span>
            </label>
            <select
              id="serviceRequired"
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-cream border border-slate-200 text-xs text-navy focus:outline-none focus:border-gold cursor-pointer"
            >
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-navy uppercase tracking-wider mb-2">
              Inquiry Details & Academic / Travel Background <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your educational background, planned intake year, or specific visa query..."
              className={`w-full px-4 py-3 rounded-xl bg-cream border text-xs text-navy focus:outline-none transition-colors ${
                errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-gold'
              }`}
            />
            {errors.message && (
              <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="w-4 h-4 mt-0.5 rounded text-gold focus:ring-gold border-slate-300 cursor-pointer"
              />
              <span className="text-xs text-slate-600 leading-relaxed font-light">
                I authorize Frenzy Overseas Pvt. Ltd. to contact me regarding my inquiry via phone, email, or WhatsApp. I understand my personal data is managed in compliance with the Privacy Policy.
              </span>
            </label>
            {errors.consent && (
              <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1 pl-7">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.consent}</span>
              </p>
            )}
          </div>

          {/* Server Error Message */}
          {status === 'error' && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{serverMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 rounded-full bg-gold hover:bg-gold-light text-midnight text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-luxury hover:shadow-gold-glow flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Validating & Submitting...</span>
              </>
            ) : (
              <>
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
