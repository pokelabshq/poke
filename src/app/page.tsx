import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import CouncilSpotlight from "@/components/CouncilSpotlight";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <CouncilSpotlight />
        <About />
        <Approach />
      </main>
      <Footer />
    </>
  );
}
