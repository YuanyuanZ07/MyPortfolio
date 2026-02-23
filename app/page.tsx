import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/HeroSection"
import { FeaturedProjectSection } from "@/components/FeaturedProjectSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { SkillsSection } from "@/components/SkillsSection"
import { SupportMindsetSection } from "@/components/SupportMindsetSection"
import { AboutSection } from "@/components/AboutSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedProjectSection />
        <ProjectsSection />
        <SkillsSection />
        <SupportMindsetSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
