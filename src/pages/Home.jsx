import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"
import { Navbar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { Contact } from "lucide-react"
import { ContactSection } from "../components/ContactSection"

export const Home=()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        

        {/* Theme Toggle */}
        <ThemeToggle/>

        {/* Background */}
        <StarBackground/> 

        {/* navBar*/}
        <Navbar/>
 
        {/* Main content */}
        <main>
            <HeroSection/>
            <AboutSection/>
            {/* <SkillsSection/> */}
            <ContactSection/>
        </main>
        
        
        </div>
}