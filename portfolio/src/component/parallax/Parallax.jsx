import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

// eslint-disable-next-line
function Parallax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg ,#111132 , #0C0c1d)"
            : "linear-gradient(180deg, #111132 , #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What I Do?" : "What I Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg }} className="planets" drag></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
      <motion.div
        className="astronomy"
        style={{ y: yBg }}
        drag
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
        }}
        dragConstraints={ref}
      ></motion.div>
    </div>
  );
}

export default Parallax;
