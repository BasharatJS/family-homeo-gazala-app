import { BookingProvider } from "@/lib/booking-context";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <BookingProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <AppointmentModal />
      <WhatsAppFloat />
    </BookingProvider>
  );
}
