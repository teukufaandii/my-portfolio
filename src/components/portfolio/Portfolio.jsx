import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "TEKNOID Campus Correspondence Web Application (Developing 2.0)",
    img: "/surat.png",
    desc: "The TEKNOID Campus Correspondence Web Application (Developing 2.0) simplifies communication and document management on campus, allowing secure and efficient handling of official correspondence between departments. It enhances collaboration with improved performance, security, and usability.",
    link: "http://teknoid.itb-ad.ac.id"
  },
  {
    id: 2,
    title: "TEKNOID Campus Attendence Web Application (OnGoing)",
    img: "/absensi.png",
    desc: "The TEKNOID Campus Attendance Web Application (OnGoing) is designed to streamline attendance tracking across campus. It enables efficient and accurate recording of attendance for staff, enhancing accountability and management with improved performance and usability.",
    link: "http://teknoid.itb-ad.ac.id"
  },
  {
    id: 3,
    title: "TEKNOID Campus Inventory Desktop Application (Coming Soon)",
    img: "/comingSoon.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    link: "http://teknoid.itb-ad.ac.id"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer"  ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => window.open(item.link)}>See More</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
