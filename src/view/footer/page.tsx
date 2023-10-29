import Image from "next/image";
import logo from "../../../public/logo.webp";
import Link from "next/link";
import { FacebookIcon } from "lucide-react";
import { LinkedinIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-around items-start mt-8 md:mt-16 mx-4 md:mx-[15%]">
      <div className="space-y-8 md:w-1/3">
        <div className="text-center md:text-left">
          <Image src={logo} alt="logo img" width={200} height={100} />
        </div>
        <div className=" md:text-left">
          <p className="text-gray-500 w-full md:w-[40%]">
            Small, artisan label that offers a thoughtfully curated collection
            of high-quality everyday essentials made.
          </p>
        </div>
        <div className="flex justify-start mt-3 space-x-3">
          <div>
            <Link href="mailto:your-email@gmail.com">
              <div className="h-14 w-14 rounded-xl bg-gray-300 flex justify-center items-center">
                <FacebookIcon className="h-10 w-10 " />
              </div>
            </Link>
          </div>
          <div>
            <Link href="mailto:your-email@gmail.com">
              <div className="h-14 w-14 rounded-xl bg-gray-300 flex justify-center items-center">
                <LinkedinIcon className="h-10 w-10" />
              </div>
            </Link>
          </div>
          <div>
            <Link href="mailto:your-email@gmail.com">
              <div className="h-14 w-14 rounded-xl bg-gray-300 flex items-center justify-center">
                <TwitterIcon className="h-10 w-10" />
              </div>
            </Link>
          </div>
        </div>
      </div>

<div className="flex gap-10 max-lg:flex-col">


      <div className="mt-8 md:mt-0 md:w-1/4">
        <h2 className="text-2xl font-bold text-[#212121] mb-4">Company</h2>
        <ul className="text-xl text-gray-500 space-y-4">
          <li>About Terms of Use</li>
          <li>Privacy Policy</li>
          <li>How it Works</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="mt-8 md:mt-0 md:w-1/4">
        <h2 className="text-2xl font-bold text-[#212121] mb-4">Support</h2>
        <ul className="text-xl text-gray-500 space-y-4">
          <li>Support Carrer</li>
          <li>24h Service</li>
          <li>Quick Chat</li>
        </ul>
      </div>

      <div className="mt-8 md:mt-0 md:w-1/4">
        <h2 className="text-2xl font-bold text-[#212121]">Contact</h2>
        <ul className="text-xl text-gray-500 space-y-4">
          <li>Whatsapp</li>
          <li>Support 24h</li>
        </ul>
      </div>
    </div>
    </div>
 <hr className="h-1 my-3"/>

    <div className="flex flex-col md:flex-row justify-around text-center mt-8 md:mt-10 mb-9">
      <div className="text-xl text-gray-500">
        Copyright © 2022 Dine Market
      </div>
      <div className="text-xl text-gray-500 mt-4 md:mt-0">
        Design by.{" "}
        <span className="font-semibold text-black text-2xl">
          Weird Design Studio
        </span>
      </div>
      <div className="text-xl text-gray-500 mt-4 md:mt-0">
        Code by.{" "}
        <span className="font-semibold text-black text-2xl">
          hassan-ak on GitHub
        </span>
      </div>
    </div>
  </>
  );
};

export default Footer;
