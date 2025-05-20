import Header from '../components/Header';
import Hero from './components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export const metadata = {
  title: 'Ayush Mishra - Mobile Developer & Software Engineer',
  description: 'Android Developer with expertise in Kotlin, React Native, and scalable backend systems. Currently pursuing Masters in Computer Science at University of Florida.',
  keywords: 'Android Developer, Mobile Developer, Kotlin, React Native, Software Engineer, Ayush Mishra',
};