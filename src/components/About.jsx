import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 70,
          scale: 2,
          speed: 450,
        }}
        className="bg-gray-400 dark:bg-black border border-gray-200 dark:border-gray-700 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white dark:text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:text-gray-400`}>
          About us
        </p>
        <h2 className={` dark:text-black text-6xl font-extrabold my-4`}>
          Our Features
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary dark:text-gray-300 text-[21px] max-w-6xl leading-[30px]"
      >
        Blockchain Meets Simplicity CROSSCHYZE combines the power of blockchain
        technology with intuitive integration tools. From credit cards to
        wallets and bank transfers, our platform makes it easy for businesses
        to centralize their payment solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(About, "about");
