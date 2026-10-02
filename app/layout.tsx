import type { Metadata, Viewport } from "next";
import { Unbounded, Work_Sans } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RevealObserver from "@/components/RevealObserver";
import { SITE_URL, locations, site } from "@/content/site";
import "./globals.css";
import "./sections.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-unbounded",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RP Tennis Dubai | Rally Point Tennis Academy — Coach Mahendra",
    template: "%s | RP Tennis Dubai",
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Rally Point Tennis Academy Dubai" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#B8F000",
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "@id": `${SITE_URL}/#business`,
  name: site.legalName,
  alternateName: site.name,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/og.jpg`,
  email: site.email,
  telephone: site.phoneE164,
  description: site.description,
  founder: { "@type": "Person", name: "Mahendra Marvadi" },
  areaServed: "Dubai",
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  location: locations.map((l) => ({
    "@type": "Place",
    name: l.name,
    address: { "@type": "PostalAddress", streetAddress: l.area, addressLocality: "Dubai", addressCountry: "AE" },
  })),
  sameAs: [site.social.facebook, site.social.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${unbounded.variable} ${workSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Hide reveal-on-scroll elements only when JS runs */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <div className="topline">
          <div className="wrap topline__inner">
            <span>Summer 2027: train with Coach Mahendra at Robin Hood Camp, Maine, USA</span>
            <Link href="/robin-hood-camp/">Learn more →</Link>
          </div>
        </div>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <RevealObserver />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
