import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CodeDemo from "@/components/CodeDemo";
import HowItWorks from "@/components/HowItWorks";
import Differentiated from "@/components/Differentiated";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CodeDemo />
        <HowItWorks />
        <Differentiated />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
