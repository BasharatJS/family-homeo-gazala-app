"use client";

import Image from "next/image";
import { MessageCircle, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useBooking } from "@/lib/booking-context";
import { DOCTOR } from "@/lib/content";

export default function Hero() {
  const { t } = useLanguage();
  const { openBooking } = useBooking();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-lavender-50 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pt-28"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-100 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-violet-100" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-1.5 text-xs font-semibold text-violet-700 sm:text-sm">
            <Sparkles className="h-3.5 w-3.5" />
            {t.hero.badge}
          </span>

          <h1 className="mt-5 font-display text-3xl font-bold leading-tight text-violet-900 sm:text-4xl lg:text-5xl">
            {t.hero.title}{" "}
            <span className="text-violet-500">{t.hero.titleHighlight}</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => openBooking()}
              className="rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-colors hover:bg-violet-700 sm:text-base"
            >
              {t.hero.ctaBook}
            </button>
            <a
              href={`https://wa.me/${DOCTOR.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-violet-200 bg-white px-6 py-3.5 text-sm font-semibold text-violet-700 transition-colors hover:bg-violet-50 sm:text-base"
            >
              <MessageCircle className="h-4 w-4" />
              {t.hero.ctaWhatsapp}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-violet-100 pt-6">
            <div>
              <p className="font-display text-2xl font-bold text-violet-700 sm:text-3xl">5+</p>
              <p className="text-xs text-ink-soft sm:text-sm">{t.hero.statYears}</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-violet-700 sm:text-3xl">500+</p>
              <p className="text-xs text-ink-soft sm:text-sm">{t.hero.statPatients}</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-violet-700 sm:text-3xl">98%</p>
              <p className="text-xs text-ink-soft sm:text-sm">{t.hero.statSuccess}</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border-8 border-white bg-violet-100 shadow-xl">
            <Image
              src={DOCTOR.photo}
              alt={DOCTOR.name}
              fill
              priority
              sizes="(min-width: 1024px) 480px, 384px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white px-5 py-4 text-center shadow-lg">
            <p className="font-display text-base font-bold text-violet-900">
              {DOCTOR.name}
            </p>
            <p className="text-xs text-ink-soft">{DOCTOR.degree}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
