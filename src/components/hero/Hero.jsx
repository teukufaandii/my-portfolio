import React, { useEffect, useState } from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import { profileData } from "../../data/profileData";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const typewriterVariants = {
  initial: { width: "0ch" },
  animate: (i) => ({
    width: `${i}ch`,
    transition: {
      duration: 2,
      type: "spring",
    },
  }),
};

const Hero = () => {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const codeSnippets = profileData.typewriterSkills;

  useEffect(() => {
    const interval = setInterval(() => {
      setSnippetIndex((prevIndex) => (prevIndex + 1) % codeSnippets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [codeSnippets.length]);

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>{profileData.name.toUpperCase()}</motion.h2>
          <motion.h1 variants={textVariants}>{profileData.role}</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              onClick={() => {
                const el = document.getElementById("Portfolio");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See Latest Projects
            </motion.button>
            <motion.button
              variants={textVariants}
              onClick={() => {
                const el = document.getElementById("Contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="Scroll Down Icon"
          />
        </motion.div>
      </div>

      <div className="codeDisplay">
        <motion.div
          className="typewriter"
          key={snippetIndex}
          custom={codeSnippets[snippetIndex].length}
          variants={typewriterVariants}
          initial="initial"
          animate="animate"
        >
          {codeSnippets[snippetIndex]}
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        style={{ userSelect: "none" }}
      >
        Fullstack Web Developer • Clean Architecture • Scalable Systems • RESTful API
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
