import { Hero } from "@/components/hero";
import { AboutFirst } from "@/components/about-first";
import { Subteams } from "@/components/subteams";
import { SchoolAbout } from "@/components/school-about";
import { TeamSection } from "@/components/team-section";
import { SponsorsSection } from "@/components/sponsors-section";
import { Testimonials } from "@/components/testimonials";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutFirst />
      <Subteams />
      <SchoolAbout />
      <TeamSection />
      <SponsorsSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
