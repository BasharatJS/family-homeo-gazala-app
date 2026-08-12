"use client";

import { Star } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import type { TestimonialItem } from "@/lib/content";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="bg-lavender-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-500 sm:text-sm">
            {t.testimonials.sectionTag}
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-violet-900 sm:text-3xl lg:text-4xl">
            {t.testimonials.title}
          </h2>
          <p className="mt-3 text-ink-soft">{t.testimonials.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.testimonials.items.map((item: TestimonialItem) => (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl border border-violet-100 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-violet-100 pt-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  {item.name
                    .split(" ")
                    .map((w: string) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div>
                  <p className="text-sm font-semibold text-violet-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-ink-soft">
                    {item.age} • {item.location}
                  </p>
                  <p className="text-xs font-medium text-violet-500">
                    {item.condition}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 rounded-3xl bg-violet-900 px-6 py-10 text-center sm:grid-cols-4 sm:px-10">
          {[
            ["500+", t.stats.patients],
            ["98%", t.stats.success],
            ["5+", t.stats.years],
            ["24/7", t.stats.support],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                {value}
              </p>
              <p className="mt-1 text-xs text-violet-200 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
