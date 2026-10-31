import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import FeaturedProjects from '@/components/FeaturedProjects';
import GitHubRepos from '@/components/GitHubRepos';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <About />
        <Experience />
        <Skills />
        <GitHubRepos />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
