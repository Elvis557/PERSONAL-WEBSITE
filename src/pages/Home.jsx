<<<<<<< HEAD
import { Navbar } from "../components/Navbar"
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { NotFound } from "./NotFound"
import { BuyMeCoffeePage } from "../components/BuyMeCoffeePage"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />


        {/*Background Effects*/}
        <StarBackground />

        {/*Navbar*/}
        <Navbar />


        {/*Main Content*/}
        <main>
          <HeroSection />
          <AboutSection/>
          <SkillsSection/>
          <ProjectsSection />
          <BuyMeCoffeePage/>
          <ContactSection />
          <NotFound />
        </main>


        {/*Footer*/}
        <Footer />
    </div>
  )
}
=======
import { Navbar } from "../components/Navbar"
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />


        {/*Background Effects*/}
        <StarBackground />

        {/*Navbar*/}
        <Navbar />


        {/*Main Content*/}
        <main>
          <HeroSection />
          <AboutSection/>
          <SkillsSection/>
          <ProjectsSection />
          <ContactSection />
        </main>


        {/*Footer*/}
        <Footer />
    </div>
  )
}
>>>>>>> 699f3c4259cee69c5549ec7ed5ec42b693a5b26b
