import { useRef } from "react";
import "./services.scss";
import { animate, motion, useInView } from "framer-motion";

const variants = {
  inital: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="inital"
      //   animate="animate"
      // whileInView={"animate"}
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer">
        <p>Focusing on self branding and growth</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            No <motion.b whileHover={{ color: "orange" }}>Services</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            Yet,{" "}
            <motion.b whileHover={{ color: "orange" }}>Coming Soon.</motion.b>
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
            sodales id, porttitor vitae est. Donec laoreet rutrum libero sed
            pharetra.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
            sodales id, porttitor vitae est. Donec laoreet rutrum libero sed
            pharetra.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
            sodales id, porttitor vitae est. Donec laoreet rutrum libero sed
            pharetra.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
            sodales id, porttitor vitae est. Donec laoreet rutrum libero sed
            pharetra.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
