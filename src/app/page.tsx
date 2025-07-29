'use client';


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Aboutus from "@/components/Aboutus";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Whyus from "@/components/Whyus";
import Team from "@/components/Team";
import Intro from "@/components/Intro";


export default function Home() {

  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
        
      <Header />

      <Intro />
      <Services />
      <Team />
      <Partners />
      <Whyus />

      <Aboutus />
      <Footer />
    </main>
  );
}
