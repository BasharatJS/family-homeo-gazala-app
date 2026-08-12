"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type BookingContextValue = {
  isOpen: boolean;
  presetService: string;
  openBooking: (service?: string) => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetService, setPresetService] = useState("");

  const openBooking = (service?: string) => {
    setPresetService(service ?? "");
    setIsOpen(true);
  };
  const closeBooking = () => setIsOpen(false);

  return (
    <BookingContext.Provider
      value={{ isOpen, presetService, openBooking, closeBooking }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
