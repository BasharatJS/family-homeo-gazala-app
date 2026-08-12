import type { Metadata, Viewport } from "next";
import { Baloo_2, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { SITE_URL } from "@/lib/site";
import { DOCTOR } from "@/lib/content";

const display = Baloo_2({
  variable: "--font-display",
  subsets: ["latin", "devanagari"],
  weight: ["500", "600", "700", "800"],
});

const body = Noto_Sans_Devanagari({
  variable: "--font-body",
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700"],
});

const TITLE =
  "Family Homeo Clinic — Dr. Gajala Parween | होम्योपैथी डॉक्टर, Katihar";
const DESCRIPTION =
  "महिलाओं और बच्चों के लिए होम्योपैथी इलाज — Dr. Gajala Parween, BHMS (MU), DMT, Katihar, Bihar. PCOS, बच्चों की बीमारी, पुरानी बीमारियों का प्राकृतिक इलाज। WhatsApp पर अभी अपॉइंटमेंट बुक करें।";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Family Homeo Clinic",
  },
  description: DESCRIPTION,
  keywords: [
    "homeopathy doctor Katihar",
    "Dr. Gajala Parween",
    "होम्योपैथी डॉक्टर कटिहार",
    "women homeopathy treatment",
    "child homeopathy doctor",
    "PCOS homeopathic treatment",
    "homeopathy clinic Bihar",
    "family homeo clinic",
  ],
  authors: [{ name: DOCTOR.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "hi_IN",
    url: SITE_URL,
    siteName: "Family Homeo Clinic",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Family Homeo Clinic — Dr. Gajala Parween",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/icon.svg",
  },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: "#7040ae",
  width: "device-width",
  initialScale: 1,
};

function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Family Homeo Clinic",
    image: DOCTOR.photo,
    url: SITE_URL,
    telephone: `+91${DOCTOR.phone}`,
    email: DOCTOR.email,
    priceRange: "₹₹",
    medicalSpecialty: ["Homeopathy", "Gynecology", "Pediatric"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Labha, Zero Mile se Paschim, Dani Hospital ke upar (Mojibur Complex)",
      addressLocality: "Katihar",
      addressRegion: "Bihar",
      postalCode: "854116",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "14:00",
      },
    ],
    physician: {
      "@type": "Physician",
      name: DOCTOR.name,
      medicalSpecialty: "Homeopathy",
      description: "BHMS (MU), DMT — Specialist in Women's and Children's Diseases",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hi"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-cream text-ink">
        <StructuredData />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
