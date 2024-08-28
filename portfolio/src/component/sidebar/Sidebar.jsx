import "./sidebar.scss";
import Links from "./links/Links";
import ToggleButtons from "./togglebutton/ToggleButtons";
import { useState } from "react";
import { motion } from "framer-motion";

const variant = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(20px at 50px 47px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variant}>
        <Links />
      </motion.div>
      <ToggleButtons setOpen={setOpen} />
    </motion.div>
  );
}

export default Sidebar;
