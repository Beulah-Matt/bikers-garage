import React from 'react'
import styles from "./style";
import { Gallery, Services, Clients, Contact, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Home from './components/Home';
import CallToAction from './components/CallToAction';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" component={Contact} />
        </Routes>
        <Testimonials />
        <Clients />
        <CallToAction />
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default App
