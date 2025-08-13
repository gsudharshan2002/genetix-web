'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Intro from "@/components/Intro";
import Aboutus from "@/components/Aboutus";
import News from "@/components/News";
import TechStack from "@/components/TechStack";
import FAQ from "@/components/FAQ"



export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-green-100">
      <Header />
      <Intro />
      <Services />
      <Process/>
      <Partners />
      <TechStack/>
      
      <Aboutus/>

      

      <FAQ/>
      

      <Team />
      <News />
      <Footer />
    </main>
  );
}
