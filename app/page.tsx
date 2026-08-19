import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Services />
        <Industries />
        <Process />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
