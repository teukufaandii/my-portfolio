import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { servicesData } from "../../data/servicesData";

const variants = {
  initial: {
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
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="textContainer">
        <p>Focusing on scalable backend engineering and modern frontend solutions</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="People Working" />
          <h1>
            Engineering <motion.b whileHover={{ color: "orange" }}>Services</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            Building <motion.b whileHover={{ color: "orange" }}>Scalable Apps.</motion.b>
          </h1>
          <button onClick={() => {
            const el = document.getElementById("Portfolio");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}>
            WHAT WE DO?
          </button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <div className="serviceTags">
              {service.tags.map((tag) => (
                <span key={tag} className="tagBadge">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
