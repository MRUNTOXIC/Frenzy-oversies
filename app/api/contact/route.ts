import { NextRequest, NextResponse } from 'next/server';
import { sendNotificationEmail, ContactPayload } from '@/lib/email/send';

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    // 1. Anti-spam honeypot detection
    if (body.honeypot && body.honeypot.trim() !== '') {
      // Silently fail for bots
      return NextResponse.json({ success: true, message: 'Inquiry received' }, { status: 200 });
    }

    // 2. Server-side validation
    const errors: Record<string, string> = {};

    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = 'Please enter a valid full name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    // Phone validation: allow international digits, min 8 digits
    const cleanedPhone = (body.phone || '').replace(/[\s\-\+\(\)]/g, '');
    if (!cleanedPhone || cleanedPhone.length < 8 || cleanedPhone.length > 15) {
      errors.phone = 'Please provide a valid phone number with country/area code.';
    }

    if (!body.countryOfInterest || body.countryOfInterest.trim() === '') {
      errors.countryOfInterest = 'Please select a country of interest.';
    }

    const validServices = [
      'Overseas Education',
      'Visitor Visa',
      'Family and Dependent Visa',
      'Work and Career Opportunities',
      'Travel Assistance',
      'General Enquiry',
    ];
    if (!body.serviceRequired || !validServices.includes(body.serviceRequired)) {
      errors.serviceRequired = 'Please select a valid service option.';
    }

    if (!body.message || body.message.trim().length < 10) {
      errors.message = 'Please provide details about your inquiry (minimum 10 characters).';
    }

    if (!body.consent) {
      errors.consent = 'You must consent to being contacted regarding your inquiry.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: 'Please correct the highlighted errors.' },
        { status: 400 }
      );
    }

    // 3. Dispatch through email abstraction layer
    const result = await sendNotificationEmail(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Unable to deliver your message at this time. Please contact us directly via WhatsApp or phone.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out. An advisor from Frenzy Overseas will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('[Contact API Error]', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected server error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
