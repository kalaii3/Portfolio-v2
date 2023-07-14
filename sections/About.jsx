"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";
import { Button, SectionTitle } from "../components";
import { identity, aboutExperiencesList } from "../constants/data";
import { ThemeContext } from "../context/ThemeContext";
import { SectionWrapper } from "../wrapper";
import { fadeIn, staggerContainer, textVariants } from "../utils/motion";

function About() {
  const { theme } = useContext(ThemeContext);

  const {description, picture } = identity;

  return (
    <section
      className="h-full w-screen p-sectionPadding"
      id="about"
    >
      {/* About Section Title */}
      <SectionTitle>About Me</SectionTitle>

      {/* About Content Container */}
      <motion.div
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
        initial="hidden"
        className="xl:max-w-sectionWidth max-w-[62.5rem] mx-auto grid lg:grid-cols-[35%_50%] lg:gap-[15%] grid-cols-1 gap-4"
      >
        {/* About Image Content */}
       
          <div className="lg:h-[30rem] md:h-[30rem] h-[20.5rem] overflow-hidden lg:rotate-[1deg] rotate-0 rounded-[1rem] transition-all duration-300 hover:rotate-0">
            <img
              src={picture[1]}
              alt={"About Banner"}
            />
          </div>

        {/* About Text Content */}
        <motion.div
          variants={fadeIn("left", "tween", 0.1, 1.1)}
          className="flex flex-col justify-center"
        >
          {/* About Text Description */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1.1)}
            className={`${theme === "light" ? "border-[#777777]/50 text-black" : "border-altLight/50 text-white"} lg:border-b-[2px] mb-8 lg:text-start text-center lg:mt-0 mt-6`}
          >
            <motion.h2
              variants={textVariants(1.1)}
              className="lg:text-[2rem] text-[1.75rem] font-semibold mb-3"
            >
              Hello i'am <span className={theme === "light" ? "text-primary" : "text-altPrimary"}>Kalaiyarasan</span>
            </motion.h2>
            
            <motion.p
              variants={textVariants(1.3)}
              className={`${theme === "light" ? "text-[#777777]" : "text-altLight"} max-w-[85%] w-full text-base md:text-lg pb-6 font-normal lg:mx-0 mx-auto`}
            >
              {description[1]}
            </motion.p>
          </motion.div>

          

        </motion.div>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(About, "about");
