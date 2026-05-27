import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CodeDemo from "@/components/CodeDemo";
import HowItWorks from "@/components/HowItWorks";
import Differentiated from "@/components/Differentiated";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import InstallCTA from "@/components/InstallCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <CodeDemo />
        <HowItWorks />
        <Differentiated />
        <Pricing />
        <FAQ />
        <InstallCTA />
      </main>
      <Footer />
    </>
  );
}
