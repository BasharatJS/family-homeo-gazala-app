"use client";

import { useEffect, useState } from "react";
import { Languages, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useBooking } from "@/lib/booking-context";
import { DOCTOR } from "@/lib/content";

type NavId = "home" | "about" | "services" | "testimonials" | "contact";

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const { openBooking } = useBooking();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems: { id: NavId; label: string }[] = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "testimonials", label: t.nav.testimonials },
    { id: "contact", label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-3 top-3 z-50 sm:inset-x-5 sm:top-4 lg:inset-x-8">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border border-violet-100 bg-white/90 px-4 py-2.5 backdrop-blur-md transition-shadow sm:px-6 ${
          scrolled ? "shadow-lg shadow-violet-900/10" : "shadow-md shadow-violet-900/5"
        }`}
      >
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2.5 text-left"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-600 font-display text-lg font-bold text-white sm:h-10 sm:w-10">
            FH
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold text-violet-900 sm:text-base">
              {DOCTOR.name}
            </span>
            <span className="block text-[11px] text-ink-soft sm:text-xs">
              {DOCTOR.degree}
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-violet-50 hover:text-violet-700"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 rounded-lg border border-violet-200 px-2 py-1.5 text-xs font-semibold text-violet-700 transition-colors hover:bg-violet-50 sm:px-3 sm:text-sm"
            aria-label="Toggle language"
          >
            <Languages className="h-3.5 w-3.5" />
            {lang === "hi" ? "EN" : "हिं"}
          </button>
          <a
            href={`tel:+91${DOCTOR.phone}`}
            className="hidden h-9 w-9 items-center justify-center rounded-lg border border-violet-200 text-violet-700 transition-colors hover:bg-violet-50 sm:flex"
            aria-label="Call"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            onClick={() => openBooking()}
            className="hidden items-center gap-1.5 rounded-lg bg-violet-600 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-700 sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            {t.nav.bookAppointment}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-violet-700 hover:bg-violet-50 lg:hidden"
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-violet-100 bg-white/95 p-3 shadow-lg backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-ink-soft hover:bg-violet-50 hover:text-violet-700"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                openBooking();
              }}
              className="mt-1 flex items-center justify-center gap-1.5 rounded-lg bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              {t.nav.bookAppointment}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
