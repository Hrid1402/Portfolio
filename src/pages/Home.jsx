import { useEffect } from 'react';
import styles from '../styles/home.module.scss'
import NavBar from '../components/navBar';
import Presentation from '../components/Presentation';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticlesComponent from '../components/ParticlesComponent';
import '../styles/particles.scss';


function Home() {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.setAttribute('data-scroll', window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={styles.home}>
      <ParticlesComponent id='particles'/>
      <NavBar/>
      <Presentation/>
      <AboutMe/>
      <Projects/>
      <TechStack/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default Home