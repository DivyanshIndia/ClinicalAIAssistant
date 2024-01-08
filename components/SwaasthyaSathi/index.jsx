"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SwasthyaSathi = () => {
  const router = useRouter();
  const handleBookNow = () => {
    router.push("/book-now");
  };

  return (
    <div className="text-white m-5 mb-10 md:mb-48">
      <h2 className="md:text-4xl text-2xl font-bold pb-4 text-center md:pt-10">
        SwasthyaSathi : An AI based Clinical Assistant
      </h2>
      <p className="md:text-xl  md:px-24">
        The assistant aids doctors in conducting symptom investigations and
        diagnosing diseases. It is accessible for clinicians and healthcare
        professionals only. If you or your healthcare team are interested in
        testing and implementing the assistant, please contact us.
      </p>
      <div className="text-center">
        <button
          onClick={handleBookNow}
          className="mt-8 w-48  bg-white/10 backdrop-blur-lg hover:bg-white/30 hover:scale-110 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 text-xl"
        >
          Book Now
        </button>
      </div>
      <div className="md:m-5 mt-5 md:p-20 md:pb-0 flex justify-center">
        <Image
          src="https://clinicalaiassistance.com/img/CAB.svg"
          alt="CAB"
          className="rounded-lg"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default SwasthyaSathi;
