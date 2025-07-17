"use client";

import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Services />
      <Contact />
      <footer className="bg-white dark:bg-gray-900  py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Baraka Lukumay. All rights reserved.
        </p>
      </footer>
    </>
  );
}
