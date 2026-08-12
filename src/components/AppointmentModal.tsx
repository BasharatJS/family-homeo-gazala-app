"use client";

import { useEffect, useState } from "react";
import { X, Send } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useBooking } from "@/lib/booking-context";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { Language } from "@/lib/content";

export default function AppointmentModal() {
  const { isOpen, closeBooking } = useBooking();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        className="absolute inset-0 bg-violet-950/50 backdrop-blur-sm"
        aria-label="close"
        onClick={closeBooking}
      />
      <BookingForm />
    </div>
  );
}

function BookingForm() {
  const { t, lang } = useLanguage();
  const { presetService, closeBooking } = useBooking();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(presetService);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const serviceTitles: string[] = t.services.items.map((s) => s.title);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const greeting: Record<Language, string> = {
      hi: "नमस्ते, मुझे अपॉइंटमेंट बुक करनी है।",
      en: "Hi, I would like to book an appointment.",
    };
    const labels: Record<Language, Record<"name" | "phone" | "service" | "date" | "time" | "message", string>> = {
      hi: { name: "नाम", phone: "फ़ोन", service: "सेवा", date: "पसंदीदा तारीख", time: "पसंदीदा समय", message: "संदेश" },
      en: { name: "Name", phone: "Phone", service: "Service", date: "Preferred Date", time: "Preferred Time", message: "Message" },
    };

    const url = buildWhatsAppUrl(lang, greeting[lang], [
      { label: labels[lang].name, value: name },
      { label: labels[lang].phone, value: phone },
      { label: labels[lang].service, value: service },
      { label: labels[lang].date, value: date },
      { label: labels[lang].time, value: time },
      { label: labels[lang].message, value: message },
    ]);
    window.open(url, "_blank");
    closeBooking();
  };

  return (
    <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
      <button
        onClick={closeBooking}
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-ink-soft hover:bg-violet-50"
        aria-label={t.modal.close}
      >
        <X className="h-5 w-5" />
      </button>

      <h3 className="font-display text-xl font-bold text-violet-900">
        {t.modal.title}
      </h3>
      <p className="mt-1 text-sm text-ink-soft">{t.modal.subtitle}</p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            {t.modal.name}
          </label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.modal.namePlaceholder}
            className="w-full rounded-xl border border-violet-200 bg-lavender-50 px-3.5 py-2.5 text-sm text-ink outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            {t.modal.phone}
          </label>
          <input
            required
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{10}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t.modal.phonePlaceholder}
            className="w-full rounded-xl border border-violet-200 bg-lavender-50 px-3.5 py-2.5 text-sm text-ink outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            {t.modal.service}
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-xl border border-violet-200 bg-lavender-50 px-3.5 py-2.5 text-sm text-ink outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
          >
            <option value="">{t.modal.selectService}</option>
            {serviceTitles.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              {t.modal.date}
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-violet-200 bg-lavender-50 px-3 py-2.5 text-sm text-ink outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              {t.modal.time}
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full rounded-xl border border-violet-200 bg-lavender-50 px-3 py-2.5 text-sm text-ink outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            {t.modal.message}
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.modal.messagePlaceholder}
            rows={3}
            className="w-full resize-none rounded-xl border border-violet-200 bg-lavender-50 px-3.5 py-2.5 text-sm text-ink outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
        >
          <Send className="h-4 w-4" />
          {t.modal.submit}
        </button>
        <p className="text-center text-xs text-ink-soft">{t.modal.note}</p>
      </form>
    </div>
  );
}
