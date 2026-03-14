import { ReactNebula } from "@flodlc/nebula";
import { Suspense, lazy } from 'react'
import Loader from './components/animations/Loader';
import { Route, Routes } from "react-router";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";

const Header = lazy(() => import('./components/Header'))
const Footer = lazy(() => import('./components/Footer'))
const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/ProjectsPage'))


function App() {

  return (
    <div className="mx-auto max-w-[100rem]">
      <div className='fixed top-0 left-0 right-0 bottom-0 z-[-1] overflow-x-hidden'>
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
        <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
