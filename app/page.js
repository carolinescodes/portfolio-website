import HeroSection from './components/HeroSection.jsx'; 
import ProjectsSection from './components/ProjectsSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import ArtSection from './components/ArtSection.jsx';
import Navbar from './components/Navbar.jsx';
import EducationSection from './components/EducationSection.jsx';
import MyStorySection from './components/MyStorySection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ContactSection from './components/ContactSection.jsx';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col min-h-screen w-full px-0 py-0">
                <HeroSection />
                <ProjectsSection />
                <ExperienceSection />
                <EducationSection />
                <SkillsSection />
                <MyStorySection />
                <ArtSection />
                <ContactSection />
            </main>
        </>
    );
}