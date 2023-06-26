import { benefits } from "../constants";
import styles, { layout } from "../style";
import BenefitsCard from "./BenefitsCard";
import Button from "./Button";
import { Hero, Stats, Clients, Testimonials, CallToAction } from "../components";
import Example from "./Example";

const Home = () => {
  return (
    <>
     <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <Stats />

    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Drop your bike, <br className="sm:block hidden" /> we’ll handle
          the repairs.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right mechanic, your biker life can be easier by: 
          getting trusted, quality and timely services; saving you money. Allow us to take
          the search out of your hands today so you can deal with the important stuff.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
      {benefits.map((benefit, index) => (
        <BenefitsCard key={benefit.id} {...benefit} index={index} />
      ))}
    </div> 

    </section>

    <Testimonials />
    <Clients />
    <CallToAction />
    <Example />
    </>
  );
};

export default Home;
