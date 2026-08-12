"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { content, type Language } from "./content";

type LanguageContextValue = {
  lang: Language;
  toggleLang: () => void;
  t: typeof content["hi"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("hi");

  const toggleLang = () => setLang((prev) => (prev === "hi" ? "en" : "hi"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
