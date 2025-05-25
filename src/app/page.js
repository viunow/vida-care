// app/page.js - Página principal do Next.js 14
"use client";

import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
}
