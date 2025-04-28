import './App.css'
import { ReactNebula } from "@flodlc/nebula";
import { Suspense, lazy, useEffect } from 'react'
import Loader from './components/minorComponents/Loader';

const Header = lazy(() => import('./components/Header'))
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Technologies = lazy(() => import('./components/Technologies'))
const Footer = lazy(() => import('./components/Footer'))
const Contact = lazy(() => import('./components/Contact'))
const Projects = lazy(() => import('./components/Projects'))
const Certification = lazy(() => import('./components/Certification'))
import SplashCursor from './components/minorComponents/SplashCursor'
import { use } from 'react';

function App() {

  useEffect(() => {
    window.addEventListener('click', () => {
      const audio = document.getElementById('audio');
      audio.muted = false;
      audio.volume = 0.2
      audio.play().catch(console.error); // replays in case it stopped
    }, { once: true });
  }
  , [])

  return (
    <>
      {/* <SplashCursor /> */}
      <div className='fixed top-0 left-0 right-0 bottom-0 z-[-1]'>
        <ReactNebula config={{
          starsCount: 100,
          starsRotationSpeed: 1,
          nebulasIntensity: 4,
          cometFrequence: 100,
          sunScale: 0,
          solarSystemOrbite: 0,
          planetsScale: 0
        }} />
      </div>
      <Suspense fallback={<Loader />}>
        <audio id='audio' src="/portfolio/assets/audio.mp3" muted autoPlay loop />
        <Header />
        <Home />
        <About />
        <Certification />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
