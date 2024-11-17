
import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";

export default function Home() {
  return (
   
           
         
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid/white[0.04]">
        {/* <h1 className="text 4xl text-center">S.Z Academy</h1> */}
      <HeroSection/>
      <FeaturedCourses/>
      </main>
  );
}
