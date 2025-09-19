"use client";
import React from "react";
import Image from "next/image";
import { fadeIn } from "../../variant";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    num: "01",
    icon: "/quality-icon.svg",
    title: "Quality Website and Delopment",
    desc: "Stunning websites that keep visitors connectedwith your brand and help your business grow.",
  },
  {
    id: 2,
    num: "02",
    icon: "/customer-support-icon.svg",
    title: "Great Support",
    desc: "Unlimited support, troubleshooting,and maintenance after websitecompletion.",
  },
  {
    id: 3,
    num: "03",
    icon: "/speed-and-efficiency-icon.svg",
    title: "Quality Website and Delopment",
    desc: "With experience and expertisein Webflow, I build quickly and efficiently, ensuringclients 'projects are completed on time and on budget.",
  },
];

const HireMeSection = () => {
  return (
    <section className="container py-[60px] lg:py-[80px] bg-white">
      <div className="mb-[60px] lg:mb-[80px]">
        <motion.h3
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-center text-[29px] text-primaryColor font-Oswald lg:text-[45px] font-bold"
        >
          Why You Should Hire Me
        </motion.h3>
      </div>
      <div>
        <div className="grid gap-y-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mx-[15px]">
          {data.map((item, index) => (
            <motion.div
              variants={fadeIn("up", index * 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              key={item.id}
              className="px-[15px] mb-[30px]"
            >
              <div className="group transition-transform duration-300 hover:-translate-y-3 shadow-md hover:shadow-xl flex h-full flex-col items-center p-[30px] bg-white border border-[rgba(0, 0, 0, 0.1)] relative">
                <div>
                  <Image
                    src={item.icon}
                    alt="speed and efficiency icon"
                    width={80} // Fallback width
                    height={80} // Fallback height
                    sizes="(max-width: 640px) 60px, (max-width: 1024px) 70px, 80px" // Responsive sizes
                    className="w-[60px] sm:w-[70px] lg:w-[80px] h-auto" // Responsive width
                    style={{ objectFit: "contain" }} // Maintain aspect ratio
                  />
                </div>
                <div className="flex items-center flex-col">
                  <h3 className="font-Oswald text-[24px] text-center ">
                    {item.title}
                  </h3>
                  <p className="font-roboto text-[16px] sm:text-[18px] text-textColorTwo text-center mt-5">
                    {item.desc}
                  </p>
                </div>
                <p className="group-hover:text-bgTwo transition-colors duration-300 font-Abril_Fatface text-[80px] absolute text-[#f2f2f2] left-2 -top-16">
                  {item.num}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireMeSection;
