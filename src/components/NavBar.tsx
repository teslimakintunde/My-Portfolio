"use client";
import React, { useEffect, useState } from "react";
import NavMenu from "./NavMenu";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={` w-full py-1 font-roboto fixed z-50 top-0 left-0 transition-all duration-300   ${
        isScrolled
          ? "bg-royalBlue text-slate-950 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container py-3">
        <NavMenu />
      </nav>
    </header>
  );
};

export default NavBar;
