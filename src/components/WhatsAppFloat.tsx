"use client";

import { MessageCircle } from "lucide-react";
import { DOCTOR } from "@/lib/content";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${DOCTOR.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-900/30 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
