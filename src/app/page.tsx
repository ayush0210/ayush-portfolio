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
  title: 'Ayush Mishra - Software Engineer',
  description: 'Software Engineer with 2+ years of experience delivering scalable, customer-obsessed solutions for millions of users. Strong CS fundamentals in building fault-tolerant, distributed applications.',
  keywords: 'Software Engineer, Mobile Developer, Kotlin, React Native, Android, Full Stack, Ayush Mishra',
};