import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StackStrip from "@/components/StackStrip";
import Problem from "@/components/Problem";
import Product from "@/components/Product";
import Gates from "@/components/Gates";
import Templates from "@/components/Templates";
import Workstreams from "@/components/Workstreams";
import Regulated from "@/components/Regulated";
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
        <StackStrip />
        <Problem />
        <Product />
        <Gates />
        <Templates />
        <Workstreams />
        <Regulated />
        <Security />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
