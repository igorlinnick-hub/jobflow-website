import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Ticker from "@/components/landing/Ticker";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import ChromeExtensionDemo from "@/components/landing/ChromeExtensionDemo";
import StatsCounter from "@/components/landing/StatsCounter";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import GradientCTA from "@/components/landing/GradientCTA";
import FloatingAIGuide from "@/components/landing/FloatingAIGuide";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <FloatingAIGuide />
      <main className="flex-1">
        <Hero />
        <Ticker />
        <HowItWorks />
        <Features />
        <ChromeExtensionDemo />
        <StatsCounter />
        <Pricing />
        <FAQ />
        <GradientCTA />
      </main>
      <Footer />
    </>
  );
}
