import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import TaxReform from "@/components/TaxReform";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Mission />
        <Services />
        <TaxReform />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
