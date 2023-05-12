import React from 'react'
import styles from "./style";
import { Gallery, Services, Clients, Contact, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Home from './components/Home';
import CallToAction from './components/CallToAction';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
  
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/" element={<Home />} />
        </Routes>
       
      </div>
    </div>
  )
}

export default App
