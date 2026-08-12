"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Clock, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useBooking } from "@/lib/booking-context";
import { iconMap } from "@/lib/icon-map";
import { ICONS, SERVICE_META, DOCTOR, type ServiceItem } from "@/lib/content";

export default function Services() {
  const { t } = useLanguage();
  const { openBooking } = useBooking();

  return (
    <section id="services" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-500 sm:text-sm">
            {t.services.sectionTag}
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-violet-900 sm:text-3xl lg:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-3 text-ink-soft">{t.services.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item: ServiceItem, i: number) => (
            <ServiceCard
              key={item.title}
              item={item}
              icon={ICONS.services[i]}
              meta={SERVICE_META[i]}
              onBook={() => openBooking(item.title)}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={() => openBooking()}
            className="rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-colors hover:bg-violet-700 sm:text-base"
          >
            {t.services.ctaBook}
          </button>
          <a
            href={`https://wa.me/${DOCTOR.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border-2 border-violet-200 bg-white px-6 py-3.5 text-sm font-semibold text-violet-700 transition-colors hover:bg-violet-50 sm:text-base"
          >
            <MessageCircle className="h-4 w-4" />
            {t.services.ctaWhatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  item,
  icon,
  meta,
  onBook,
}: {
  item: ServiceItem;
  icon: string;
  meta: { initial: number; followup: number; duration: number };
  onBook: () => void;
}) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[icon];
  const visibleConditions = expanded ? item.conditions : item.conditions.slice(0, 3);
  const hiddenCount = item.conditions.length - 3;

  return (
    <div className="flex flex-col rounded-2xl border border-violet-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-white">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-display text-base font-bold text-violet-900">
        {item.title}
      </h3>
      <p className="mt-1.5 text-sm text-ink-soft">{item.desc}</p>

      <div className="mt-4 flex items-center gap-4 rounded-xl bg-lavender-50 px-3.5 py-2.5 text-xs text-ink-soft">
        <span>
          <span className="font-semibold text-violet-700">
            {t.services.initialLabel}:
          </span>{" "}
          ₹{meta.initial}
        </span>
        <span>
          <span className="font-semibold text-violet-700">
            {t.services.followupLabel}:
          </span>{" "}
          ₹{meta.followup}
        </span>
      </div>
      <div className="mt-2 flex items-center gap-1.5 text-xs text-ink-soft">
        <Clock className="h-3.5 w-3.5" />
        {meta.duration} {t.services.durationSuffix}
      </div>

      <div className="mt-4 flex-1">
        <p className="text-xs font-semibold text-violet-700">
          {t.services.conditionsLabel}
        </p>
        <ul className="mt-2 space-y-1.5">
          {visibleConditions.map((c: string) => (
            <li key={c} className="flex items-start gap-1.5 text-xs text-ink-soft">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
              {c}
            </li>
          ))}
        </ul>
        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 flex items-center gap-1 text-xs font-semibold text-violet-600 hover:text-violet-700"
          >
            {expanded ? (
              <>
                {t.services.lessLabel}
                <ChevronUp className="h-3.5 w-3.5" />
              </>
            ) : (
              <>
                {t.services.moreLabel} (+{hiddenCount})
                <ChevronDown className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        )}
      </div>

      <button
        onClick={onBook}
        className="mt-5 w-full rounded-xl border-2 border-violet-600 py-2.5 text-sm font-semibold text-violet-700 transition-colors hover:bg-violet-600 hover:text-white"
      >
        {t.services.ctaBook}
      </button>
    </div>
  );
}
