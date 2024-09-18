import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          AndyyDev
        </motion.span>
        <div className="social">
          <a href="https://facebook.com/teukufaandii">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://instagram.com/teukufaandii">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://youtube.com/@andyy.0903">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://github.com/teukufaandii">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
