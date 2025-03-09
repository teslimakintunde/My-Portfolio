"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { fadeIn } from "../../variant";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, ExampleCorp",
    message:
      "He responded to messages and completed work very quickly. She understood the nuances of our requests and accurately built our website based on provided designs. Highly recommend!",
    image: "/testimonial-image.svg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Marketing Director",
    message:
      "The Lottie animations are smooth and minimalist, just as I needed them to be. He followed my instructions clearly and created exactly what I wanted. I look forward to working with him on other projects as well.",
    image: "/testimonial-image9.svg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "Freelancer",
    message:
      "Tesak did a great job implementing our design into Webflow. Communication was fast and easy, and he was ready to go the extra mile to make sure everything is properly implemented. Happy to work with him again in the future!",
    image: "/testimonial-image2.svg",
  },
  {
    id: 4,
    name: "Michael Johnson",
    position: "Freelancer",
    message:
      "Tesak did a great job implementing our design into Webflow. Communication was fast and easy, and he was ready to go the extra mile to make sure everything is properly implemented. Happy to work with him again in the future!",
    image: "/testimonial-image3.svg",
  },
  {
    id: 5,
    name: "Michael Johnson",
    position: "Freelancer",
    message:
      "Tesak did a great job implementing our design into Webflow. Communication was fast and easy, and he was ready to go the extra mile to make sure everything is properly implemented. Happy to work with him again in the future!",
    image: "/testimonial-image4.svg",
  },
];

const TestimonialSection = () => {
  return (
    <section
      className="py-[30px] sm:py-[40px] md:py-[60px] bg-white"
      id="testimonials"
    >
      <div className="container mx-auto text-center">
        <div className="max-w-[600px] mx-auto">
          <motion.span
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="font-roboto text-textColorTwo text-[20px]"
          >
            Testimonials
          </motion.span>
          <motion.h3
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="text-[24px] sm:text-[30px] md:text-3xl lg:leading-normal font-Oswald lg:text-[45px] font-bold text-gray-800 mb-6"
          >
            My Clients Experience is What Inspires Me to do More
          </motion.h3>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex justify-stretch py-10"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{ delay: 5000 }}
              loop={true}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 }, // Small screens
                768: { slidesPerView: 2, spaceBetween: 20 }, // Medium screens
                1024: { slidesPerView: 3, spaceBetween: 30 }, // Large screens
              }}
              className=""
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white h-full border  p-6  shadow-lg rounded-lg flex flex-col items-center"
                  >
                    <Image
                      src={testimonial.image}
                      alt=""
                      width={70}
                      height={70}
                      className="rounded-full border"
                    />
                    <div className="mt-5">
                      <p className="text-[16px] text-textColorTwo font-roboto mb-4">
                        &ldquo;{testimonial.message}&rdquo;
                      </p>
                      <h3 className="text-xl font-Oswald font-semibold">
                        {testimonial.name}
                      </h3>
                      <span className="text-gray-500 text-sm">
                        {testimonial.position}
                      </span>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Navigation Buttons */}
          {/* <div className="flex justify-between right-[50%]    items-center border border-black absolute -bottom-9">
            <button className="swiper-button-prev h-[80] w-[80] bottom-0 rounded-full shrink-0 bg-gray-800 text-white p-7 flex items-center justify-center hover:bg-gray-700 transition">
              <AiOutlineRight size={20} />
            </button>
            <button className="swiper-button-next h-[80] w-[80] bg-gray-800  text-white p-7 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
              <AiOutlineLeft className="text-white text-2xl sm:text-xl md:text-2xl lg:text-3xl sm:text-red-500" />
            </button>
          </div> */}
          {/* <div className="flex justify-center items-center gap-10 mt-6 absolute bottom-[-70px] w-full">
            <button className="swiper-button-prev custom-nav-btn"></button>
            <button className="swiper-button-next custom-nav-btn"></button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
