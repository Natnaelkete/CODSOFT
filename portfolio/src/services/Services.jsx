import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variant = {
  initial: {
    x: -100,
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
};

function Services() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <motion.div
      className="services"
      variants={variant}
      initial="initial"
      animate={isInView && "animate"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variant}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variant}>
        <div className="title">
          <img src="people.webp" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique </motion.b>ideas
          </h1>
        </div>
        <div className="title" >
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>

          <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variant}>
        <div className="box">
          <h1>Branding</h1>
          <p>
            Crafting a unique brand identity that resonates with your audience
            and sets you apart from the competition.
          </p>
        </div>
        <div className="box">
          <h1>Web Development</h1>
          <p>
            Building responsive and high-performance websites tailored to your
            specific needs.
          </p>
        </div>
        <div className="box">
          <h1>UI/UX Design</h1>
          <p>
            Designing intuitive and visually appealing interfaces that provide
            an optimal user experience.
          </p>
        </div>
        <div className="box">
          <h1>Managing Websites</h1>
          <p>
            Offering comprehensive website management services to keep your site
            running smoothly.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
