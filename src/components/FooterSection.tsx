"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { menuLinks } from "@/constants/serviceConstants";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const FooterSection = () => {
  return (
    <footer className="bg-primaryColor py-[60px] md:py-[100px]">
      <div className="container">
        <div className="flex flex-col sm:flex-row">
          <motion.div
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="-mt-5"
          >
            <motion.div variants={fadeIn("up", 0.2)}>
              <Link href={"/"}>
                <Image src={"/logo.svg"} width={150} height={150} alt="logo" />
              </Link>
            </motion.div>
            {/* <div className="flex flex-row gap-2 my-5">
              <Link href={"/"}>
                <Image
                  src={"/linkedin-icon.svg"}
                  width={30}
                  height={30}
                  alt="linkedin"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src={"/facebook-icon.svg"}
                  width={30}
                  height={30}
                  alt="linkedin"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src={"/tweeter-icon.svg"}
                  width={30}
                  height={30}
                  alt="linkedin"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src={"/linkedin.svg"}
                  width={30}
                  height={30}
                  alt="linkedin"
                />
              </Link>
            </div> */}
            {/* Social Icons Appear One by One */}
            <div className="flex flex-row gap-2 my-5">
              {[
                "linkedin-icon",
                "facebook-icon",
                "tweeter-icon",
                "linkedin",
              ].map((icon, index) => (
                <motion.div
                  key={icon}
                  variants={fadeIn("up", 0.3 + index * 0.1)}
                >
                  <Link href={"/"}>
                    <Image
                      src={`/${icon}.svg`}
                      width={30}
                      height={30}
                      alt={icon}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeIn("up", 0.6)} className="">
              <button className="bg-bgTwo flex shrink-0 text-white sm:text-[12px] md:text-[15px] font-medium font-roboto px-5 py-3 rounded-md mt-5 hover:bg-white hover:text-royalBlue transition duration-300 mb-[20px]">
                Get In Touch
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="ml-auto w-full"
          >
            <div className=" text-white font-roboto gap-y-5 flex flex-wrap sm:justify-end   ">
              {menuLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  variants={fadeIn("up", 0.4 + index * 0.1)}
                >
                  <Link
                    href={link.url}
                    className="font-medium text-base md:text-[18px] mr-5 mt-5 hover:text-bgTwo transition duration-300 "
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}

            <motion.div className="text-white flex sm:justify-end">
              <motion.div
                variants={fadeIn("up", 0.7)}
                className="flex flex-col sm:items-end"
              >
                <p className="font-Oswald text-[24px] font-medium text-left mt-5">
                  Reach out via email
                </p>
                <Link href={"/"} className="underline mt-2 mb-6">
                  akinmuyiwateslim@gmail.com
                </Link>
                <span className="text-opacity-65 sm:text-right  text-white">
                  © tesakglobal® 2026. All rights reserved.
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
