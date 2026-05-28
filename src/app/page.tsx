import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Hero from "@/components/hero";
import Project from "@/components/project";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Tool from "@/components/tool";
import Contact from "@/components/contact";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="max-w-2xl mx-auto w-full">
        <Hero />
        <Project />
        <Experience />
        <Tool />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}