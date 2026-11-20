'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export default function NewsletterBox() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setMessage(data.message || 'Subscribed successfully!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Subscription failed. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="p-8 sm:p-12 rounded-3xl bg-midnight text-white relative overflow-hidden border border-white/10 shadow-2xl">
      <div className="absolute top-0 right-0 w-80 h-80 bg-royal/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-white/10 text-gold flex items-center justify-center mx-auto mb-2">
          <Mail className="w-6 h-6" />
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
          International Intelligence Dispatch
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
          Receive quarterly digests covering official embassy policy shifts, post-study work regulations, and university intake deadlines directly from our advisory desk.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-gold transition-colors"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 rounded-full bg-gold hover:bg-gold-light text-midnight text-xs font-bold uppercase tracking-wider transition-colors shadow-luxury flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {status === 'loading' ? (
              <span>Subscribing...</span>
            ) : (
              <>
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        {status === 'success' && (
          <div className="flex items-center justify-center gap-2 text-xs text-green-400 pt-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{message}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center justify-center gap-2 text-xs text-rose-400 pt-2">
            <AlertCircle className="w-4 h-4" />
            <span>{message}</span>
          </div>
        )}
      </div>
    </div>
  );
}
