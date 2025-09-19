"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { fadeIn } from "../../variant";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    if (status === "Message sent successfully") {
      const timer = setTimeout(() => {
        setStatus("");
      }, 50000); // 5 seconds

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [status]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      className="container py-[30px] sm:py-[40px] md:py-[100px] bg-white"
      id="contact"
    >
      <div className="max-w-[800px] mx-auto text-center">
        <motion.h3
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="text-[26px] md:text-[40px] text-primaryColor"
        >
          Let&apos;s Work Together
        </motion.h3>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className="font-roboto text-[18px] sm:text-[20px] mt-5 sm:mt-7"
        >
          Let&apos;s talk about your project.
        </motion.p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="max-w-[800px] mt-[30px] sm:mt-[60px] mx-auto flex flex-col font-roboto text-primaryColor"
        >
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          >
            <label htmlFor="name" className="text-[20px] sm:text-[24px] mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border focus:outline-primaryColor w-full mb-7"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          >
            <label htmlFor="email" className="text-[20px] sm:text-[24px] mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border focus:outline-primaryColor w-full mb-7"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          >
            <label
              htmlFor="message"
              className="text-[20px] sm:text-[24px] mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="h-[200px] p-4 sm:h-[300px] border w-full"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-5">
              <button className="bg-bgTwo flex shrink-0 text-white sm:text-[15px] md:text-[15px] font-medium font-roboto px-5 py-3 rounded-md mt-5">
                Submit
              </button>
              {status && (
                <div
                  className={`mt-4 flex items-center justify-center gap-2 text-[16px] sm:text-[18px] font-medium ${
                    status === "Message sent successfully"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status === "Message sent successfully" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-12 h-12 text-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm10.97-2.28a.75.75 0 00-1.06 0L9 12.88l-1.72-1.72a.75.75 0 10-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l3.75-3.75a.75.75 0 000-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {status}
                </div>
              )}
            </div>
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
