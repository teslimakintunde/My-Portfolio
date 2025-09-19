"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-[60px] md:py-[100px]">
      <section className="container text-center">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-[800px] mx-auto"
        >
          <div className="relative w-[200px] h-[200px] mx-auto mb-8">
            <Image
              src="/404-illustration.svg"
              alt="404 Not Found Illustration"
              fill
              sizes="200px"
              className="object-contain"
              priority
            />
          </div>

          <h1
            className={`font-Oswald text-[40px] sm:text-[60px] md:text-[80px] text-primaryColor font-bold tracking-[2px]`}
          >
            Oops! Page Not Found
          </h1>
          <p
            className={`font-roboto text-textColorTwo text-[18px] sm:text-[20px] mt-4 max-w-[60ch] mx-auto`}
          >
            It looks like you’ve wandered off the path. The page you’re looking
            for doesn’t exist or has been moved.
          </p>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link href="/">
              <button
                className="bg-bgTwo text-white px-6 py-3 rounded-md hover:bg-white hover:text-royalBlue transition duration-300 text-[16px] font-medium"
                aria-label="Return to Homepage"
              >
                Back to Homepage
              </button>
            </Link>
            <Link href="/#contact">
              <button
                className="bg-transparent border border-bgTwo text-bgTwo px-6 py-3 rounded-md hover:bg-bgTwo hover:text-white transition duration-300 text-[16px] font-medium"
                aria-label="Contact Me"
              >
                Contact Me
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
