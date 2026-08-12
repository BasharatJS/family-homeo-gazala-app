import type { Metadata } from "next";
import { Baloo_2, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

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

export const metadata: Metadata = {
  title: "Family Homeo Clinic — Dr. Gajala Parween | होम्योपैथिक क्लिनिक",
  description:
    "Expert homeopathic care for women & children by Dr. Gajala Parween, BHMS (MU), DMT. Book your consultation on WhatsApp today.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hi"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-cream text-ink">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
