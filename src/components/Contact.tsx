"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock, MessageCircle, PhoneCall, Send } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { DOCTOR, type HourRow } from "@/lib/content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Contact() {
  const { lang, t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const serviceTitles: string[] = t.services.items.map((s) => s.title);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const greeting =
      lang === "hi" ? "नमस्ते, मेरा एक सवाल है।" : "Hi, I have a query.";
    const labels =
      lang === "hi"
        ? { name: "नाम", phone: "फ़ोन", service: "सेवा", message: "संदेश" }
        : { name: "Name", phone: "Phone", service: "Service", message: "Message" };

    const url = buildWhatsAppUrl(lang, greeting, [
      { label: labels.name, value: name },
      { label: labels.phone, value: phone },
      { label: labels.service, value: service },
      { label: labels.message, value: message },
    ]);
    window.open(url, "_blank");
    setName("");
    setPhone("");
    setService("");
    setMessage("");
  };

  return (
    <section id="contact" className="bg-lavender-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-500 sm:text-sm">
            {t.contact.sectionTag}
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-violet-900 sm:text-3xl lg:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-ink-soft">{t.contact.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm lg:col-span-1">
            <h3 className="font-display text-base font-bold text-violet-900">
              {t.contact.visitTitle}
            </h3>

            <div className="mt-5 space-y-5">
              <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                  <MapPin className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-violet-700">
                    {t.contact.addressLabel}
                  </p>
                  <p className="mt-0.5 text-sm text-ink-soft">{t.contact.address}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                  <Phone className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-violet-700">
                    {t.contact.phoneLabel}
                  </p>
                  <a
                    href={`tel:${DOCTOR.phoneDisplay.replace(/\s/g, "")}`}
                    className="mt-0.5 block text-sm text-ink-soft hover:text-violet-600"
                  >
                    {DOCTOR.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                  <Mail className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-violet-700">
                    {t.contact.emailLabel}
                  </p>
                  <a
                    href={`mailto:${DOCTOR.email}`}
                    className="mt-0.5 block break-all text-sm text-ink-soft hover:text-violet-600"
                  >
                    {DOCTOR.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                  <Clock className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-violet-700">
                    {t.contact.hoursLabel}
                  </p>
                  <ul className="mt-0.5 space-y-0.5">
                    {t.contact.hours.map((h: HourRow) => (
                      <li key={h.day} className="text-sm text-ink-soft">
                        <span className="font-medium">{h.day}:</span> {h.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-violet-50 p-3 text-center">
                <p className="text-xs font-semibold text-violet-700">
                  {t.contact.emergencyTitle}
                </p>
                <p className="text-[11px] text-ink-soft">
                  {t.contact.emergencySubtitle}
                </p>
              </div>
              <div className="rounded-xl bg-violet-50 p-3 text-center">
                <p className="text-xs font-semibold text-violet-700">
                  {t.contact.freeConsultTitle}
                </p>
                <p className="text-[11px] text-ink-soft">
                  {t.contact.freeConsultSubtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm lg:col-span-2">
            <h3 className="font-display text-base font-bold text-violet-900">
              {t.contact.formTitle}
            </h3>
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.contact.formName}
                  className="w-full rounded-xl border border-violet-200 bg-lavender-50 px-3.5 py-2.5 text-sm text-ink outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                />
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.contact.formPhone}
                  className="w-full rounded-xl border border-violet-200 bg-lavender-50 px-3.5 py-2.5 text-sm text-ink outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                />
              </div>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-xl border border-violet-200 bg-lavender-50 px-3.5 py-2.5 text-sm text-ink outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              >
                <option value="">{t.contact.formService}</option>
                {serviceTitles.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.contact.formMessage}
                className="w-full resize-none rounded-xl border border-violet-200 bg-lavender-50 px-3.5 py-2.5 text-sm text-ink outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700 sm:w-auto sm:px-8"
              >
                <Send className="h-4 w-4" />
                {t.contact.formSubmit}
              </button>
            </form>

            <div className="mt-6 rounded-xl bg-violet-50 p-4">
              <p className="text-xs font-semibold text-violet-700">
                {t.contact.guaranteeTitle}
              </p>
              <p className="mt-1 text-xs text-ink-soft">{t.contact.guaranteeText}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-violet-100 shadow-sm">
          <iframe
            title={t.contact.findUsTitle}
            className="h-72 w-full sm:h-96"
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=87.5588%2C25.5195%2C87.5988%2C25.5595&layer=mapnik&marker=25.5395%2C87.5788"
          />
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 rounded-2xl border border-violet-100 bg-white px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm font-medium text-violet-900">
            {t.contact.directTitle}
          </p>
          <div className="flex gap-3">
            <a
              href={`tel:${DOCTOR.phoneDisplay.replace(/\s/g, "")}`}
              className="flex items-center gap-2 rounded-xl border-2 border-violet-200 px-5 py-2.5 text-sm font-semibold text-violet-700 transition-colors hover:bg-violet-50"
            >
              <PhoneCall className="h-4 w-4" />
              {t.contact.callNow}
            </a>
            <a
              href={`https://wa.me/${DOCTOR.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
            >
              <MessageCircle className="h-4 w-4" />
              {t.contact.whatsappUs}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
