"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useBooking } from "@/lib/booking-context";
import { DOCTOR } from "@/lib/content";

export default function CtaBand() {
  const { t } = useLanguage();
  const { openBooking } = useBooking();

  return (
    <section className="bg-cream py-14 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-violet-900 sm:text-3xl">
          {t.cta.title}
        </h2>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={() => openBooking()}
            className="rounded-xl bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-colors hover:bg-violet-700 sm:text-base"
          >
            {t.cta.ctaBook}
          </button>
          <a
            href={`https://wa.me/${DOCTOR.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border-2 border-violet-200 bg-white px-7 py-3.5 text-sm font-semibold text-violet-700 transition-colors hover:bg-violet-50 sm:text-base"
          >
            <MessageCircle className="h-4 w-4" />
            {t.cta.ctaWhatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
