import { useEffect, useState } from "react";
import "./cursor.scss";
import { motion } from "framer-motion";

function Cursor() {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    function mouseMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x + 10, y: position.y + 10 }}
    ></motion.div>
  );
}

export default Cursor;
