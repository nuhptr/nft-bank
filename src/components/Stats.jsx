import React from "react";

import styles from "../style";
import { stats } from "../constant";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 `}>
    {stats.map((stat, index) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-center items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white mr-4">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase">
          {stat.title}
        </p>
        <hr
          className={`${
            index === stats.length - 1 ? "hidden" : "w-5 fill-white rotate-90 ml-12"
          }`}
        />
      </div>
    ))}
  </section>
);

export default Stats;
