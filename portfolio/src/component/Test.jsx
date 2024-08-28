import { motion } from "framer-motion";

function Test() {
  const nati = {
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.3 },
    }),
    hidden: { opacity: 0 },
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="course">
      <motion.ul variants={nati} initial="hidden" animate="visible">
        {items.map((item, index) => (
          <motion.li key={item} variants={nati} custom={index}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Test;
