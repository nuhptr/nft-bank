import React from "react";

import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constant";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/* TODO: */}
    <div className="absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

    <div className="w-full flex justify-evenly items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        What people are <br className="sm:block hidden" /> saying about us
      </h1>
      <div className="w-full md:mt-0 mt-6 ml-10">
        <p className={`${styles.paragraph} text-left max-w-[470px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div
      className="flex flex-wrap sm:justify-start justify-between 
    w-full feedback-container relative z-[1]"
    >
      {feedback.map((card) => (
        <FeedbackCard {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
