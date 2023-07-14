import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { linkList, socialMediaList } from "../constants/data";
import { ThemeContext } from "../context/ThemeContext";
import { fadeIn, staggerContainer } from "../utils/motion";

export default function SectionWrapper(MainSection, activeDots = "") {
  return function () {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className="relative w-screen">
           

            {/* Main Section */}
            <MainSection />

            {/* Section Dots Navigations */}
            <motion.div
              variants={staggerContainer}
              viewport={{ once: true }}
              whileInView="show"
              initial="hidden"
              className="absolute bottom-[50%] right-6 translate-y-[50%] lg:flex hidden flex-col gap-y-2 z-10"
            >
              {linkList.map(({ href }, index) => (
                <Link
                  href={`/#${href}`}
                  key={index}
                  scroll={false}
                >
                  <motion.div
                    variants={fadeIn("left", "tween", 0.2, 0.5)}
                    className={`
                    ${
                      theme === "light" && href === activeDots
                        ? "bg-primary"
                        : theme === "dark" && href === activeDots
                        ? "bg-altPrimary"
                        : theme === "light" && href !== activeDots
                        ? "bg-light"
                        : theme === "dark" && href !== activeDots
                        ? "bg-altLight"
                        : ""
                    } 
                    h-2 w-2 rounded-full
                  `}
                  />
                </Link>
              ))}
            </motion.div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  };
}
