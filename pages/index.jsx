import Head from 'next/head';
import Header from '../components/Header';
import HomePage from '../components/Home';
import Footer from '../components/Footer';
import Skill from '../components/Skill';
import About from '../components/About';
import Project from '../components/Project';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import Education from '../components/Education';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Amit Jaiswal</title>
        <meta name="description" content="amit jaiswal portfolio and profile" />
        <meta
          name="google-site-verification"
          content="jI5Zjc4zTse0Dr8hGlpmZZoFkZ_bNzmgYmLp2bl8THY"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Home Section*/}
      <section id="home-container" className="pb-10">
        <Header />
        <HomePage />
      </section>
      {/*About Section*/}
      <section className="pb-10" id="about-skill-container">
        <About />
      </section>
      {/* Skill Section */}
      <section className="pb-10">
        <Skill />
      </section>
      {/*Project Section*/}
      <section className="pb-10" id="project-container">
        <Project />
      </section>
      {/*Eduction Section*/}
      <section className="pb-10" id="project-container">
        <Education />
      </section>
      {/*Footer Section*/}
      <Footer />
      <div className="whatsapp-container">
        <a href="https://wa.me/+919022217954" target="_blank" rel="noreferrer">
          <AiOutlineWhatsApp className="text-5xl cursor-pointer" />
        </a>
      </div>
    </div>
  );
}
