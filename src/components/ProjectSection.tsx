// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../variant";
// import { HiOutlineExternalLink } from "react-icons/hi";
// import Link from "next/link";

// const data = [
//   {
//     id: 1,
//     img: "/car-rental.png",
//     title: "Car Rental App",
//     desc: "I developed a full-stack car rental app using Next.jsfor the frontend and backend, Tailwind CSS for responsive styling, and TypeScript for type safety. Prisma served as the ORM with MongoDB as the database to manage car listings, bookings, and user data.Auth.js (NextAuth) handled user authentication, enabling secure login and registration. The app features dynamic routing, search filters, booking management, and a seamless user experience.",
//     link: "https://fullstack-ride-app.vercel.app",
//   },
//   {
//     id: 2,
//     img: "/blog-app.png",
//     title: "Blog App",
//     desc: "I developed a full-stack blog app using Next.js for both frontend and backend, Tailwind CSS for responsive styling, and TypeScript for type safety. Prisma was used as the ORM with MongoDB as the database to manage posts, users, and comments. Auth.js (NextAuth) handled user authentication, supporting email and social logins. The app features dynamic routing, server-side rendering (SSR), and a seamless user experience.",
//     link: "https://blog-app-eight-azure.vercel.app",
//   },
//   {
//     id: 3, // Fixed duplicate ID
//     img: "/saas-landing-page.png",
//     title: "Saas landing Page",
//     desc: "I designed a SaaS landing page with, Tailwind CSS, and TypeScript for a fast, responsive, and type-safe experience. Use Tailwind for styling, TypeScript for safety, and Next.js for optimization. Include sections like hero, features, pricing, and a CTA. Deploy on Vercel for scalability.",
//     link: "https://landing-page-alpha-flame-70.vercel.app/",
//   },
//   {
//     id: 4, // Fixed duplicate ID
//     img: "/digital-product.png",
//     title: "Product landing Page",
//     desc: "I designed and developed a digital product landing page using Next.js for fast performance and SEO optimization, Tailwind CSS for responsive and utility-first styling, and TypeScript for type safety and maintainability. The page includes a hero section, product features, testimonials, pricing, and a call-to-action (CTA), all built with a clean and modern design. Tailwind's flexibility and Next.js's static generation ensure a seamless user experience.",
//     link: "https://digital-product-landingpage-pink.vercel.app",
//   },
// ];

// const ProjectSection = () => {
//   return (
//     <section className="container font-roboto bg-white" id="projects">
//       <div className="flex flex-col gap-5">
//         <div className="py-[30px] sm:py-[40px] md:py-[60px] lg:py-[80px]">
//           <motion.h2
//             variants={fadeIn("up", 0.2)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="text-center text-[29px] text-primaryColor font-Oswald lg:text-[45px] font-bold mb-[40px] sm:mb-[50px] md:mb-[60px] lg:mb-[80px]"
//           >
//             Featured Projects
//           </motion.h2>
//           <div className="grid gap-y-[30px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 mx-auto">
//             {data.map((item, index) => (
//               <motion.div
//                 variants={fadeIn("up", index * 0.4)}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 key={item.id} // Unique key based on id
//                 className="mb-[30px]"
//               >
//                 <div className="group transition-transform duration-300 hover:-translate-y-3 shadow-md hover:shadow-xl flex h-full flex-col items-center bg-bgOne border border-[rgba(0,0,0,0.1)] rounded-md overflow-hidden">
//                   <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full">
//                     <Image
//                       src={item.img}
//                       alt={`${item.title} screenshot`}
//                       fill
//                       className="rounded-t-md "
//                     />
//                   </div>
//                   <div className="flex p-5 items-start flex-col text-center sm:mt-5">
//                     <Link
//                       href={`${item.link}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex justify-between flex-wrap gap-y-3 flex-row items-center w-full"
//                     >
//                       <h3 className="font-Oswald text-[24px] font-medium">
//                         {item.title}
//                       </h3>
//                       <span className="font-Oswald flex flex-row items-center gap-2 border border-primaryColor p-1 sm:p-2">
//                         Live Demo
//                         <HiOutlineExternalLink className="md:text-xl text-[18px]" />
//                       </span>
//                     </Link>
//                     <p className="font-roboto text-[14px] text-left sm:text-[16px] text-textColorTwo mt-3">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectSection;
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";
import DOMPurify from "dompurify";

const data = [
  {
    id: 1,
    img: "/car-rental.png",
    title: "Car Rental App",
    desc: "I developed a full-stack car rental app using <strong class='text-primaryColor underline'>Next.js</strong> for the frontend and backend, <strong class='text-primaryColor underline'>Tailwind css</strong> for responsive styling, and <strong class='text-primaryColor underline'>TypeScript</strong> for type safety. <strong class='text-primaryColor underline'>Prisma</strong> served as the <strong class='text-primaryColor underline'>ORM</strong> with <strong class='text-primaryColor underline'>MongoDb</strong> as the database to manage car listings, bookings, and user data.<strong class='text-primaryColor underline'>Auth.js</strong> (NextAuth) handled user authentication, enabling secure login and registration. The app features dynamic routing, search filters, booking management, and a seamless user experience.",
    link: "https://fullstack-ride-app.vercel.app",
  },
  {
    id: 2,
    img: "/blog-app.png",
    title: "Blog App",
    desc: "I developed a full-stack blog app using <strong class='text-primaryColor underline'>Next.js</strong> for both frontend and backend, <strong class='text-primaryColor underline'>Tailwind CSS</strong> for responsive styling, and <strong class='text-primaryColor underline'>TypeScript</strong>  for type safety. Prisma was used as the ORM with MongoDB as the database to manage posts, users, and comments. <strong class='text-primaryColor underline'>Auth.js</strong> (NextAuth) handled user authentication, supporting email and social logins. The app features dynamic routing, server-side rendering (SSR), and a seamless user experience.",
    link: "https://blog-app-eight-azure.vercel.app",
  },
  {
    id: 3, // Fixed duplicate ID
    img: "/saas-landing-page.png",
    title: "Saas landing Page",
    desc: "I designed a SaaS landing page using <strong class='text-primaryColor underline'>Next.js</strong> for fast performance and SEO optimization, <strong class='text-primaryColor underline'>Tailwind CSS</strong> for responsive and modern styling, and <strong class='text-primaryColor underline'>TypeScript</strong> for type safety and maintainability. The page features a clean, user-friendly design with sections like a hero, features, pricing, and a call-to-action, delivering an optimized and scalable experience.",
    link: "https://landing-page-alpha-flame-70.vercel.app/",
  },
  {
    id: 4, // Fixed duplicate ID
    img: "/digital-product.png",
    title: "Product landing Page",
    desc: "I designed and developed a digital product landing page using <strong class='text-primaryColor underline'>Next.js</strong> for fast performance and SEO optimization, <strong class='text-primaryColor underline'>Tailwind CSS</strong> for responsive and utility-first styling, and <strong class='text-primaryColor underline'>TypeScript</strong> for type safety and maintainability. The page includes a hero section, product features, testimonials, pricing, and a call-to-action (CTA), all built with a clean and modern design. Tailwind's flexibility and Next.js's static generation ensure a seamless user experience.",
    link: "https://digital-product-landingpage-pink.vercel.app",
  },
];
const ProjectSection = () => {
  const [sanitizedData, setSanitizedData] = useState<typeof data | null>(null);

  useEffect(() => {
    // Sanitize data only on client-side after mount
    setSanitizedData(
      data.map((item) => ({
        ...item,
        desc: DOMPurify.sanitize(item.desc),
      }))
    );
  }, []);

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
              Take a look at what i have done in the past. I will be excited to
              bring your vision into reality as well
            </motion.p>
          </div>
          <div className="grid gap-y-[30px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 mx-auto">
            {data.map((item, index) => (
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
                        className="rounded-t-md"
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
                        __html: DOMPurify.sanitize(item.desc),
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
