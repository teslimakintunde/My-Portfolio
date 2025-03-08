"use client";
import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { questions } from "@/constants/serviceConstants";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { fadeIn } from "../../variant";

const FaqSection = () => {
  const [activeQuestion, setActiveQuetion] = useState<number | null>(null);
  return (
    <section className="bg-bgOne py-[50px] md:py-[100px]" id="faq">
      <motion.h3
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="text-[45px] text-center text-primaryColor"
      >
        FAQs
      </motion.h3>
      <div className="container  p-8 rounded-lg shadow-md">
        {questions.map((ques) => (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            key={ques.id}
            className="mb-4 last:mb-0"
          >
            <button
              className="w-full text-primaryColor font-Oswald lg:text-[2rem] text-left text-xl focus-within:outline-none p-4 rounded-lg flex justify-between items-center"
              onClick={() =>
                setActiveQuetion(activeQuestion === ques.id ? null : ques.id)
              }
            >
              {ques.question}
              {activeQuestion === ques.id ? (
                <FaMinusCircle />
              ) : (
                <FaPlusCircle />
              )}
            </button>
            <AnimatePresence>
              {activeQuestion === ques.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 ml-4 font-roboto "
                >
                  <div className="bg-white p-3">
                    <p className="max-w-[90ch] text-[16px] lg:text-xl text-textColorTwo">
                      {ques.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
