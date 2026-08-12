"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { iconMap } from "@/lib/icon-map";
import { ICONS, DOCTOR, type ExpertiseItem } from "@/lib/content";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-500 sm:text-sm">
            {t.about.sectionTag}
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-violet-900 sm:text-3xl lg:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-3 text-ink-soft">{t.about.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="relative mx-auto aspect-square max-w-xs overflow-hidden rounded-3xl border-8 border-lavender-100 bg-violet-100 shadow-md lg:mx-0">
              <Image
                src={DOCTOR.photo}
                alt={DOCTOR.name}
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
            <div className="mx-auto mt-5 max-w-xs text-center lg:mx-0 lg:text-left">
              <p className="font-display text-lg font-bold text-violet-900">
                {DOCTOR.name}
              </p>
              <p className="text-sm text-ink-soft">{DOCTOR.degree}</p>
              <p className="mt-1 text-sm font-medium text-violet-600">
                {t.about.specialistTag}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-base leading-relaxed text-ink-soft">
              {t.about.bioText}
            </p>

            <h3 className="mt-8 font-display text-lg font-bold text-violet-900 sm:text-xl">
              {t.about.expertiseTitle}
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {t.about.expertiseItems.map((item: ExpertiseItem, i: number) => {
                const Icon = iconMap[ICONS.expertise[i]];
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-xl border border-violet-100 bg-lavender-50 p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-600 text-white">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-violet-900">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-xs text-ink-soft">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-violet-900 px-6 py-10 text-center sm:px-12 sm:py-12">
          <Quote className="mx-auto h-8 w-8 text-violet-400" />
          <h3 className="mt-3 font-display text-lg font-bold text-white sm:text-xl">
            {t.about.missionTitle}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-violet-100 sm:text-base">
            {t.about.missionText}
          </p>
        </div>
      </div>
    </section>
  );
}
