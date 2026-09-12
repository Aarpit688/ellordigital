import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import FeaturedWork from "@/components/FeaturedWork";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Awards from "@/components/Awards";
import CtaBanner from "@/components/CtaBanner";
import Studio from "@/components/Studio";

export const metadata: Metadata = {
  description:
    "Ellor Digital builds products, brands, and experiences for businesses that take quality seriously.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedWork />
      <Approach />
      <Services />
      <Testimonials />
      <Stats />
      <Awards />
      <CtaBanner />
      <Studio />
    </>
  );
}
