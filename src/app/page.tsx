import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { AboutClub } from "@/components/sections/AboutClub";
import { EventDetails } from "@/components/sections/EventDetails";
import { Rounds } from "@/components/sections/Rounds";
import { Prizes } from "@/components/sections/Prizes";
import { Sponsors } from "@/components/sections/Sponsors";
import { Registration } from "@/components/sections/Registration";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ParallaxBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <AboutClub />
        <EventDetails />
        <Rounds />
        <Prizes />
        <Sponsors />
        <Registration />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
