export interface ContactPayload {
  fullName: string;
  email: string;
  phone: string;
  countryOfInterest: string;
  serviceRequired: string;
  message: string;
  consent: boolean;
  honeypot?: string; // anti-spam field
}

export async function sendNotificationEmail(data: ContactPayload): Promise<{ success: boolean; id?: string; error?: string }> {
  const resendApiKey = process.env.RESEND_API_KEY;

  // Log contact enquiry securely on the server
  console.log('[Inquiry Received]', {
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    service: data.serviceRequired,
    country: data.countryOfInterest,
    timestamp: new Date().toISOString(),
  });

  if (!resendApiKey) {
    // If Resend API key is not yet configured, return success with mock handler note for development/deployment readiness
    return {
      success: true,
      id: `dev-${Date.now()}`,
    };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || 'inquiries@frenzyoverseas.in',
        to: process.env.EMAIL_TO || 'director@frenzyoverseas.com',
        subject: `New Inquiry: ${data.serviceRequired} - ${data.fullName}`,
        html: `
          <h2>New Website Consultation Inquiry</h2>
          <p><strong>Full Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Service Required:</strong> ${data.serviceRequired}</p>
          <p><strong>Country of Interest:</strong> ${data.countryOfInterest}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background:#f4f4f4;padding:12px;border-left:4px solid #101C35;">
            ${data.message.replace(/\n/g, '<br/>')}
          </blockquote>
          <p><em>Submitted via Frenzy Overseas Portal</em></p>
        `,
      }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      console.error('[Resend Error]', errData);
      return { success: false, error: 'Email service error' };
    }

    const result = await res.json();
    return { success: true, id: result.id };
  } catch (error: any) {
    console.error('[Email Dispatch Exception]', error);
    return { success: false, error: error.message || 'Network exception' };
  }
}
