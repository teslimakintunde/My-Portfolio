import React from "react";
import Image from "next/image";

const ServiceComponent = () => {
  return (
    <div className="w-[33%] h-full flex flex-col gap-5 text-center rounded">
      <article className="h-full bg-bgThree p-[30px] rounded">
        <div className="h-full flex flex-col justify-stretch items-center  bg-white">
          <span>
            <Image
              src="/website-development-icon.svg"
              width={100}
              height={100}
              alt="website-development-icon"
              className="mt-4"
            />
          </span>
          <div className="p-4">
            <h3 className="text-[24px] font-bold mt-7 mb-5">Web Development</h3>
            <p className="text-textColorTwo text-xl text-center">
              As a front-end web developer, I bring extensive experience in
              creating stunning, user-friendly websites for businesses I
              leverage the latest front-end technologies, including HTML5, CSS3,
              jQuery, Sass, Bootstrap, React js, and Next js, to deliver
              high-quality work with a strong focus on UI/UX and client
              satisfaction
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ServiceComponent;
