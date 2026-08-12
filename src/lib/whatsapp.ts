import { DOCTOR } from "./content";
import type { Language } from "./content";

export function buildWhatsAppUrl(
  lang: Language,
  greeting: string,
  fields: { label: string; value: string }[]
) {
  const lines = [greeting, ...fields.filter((f) => f.value).map((f) => `${f.label}: ${f.value}`)];
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${DOCTOR.whatsappNumber}?text=${text}`;
}
