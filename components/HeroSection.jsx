'use client'
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const handleBookNow = () => {
    router.push("/book-now");
  };
  return (
    <section
      className="bg-cover bg-center h-screen bg-black/10 "
      style={{ backgroundImage: `url('path-to-background.jpg')` }}
    >
      <div className="container mx-auto px-6 md:px-12 xl:px-32 py-12 h-full">
        <div className="flex flex-wrap items-center h-full ">
          <div className="w-full md:w-1/2  flex flex-col">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
              CLINICAL AI ASSISTANCE
            </h1>
            <p className="text-xl text-white mt-4">
              In the past five years, dozens of surveys and reports indicate an
              unbalanced doctor-to-population ratio. With the motivation of
              assisting doctors, we built an autonomous junior healthcare
              assistant, which serves as the initial point of contact for
              patients.
            </p>
            <button
              onClick={handleBookNow}
              className="mt-8 w-48 bg-white/10 backdrop-blur-lg hover:bg-white/30 hover:scale-110 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 text-xl"
            >
              Book Now
            </button>
          </div>
          <div className="w-full flex md:w-1/2 mt-12 md:mt-0">
            <img
              className="w-full h-auto"
              src="https://pngimg.com/uploads/doctor/doctor_PNG15995.png"
              alt="Description"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
