"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { DOCTOR } from "@/lib/content";
import type { ServiceItem } from "@/lib/content";

export default function Footer() {
  const { t } = useLanguage();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-violet-900 pb-8 pt-14 text-violet-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white font-display text-lg font-bold text-violet-700">
                FH
              </span>
              <span>
                <span className="block font-display text-sm font-bold text-white">
                  {DOCTOR.name}
                </span>
                <span className="block text-xs text-violet-300">
                  {DOCTOR.degree}
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-violet-300">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-white">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="mt-4 space-y-2">
              {(["home", "about", "services", "testimonials", "contact"] as const).map(
                (id) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(id)}
                      className="text-sm text-violet-300 hover:text-white"
                    >
                      {t.nav[id]}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-white">
              {t.footer.servicesTitle}
            </h4>
            <ul className="mt-4 space-y-2">
              {t.services.items.slice(0, 5).map((s: ServiceItem) => (
                <li key={s.title} className="text-sm text-violet-300">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-white">
              {t.footer.contactTitle}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-violet-300">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{t.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                {DOCTOR.phoneDisplay}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span className="break-all">{DOCTOR.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-violet-800 pt-6 text-center text-xs text-violet-400">
          <p>
            © {new Date().getFullYear()} {DOCTOR.name} — {t.footer.rights}
          </p>
          <p>
            Developed by{" "}
            <a
              href="https://www.codewithbasharat.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-violet-300 hover:text-white"
            >
              CodeWithBasharat
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
