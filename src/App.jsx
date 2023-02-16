import React from 'react'
import styles from "./style";
import { Gallery, Services, CardDeal, Clients, Contact, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

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
        <Services />
        <Gallery />
        <CardDeal />
        <Testimonials />
        <Clients />
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default App
