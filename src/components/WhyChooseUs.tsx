"use client";

import { useLanguage } from "@/lib/language-context";
import { useBooking } from "@/lib/booking-context";
import { iconMap } from "@/lib/icon-map";
import { ICONS, type WhyUsItem } from "@/lib/content";

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const { openBooking } = useBooking();

  return (
    <section className="bg-lavender-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-500 sm:text-sm">
            {t.whyUs.sectionTag}
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-violet-900 sm:text-3xl lg:text-4xl">
            {t.whyUs.title}
          </h2>
          <p className="mt-3 text-ink-soft">{t.whyUs.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.whyUs.items.map((item: WhyUsItem, i: number) => {
            const Icon = iconMap[ICONS.whyUs[i]];
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-violet-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => openBooking()}
            className="rounded-xl bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-colors hover:bg-violet-700 sm:text-base"
          >
            {t.whyUs.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
