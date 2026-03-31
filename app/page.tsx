import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Ticker from "@/components/landing/Ticker";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import AIProcess from "@/components/landing/AIProcess";
import StatsCounter from "@/components/landing/StatsCounter";
import Pricing from "@/components/landing/Pricing";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Ticker />
        <HowItWorks />
        <Features />
        <AIProcess />
        <StatsCounter />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
