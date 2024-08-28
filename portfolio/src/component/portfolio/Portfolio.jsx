import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Twitter-Clone",
    img: "/twitter.png",
    desc: "Is Twitter Clone website that has many features including liking commenting posting , Notification and many others",
    href: "https://twitter-clone-e823.onrender.com/login",
  },
  {
    id: 2,
    title: "Natify",
    img: "/Natify.png",
    desc: "Natify is an e-commerce website that you can buy products online, Natify is a nice looking website and has more great features",
    href: "https://natify.vercel.app/",
  },
  {
    id: 3,
    title: "PurchTech",
    img: "/purchtech.png",
    desc: "PurchTech is an e-commerce website, In PurchTech you can buy electronics devices online. It's MERN stack app with great performance",
    href: "https://purchtechs.vercel.app/",
  },
  {
    id: 4,
    title: "Nati Brands",
    img: "/Brands.png",
    desc: "NatiBrands is an ecomerce website, In NatiBrands you can get brand shoes as you needed and has many options to choose , is nice looking website and it responsive",
    href: "https://nati-brands.vercel.app/",
  },
  {
    id: 5,
    title: "Omnifood-pro",
    img: "/omnifood.png",
    desc: "Omnifood-pro is an Html and css website with a very nice UI/UX design",
    href: "https://omnifood-pro.vercel.app/",
  },
  {
    id: 6,
    title: "Random Chat",
    img: "/random-chat.png",
    desc: "Random chat is a real time chat app that can interact users in real time also has user friendly interface",
    href: "https://all-random-chats.onrender.com",
  },
];

// eslint-disable-next-line
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            {/* eslint-disable-next-line */}
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            {/* eslint-disable-next-line */}
            <h2>{item.title}</h2>
            {/* eslint-disable-next-line */}
            <p>{item.desc}</p>

            <button>
              {/* eslint-disable-next-line */}
              <a href={item.href} target="_blank">
                See Demo
              </a>
            </button>
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
