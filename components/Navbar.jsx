"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className=" shadow-lg  w-full z-50 backdrop-filter backdrop-blur-lg rounded-e-lg bg-black/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="#" className="flex items-center text-white py-4 px-2">
            <Image
              src="https://clinicalaiassistance.com/img/new_logo.png"
              alt="Logo"
              className="h-12 w-10 mr-2"
              width={100}
              height={100}
            />
            <p className="text-2xl font-bold ">Clinical AI Assistance</p>
          </Link>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/why-we-started"
              className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
            >
              Why We Started
            </Link>
            <Link
              href="/swaasthyasathi"
              className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
            >
              SwaasthyaSathi
            </Link>
            <Link
              href=""
              className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
            >
              Services
            </Link>
            <Link
              href=""
              className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
            >
              News
            </Link>
            <Link
              href=""
              className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
            >
              Our Team
            </Link>
            <Link
              href="/get-started"
              className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
            >
              Getting Started
            </Link>
          </div>

          {isMobileMenuOpen && (
            <div className="mt-6 md:hidden absolute top-0 left-0  min-h-screen w-3/4 z-50 flex flex-col p-4 backdrop-filter bg-gradient-to-r from-sky-900 to-sky-950">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <svg
                  className="w-6 h-6 mb-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              {/* ... Mobile Nav Items ... */}
              <Link
                href=""
                className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
              >
                Home
              </Link>
              <Link
                href=""
                className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
              >
                Why We Started
              </Link>
              <Link
                href=""
                className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
              >
                SwaasthyaSathi
              </Link>
              <Link
                href=""
                className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
              >
                Services
              </Link>
              <Link
                href=""
                className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
              >
                News
              </Link>
              <Link
                href=""
                className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
              >
                Our Team
              </Link>{" "}
              <Link
                href=""
                className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
              >
                Getting Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
