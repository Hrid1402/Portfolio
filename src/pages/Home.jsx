import { useEffect } from 'react';
import styles from '../styles/home.module.scss'
import NavBar from '../components/navBar';
import Presentation from '../components/Presentation';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import AboutMe from '../components/AboutMe';


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
      <NavBar/>
      <Presentation/>
      <AboutMe/>
      <Projects/>
      <TechStack/>
      
    </div>
  )
}

export default Home