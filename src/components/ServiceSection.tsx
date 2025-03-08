"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const data = [
  {
    id: 1,
    icon: "/website-development-icon.svg",
    title: "Web Development",
    desc: "As a front-end web developer, I bring extensive experience in creating stunning, user-friendly websites for businessesI leverage the latest front-end technologies, including HTML5, CSS3, jQuery, Sass, Bootstrap, React js, and Next js, to deliver high-quality work with a strong focus on UI/UX and client satisfaction ",
  },
  {
    id: 2,
    icon: "/website-maintenance-icon.svg",
    title: "Website Maintenance",
    desc: "We keep your website in top shape by regularly updating content, optimising speed, and safeguarding against any potential issues And ensure your site runs smoothly,securely, and efficiently.",
  },
  {
    id: 3,
    icon: "/figma-icon.svg",
    title: "Figma/XD Conversion",
    desc: "Your FIGMA, PSD, XD, PNG or JPG file design will be meticulously transformed into into pixel-perfect custom code that functions flawlessly across various devices site tailored to your needs.",
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-bgOne lg:py-[60px] " id="services">
      <div className="container">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.2)}
          className="pt-[50px] font-bold font-Oswald text-[32px] md:text-[50px]  flex items-center justify-center"
        >
          My Quality Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[30px]  gap-5 font-roboto">
          {data.map((item, index) => (
            <motion.div
              variants={fadeIn("up", index * 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              key={item.id}
              className="w-full  h-full flex flex-col gap-5 text-center rounded"
            >
              <article className="h-full hover:bg-bgTwo transition duration-500 bg-bgThree p-[10px] sm:p-[15px] rounded">
                <div className="h-full flex flex-col justify-stretch items-center  bg-white">
                  <span>
                    <Image
                      src={item.icon}
                      width={100}
                      height={100}
                      alt="website-development-icon"
                      className="mt-4"
                    />
                  </span>
                  <div className="p-4">
                    <h3 className="text-[24px] font-bold mt-7 mb-5">
                      {item.title}
                    </h3>
                    <p className="text-textColorTwo text-[16px] sm:text-xl text-center">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
