import { lazy } from 'react'
const Hero = lazy(() => import('../components/Hero'))
const About = lazy(() => import('../components/About'))
const Certification = lazy(() => import('../components/Certification'))
const Technologies = lazy(() => import('../components/Technologies'))
const Projects = lazy(() => import('../components/Projects'))
const Contact = lazy(() => import('../components/Contact'))

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Certification />
      <Technologies />
      <Projects />
      <Contact />
    </>
  )
}

export default Home