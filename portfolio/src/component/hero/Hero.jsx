import "./hero.scss";
import { motion } from "framer-motion";

const textVariant = {
  initial: {
    y: -500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const imgVariant = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const scrollButton = {
  y: [0, -10, 0],
  transition: {
    repeat: Infinity,
    repeatType: "mirror",
    duration: 1,
  },
};
const slideEffect = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariant}>NATNAEL KETEMA</motion.h2>
          <motion.h1 variants={textVariant}>
            Full Stack Web developer and UI designer
          </motion.h1>
          <motion.div className="buttons" variants={textVariant}>
            <motion.button variants={textVariant}>
              <a href="#Portfolio"> See The Latest Works</a>
            </motion.button>
            <motion.button className="cta-btn" variants={textVariant}>
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img src="/scroll.png" animate={scrollButton} />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={slideEffect}
        initial="initial"
        animate="animate"
      >
        Designer. Developer.
      </motion.div>
      <div className="imageContainer">
        <motion.img
          src="/hero.png"
          alt=""
          className="heroimg"
          variants={imgVariant}
          initial="initial"
          animate="animate"
        />
      </div>
    </div>
  );
}

export default Hero;
