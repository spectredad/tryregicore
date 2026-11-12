import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustExtras from "@/components/TrustExtras";
import AgentShowcase from "@/components/AgentShowcase";
import Services from "@/components/Services";
import Metrics from "@/components/Metrics";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import ROICalculator from "@/components/ROICalculator";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Best Marketing and AI company | Regicore - if you’re looking for SEO, Local SEO, AI SEO or meta Ads near me - Regicore gets local businesses to the top of google",
};

export default function Home() {
  return (
    <main id="main">
      <Navbar />
      <Hero />
      <TrustExtras />
      <AgentShowcase />
      <Services />
      <Metrics />
      <WhoIsThisFor />
      <ROICalculator />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
