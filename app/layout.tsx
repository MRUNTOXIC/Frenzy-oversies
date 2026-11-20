import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Preloader from '@/components/layout/Preloader';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import CookieConsent from '@/components/layout/CookieConsent';
import BackToTop from '@/components/layout/BackToTop';
import { constructMetadata } from '@/lib/seo/metadata';
import { getOrganizationSchema, getLocalBusinessSchema } from '@/lib/seo/schema';

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-[#F8F7F3] text-navy font-sans antialiased min-h-screen flex flex-col selection:bg-gold selection:text-midnight">
        <Preloader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
