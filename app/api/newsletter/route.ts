import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    console.log('[Newsletter Subscriber Registered]', {
      email,
      date: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for subscribing to Frenzy Overseas international intelligence dispatch.',
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Could not process subscription.' },
      { status: 500 }
    );
  }
}
