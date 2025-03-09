"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const HeroSection = () => {
  return (
    <div className="hero-section" id="hero">
      <div className="image-container hero-section">
        <div className="background-image"></div>
        <div className="gradient-overlay">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="w-full sm:max-w-[800px] lg:max-w-[800px] xl:max-w-[1050px] mt-[150px] lg:mt-[160px]  xl:mt-[200px]"
            >
              <motion.h1
                variants={fadeIn("up", 0.2)}
                className="font-bold font-Oswald text-[28px] sm:text-[40px]
               md:text-[60px] lg:text-[80px] xl:text-[90px] leading-[1.5] lg:leading-[1.3] text-white tracking-[2px]"
              >
                Hi, I’m Tesak, A Skilled Frontend Engineer
              </motion.h1>

              <motion.p
                variants={fadeIn("up", 0.5)}
                className="font-roboto text-white text-[18px]  sm:text-[20px] sm:max-w-[50ch] md:max-w-[55ch] max-w-[60ch] mt-[20px] sm:mt-[30px]"
              >
                I am expert in designing Faster, efficient and SEO-friendly
                websites as well as transforming concept into seamless user
                experiences.
              </motion.p>
              <motion.div
                variants={fadeIn("up", 0.8)}
                className="font-roboto flex flex-col sm:flex-row gap-5 sm:gap-8 mt-[60px] sm:mt-[50px] xl:mt-[40px]"
              >
                <button className="bg-white hover:bg-bgTwo hover:text-white transition duration-300 font-medium px-10 py-3 text-royalBlue rounded-md">
                  Get In Touch
                </button>
                <button className="bg-trasparent hover:bg-bgTwo hover:text-white transition duration-300 border border-white font-medium px-10 py-3 text-white rounded-md">
                  View Projects
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
{
  /* Hi, I’m Tesak, Web Designer And Webflow Developer */
}
{
  /* Transforming Concept Into Seamless User Experiences */
}
{
  /* Hi, I’m Tesak, A Professional Frontend Engineer and web
                developer */
}
