import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mandate from "@/components/Mandate";
import Evidence from "@/components/Evidence";
import Scope from "@/components/Scope";
import Workstreams from "@/components/Workstreams";
import Gates from "@/components/Gates";
import Security from "@/components/Security";
import Pricing from "@/components/Pricing";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Mandate />
        <Evidence />
        <Scope />
        <Workstreams />
        <Gates />
        <Security />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
