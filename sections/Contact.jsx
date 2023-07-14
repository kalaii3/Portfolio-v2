"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { fadeIn, staggerContainer, textVariants } from "../utils/motion";
import { HiMail } from "react-icons/hi"
import { FaGithub, FaInstagram, FaLinkedin ,FaInstagramSquare } from "react-icons/fa"
import NowPlaying from "../pages/api/NowPlaying";

function Contact() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <section
      id="contact"
    >
       <motion.div
      variants={staggerContainer}
      viewport={{ once: true }}
      whileInView="show"
      initial="hidden"
      className={`${theme === "light" ? "primaryGradient" : "altprimaryGradient"} py-10 w-full text-white text-center flex flex-col items-center gap-y-16 transition-all duration-300`}
    >

      
		<div
			id="contact"
      
		>
			<div className="text-center">
				<h1 className="text-5xl">Get in Touch</h1>
			<p>So that we can talk more about...</p>
			</div>
			<div className="flex justify-center items-center gap-4 my-4">
				<a
					aria-label="Email"
					className="contact-icon transition duration-300 hover:scale-125"
					target="_blank"
					rel="noreferrer"
					href="mailto:iamkalai33@gmail.com"
					style={{ fontSize: "38px"}}
				>
					<HiMail style={{ cursor: "pointer" }} />
				</a>
				<a
					aria-label="Github"
					className="contact-icon transition duration-300 hover:scale-125"
					target="_blank"
					rel="noreferrer"
					href="https://github.com/Kalai2773/"
                    style={{ fontSize: "32px"}}
				>
					<FaGithub style={{ cursor: "pointer" }} />
				</a>
				<a
					aria-label="Linkedin"
					className="contact-icon transition duration-300 hover:scale-125"
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in//"
                    style={{ fontSize: "32px"}}
				>
					<FaLinkedin style={{ cursor: "pointer" }} />
 				 </a>
				<a
					aria-label="Instagram"
					className="contact-icon transition duration-300 hover:scale-125"
					target="_blank"
					rel="noreferrer"
					href="https://www.instagram.com/kxlai_3/"
                    style={{ fontSize: "32px"}}
				>
					<FaInstagramSquare style={{ cursor: "pointer" }} />
				</a>
			</div>
			<div className="text-center">
			<NowPlaying/>
			</div>
			<p>Copyright © 2023</p>
			<a aria-label="OldSite" className="text-gray-400 text-sm" target="_blank" rel="noreferrer" href="https://portfolio-kalai2773.vercel.app/">View Old Site</a>
		</div>
    </motion.div>
    </section>
  );
}

export default Contact;
