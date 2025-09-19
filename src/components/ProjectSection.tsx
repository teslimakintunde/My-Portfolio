"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";
import DOMPurify from "dompurify";
import { useRouter, useSearchParams } from "next/navigation";

const data = [
  {
    id: 1,
    img: "/fashion-app.webp",
    title: "Fashion Project Management App",
    desc: "This Fashion Project Management App is a full-stack web application designed to help fashion companies track and manage client projects efficiently. Built with <strong class='text-primaryColor underline'>React (Vite)</strong>  for the frontend and <strong class='text-primaryColor underline'>Node.js</strong> for the backend, it uses <strong class='text-primaryColor underline'>Redux Toolkit (RTK)</strong>  and <strong class='text-primaryColor underline'>RTK Query</strong>  for streamlined state management and API interactions. The app allows company users to register, track, and manage client projects, ensuring smooth collaboration and workflow automation.",
    link: "https://fashion-store-app-sigma.vercel.app",
  },
  {
    id: 2,
    img: "/task-management-app.webp",
    title: "Task-Management-App",
    desc: "This Task Management App is a responsive web application built with <strong class='text-primaryColor underline'>React (Vite)</strong> for the frontend and <strong class='text-primaryColor underline'>Node.js (Express)</strong>  for the backend. Unlike traditional Redux-based solutions, it leverages React <strong class='text-primaryColor underline'>Context API</strong> for lightweight global state management, making it ideal for small to medium-sized teams. The app helps users organize, track, and collaborate on tasks efficiently with a clean and intuitive interface.",
    link: "https://task-frontend-tawny.vercel.app",
  },
  {
    id: 3,
    img: "/car-rental.webp",
    title: "Car Rental App",
    desc: "I developed a full-stack car rental app using <strong class='text-primaryColor underline'>Next.js</strong> for the frontend and backend, <strong class='text-primaryColor underline'>Tailwind css</strong> for responsive styling, and <strong class='text-primaryColor underline'>TypeScript</strong> for type safety. <strong class='text-primaryColor underline'>Prisma</strong> served as the <strong class='text-primaryColor underline'>ORM</strong> with <strong class='text-primaryColor underline'>MongoDb</strong> as the database to manage car listings, bookings, and user data.<strong class='text-primaryColor underline'>Auth.js</strong> (NextAuth) handled user authentication, enabling secure login and registration. The app features dynamic routing, search filters, booking management, and a seamless user experience.",
    link: "https://fullstack-ride-app.vercel.app",
  },
  {
    id: 4,
    img: "/blog-app.webp",
    title: "Blog App",
    desc: "I developed a full-stack blog app using <strong class='text-primaryColor underline'>Next.js</strong> for both frontend and backend, <strong class='text-primaryColor underline'>Tailwind CSS</strong> for responsive styling, and <strong class='text-primaryColor underline'>TypeScript</strong>  for type safety. Prisma was used as the ORM with MongoDB as the database to manage posts, users, and comments. <strong class='text-primaryColor underline'>Auth.js</strong> (NextAuth) handled user authentication, supporting email and social logins. The app features dynamic routing, server-side rendering (SSR), and a seamless user experience.",
    link: "https://blog-app-eight-azure.vercel.app",
  },
  {
    id: 5,
    img: "/saas-landing-page.webp",
    title: "Saas landing Page",
    desc: "I designed a SaaS landing page using <strong class='text-primaryColor underline'>Next.js</strong> for fast performance and SEO optimization, <strong class='text-primaryColor underline'>Tailwind CSS</strong> for responsive and modern styling, and <strong class='text-primaryColor underline'>TypeScript</strong> for type safety and maintainability. The page features a clean, user-friendly design with sections like a hero, features, pricing, and a call-to-action, delivering an optimized and scalable experience.",
    link: "https://landing-page-alpha-flame-70.vercel.app/",
  },
  {
    id: 6,
    img: "/digital-product.webp",
    title: "Product landing Page",
    desc: "I designed and developed a digital product landing page using <strong class='text-primaryColor underline'>Next.js</strong> for fast performance and SEO optimization, <strong class='text-primaryColor underline'>Tailwind CSS</strong> for responsive and utility-first styling, and <strong class='text-primaryColor underline'>TypeScript</strong> for type safety and maintainability. The page includes a hero section, product features, testimonials, pricing, and a call-to-action (CTA), all built with a clean and modern design. Tailwind's flexibility and Next.js's static generation ensure a seamless user experience.",
    link: "https://digital-product-landingpage-pink.vercel.app",
  },
];
const ProjectSection = () => {
  const [sanitizedData, setSanitizedData] = useState<typeof data | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  // Get current page from URL query parameter, default to 1
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const projectsPerPage = 4;
  const totalPages = Math.ceil(data.length / projectsPerPage);

  useEffect(() => {
    setSanitizedData(
      data.map((item) => ({
        ...item,
        desc: DOMPurify.sanitize(item.desc),
      }))
    );
  }, []);

  const handleViewMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default button behavior
    const nextPage = currentPage + 1;
    if (nextPage <= totalPages) {
      router.push(`/?page=${nextPage}`, { scroll: false }); // Client-side navigation, no scroll
    }
  };

  const handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default button behavior
    const prevPage = currentPage - 1;
    if (prevPage >= 1) {
      router.push(`/?page=${prevPage}`, { scroll: false }); // Client-side navigation, no scroll
    }
  };

  // Calculate the projects to display based on the current page
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const visibleProjects = sanitizedData?.slice(startIndex, endIndex) || [];

  // Show a fallback until sanitizedData is ready
  if (!sanitizedData) {
    return (
      <section className="container font-roboto bg-white" id="projects">
        <div className="flex flex-col gap-5">
          <div className="py-[30px] sm:py-[40px] md:py-[60px] lg:py-[80px]">
            <h2 className="text-center text-[29px] text-primaryColor font-Oswald lg:text-[45px] font-bold mb-[40px] sm:mb-[50px] md:mb-[60px] lg:mb-[80px]">
              Featured Projects
            </h2>
            <div className="text-center">Loading projects...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container font-roboto bg-white" id="projects">
      <div className="flex flex-col gap-5">
        <div className="py-[30px] sm:py-[40px] md:py-[60px] lg:py-[80px]">
          <div className="mb-[40px] sm:mb-[50px] md:mb-[60px] lg:mb-[80px]">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center text-[29px] text-primaryColor font-Oswald lg:text-[45px] font-bold"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center text-textColorTwo text-[16px] sm:text-[20px] mt-[20px] max-w-[60ch] mx-auto"
            >
              Take a look at what I have done in the past. I will be excited to
              bring your vision into reality as well
            </motion.p>
          </div>
          <div className="grid gap-y-[30px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 mx-auto">
            {visibleProjects.map((item, index) => (
              <motion.div
                variants={fadeIn("up", index * 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                key={item.id}
                className="mb-[30px]"
              >
                <div className="group transition-transform duration-300 hover:-translate-y-3 shadow-md hover:shadow-xl flex h-full flex-col items-center bg-bgOne border border-[rgba(0,0,0,0.1)] rounded-md overflow-hidden">
                  <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full">
                    <Link href={item.link}>
                      <Image
                        src={item.img}
                        alt={`${item.title} screenshot`}
                        fill
                        className="rounded-t-md object-cover"
                      />
                    </Link>
                  </div>
                  <div className="flex p-5 items-start flex-col text-center sm:mt-5 w-full">
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between flex-wrap gap-y-3 flex-row items-center w-full"
                    >
                      <h3 className="font-Oswald text-[24px] font-medium">
                        {item.title}
                      </h3>
                      <span className="font-Oswald flex flex-row items-center gap-2 border border-primaryColor p-1 sm:p-2">
                        Live Demo
                        <HiOutlineExternalLink className="md:text-xl text-[18px]" />
                      </span>
                    </Link>
                    <p
                      className="font-roboto text-[14px] text-left sm:text-[16px] text-textColorTwo mt-3"
                      dangerouslySetInnerHTML={{
                        __html: item.desc,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md transition ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-primaryColor text-white hover:bg-primaryColor/80"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleViewMore}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md transition ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-primaryColor text-white hover:bg-primaryColor/80"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
