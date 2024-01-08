import Image from "next/image";
import Link from "next/link";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="border-t-2 rounded-md shadow-md absolute bottom-50 w-full text-white py-3 text-center bg-black/30 ">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="  mb-2">Clinical AI Assistance Pvt. Ltd.</h3>
          <p>All Rights Reserved @2023</p>
          <Link href="/terms" className="text-blue-400 hover:text-blue-600">
            <>Terms & Policy</>
          </Link>
        </div>

        {/* Subscription Form */}
        <div className=" flex  flex-col items-center">
          <h3 className=" mb-2">Subscribe to get important updates</h3>
          <input
            type="email"
            placeholder="Enter Email"
            className="p-2 rounded-md w-full text-black outline-none"
          />
          <button className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md text-white  w-full">
            Subscribe
          </button>
        </div>

        {/* Careers and Follow Us */}
        <div>
          <h3 className=" font-bold mb-2">Careers</h3>
          {/* Add links for careers */}
          <h3 className=" font-bold mb-2 mt-4">Follow Us</h3>
          <div className="flex gap-3 justify-center">
            <GrInstagram className=" text-2xl hover:text-blue-500 cursor-pointer" />
            <GrLinkedin className=" text-2xl hover:text-blue-700 cursor-pointer" />
            <GrTwitter className=" text-2xl hover:text-blue-400 cursor-pointer" />
            <GrFacebookOption className="  text-2xl hover:text-blue-600 cursor-pointer" />
          </div>

          {/* Add social media links */}
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="  mb-2">Contact Us</h3>
          <div className="flex flex-col">
            <small>Clinical AI Assistance Pvt. Ltd.</small>
            <small>FIST, IIT Patna, Block 9, R-503</small>
            <small>Patna, Bihar, 801106 India</small>
            <samll>Email: info@clinicalaiassistance.com</samll>
            <small>Mob: +91 9123979259</small>
          </div>
        </div>

        {/* Supported By */}
        <div className="text-center">
          <h3 className=" mb-2">Supported By</h3>
          {/* Add supporter logos or names here */}
          <div className="flex md:flex-row flex-col gap-4 items-center">
            <Image
              src="https://clinicalaiassistance.com/img/Microsoft.jpeg"
              className="rounded-lg"
              width={150}
              height={150}
              alt="microsoft"
            />
            <Image
              src="https://clinicalaiassistance.com/img/fist2.png"
              className="rounded-lg"
              width={150}
              height={100}
              alt="fist"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
