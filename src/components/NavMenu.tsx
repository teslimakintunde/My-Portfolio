"use client";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavMenu = () => {
  const [open, setOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement; // Type assertion for target
      if (!target.closest("#mobile-menu") && open) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [open]);
  return (
    <nav className="font-roboto text-white font-medium flex flex-row justify-between items-center">
      <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          alt=""
          width={100}
          height={64}
          className="text-black"
        />
      </Link>
      <ul className="hidden md:flex flex-row items-center">
        <Link
          href={"/"}
          className="hover:bg-blue-400/100 px-2 py-2 hover:rounded-sm transition duration-300"
        >
          <li>Home</li>
        </Link>
        <Link
          href={"/#projects"}
          className="hover:bg-blue-400/100 px-2 py-2 hover:rounded-sm transition duration-300"
        >
          <li>Featured Project</li>
        </Link>
        <Link
          href={"/#services"}
          className="hover:bg-blue-400/100 px-2 py-2 hover:rounded-sm transition duration-300"
        >
          <li>Services</li>
        </Link>
        <Link
          href={"/#testimonials"}
          className="hover:bg-blue-400/100 px-2 py-2 hover:rounded-sm transition duration-300"
        >
          <li>Testimonials</li>
        </Link>
        <Link
          href={"/#contact"}
          className="hover:bg-blue-400/100 px-2 py-2 hover:rounded-sm transition duration-300"
        >
          <li>Contact</li>
        </Link>
        <Link
          href={"/#contact"}
          className="px-4 py-2 bg-bgTwo rounded-md ml-3 hover:bg-white hover:text-royalBlue duration-300 transition"
        >
          <li>Get In Touch</li>
        </Link>
      </ul>

      {/* Mobile Menu Icon */}
      <button
        className={`md:hidden text-3xl cursor-pointer z-[1001] relative border border-bgTwo p-2 transition-colors duration-300 ${
          open ? "text-black" : "text-white"
        }`}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 w-3/4 h-full text-primaryColor bg-bgOne shadow-lg transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 flex flex-col items-center pt-20 gap-6 z-[900]`}
      >
        <Link
          href={"/#hero"}
          onClick={() => setOpen(false)}
          className="px-6 py-3 w-full text-center hover:bg-bgTwo transition duration-300"
        >
          Home
        </Link>
        <Link
          href={"/#projects"}
          onClick={() => setOpen(false)}
          className="px-6 py-3 w-full text-center hover:bg-bgTwo transition duration-300"
        >
          Featured Project
        </Link>
        <Link
          href={"/#services"}
          onClick={() => setOpen(false)}
          className="px-6 py-3 w-full text-center hover:bg-bgTwo transition duration-300"
        >
          Services
        </Link>
        <Link
          href={"/#testimonials"}
          onClick={() => setOpen(false)}
          className="px-6 py-3 w-full text-center hover:bg-bgTwo transition duration-300"
        >
          Testimonials
        </Link>
        <Link
          href={"/#contact"}
          onClick={() => setOpen(false)}
          className="px-6 py-3 w-full text-center hover:bg-bgTwo transition duration-300"
        >
          Contact
        </Link>
        <Link
          href={"/#contact"}
          className="px-4 py-2 bg-bgTwo text-white hover:border-bgTwo hover:border rounded-md ml-3 hover:bg-white hover:text-royalBlue duration-300 transition"
        >
          Get In Touch
        </Link>
      </div>
    </nav>
  );
};

export default NavMenu;
