import { motion } from "framer-motion";
import React from "react";
import { NextSeo } from "next-seo";
const Layout = ({ children, title, description }) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
      className="layout"
    >
      <NextSeo
        title={title || "Shikhar Gupta"}
        titleTemplate={title || "Shikhar Gupta"}
        defaultTitle="Shikhar Gupta"
        description={
          description ||
          "A full stack web developer, who loves to design and develop beautiful websites. I have been coding for over a year now."
        }
        canonical="https://portfolio-shikhar13012001.vercel.app/"
        openGraph={{
          url: "https://portfolio-shikhar13012001.vercel.app/",
          title: "Shikhar Gupta",
          description:
            description ||
            "A full stack web developer, who loves to design and develop beautiful websites. I have been coding for over a year now.",
          images: [
            {
              url: "https://i.ibb.co/HTdrqKD/Screenshot-225.png",
              width: 800,
              height: 420,
              alt: "Shikhar Gupta",
            },
          ],
        }}
        twitter={{
          handle: "@Nodlehs73",
          site: "@Nodlehs73",
          cardType: "summary_large_image",
        }}
      />
      {children}
    </motion.div>
  );
};

export default Layout;
