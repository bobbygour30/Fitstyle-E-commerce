import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-18">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl">Our Store</p>
          <p className="text-gray-500">
            123 Anywhere St. <br />
            City , ST - 12345
          </p>
          <p className="text-gray-500">
            Tel : +1 212-344-1230 <br />
            email: constact@fitstyle.com
          </p>
          <p className="text-gray-600 font-semibold text-xl">Careers at FitStyle</p>
          <p className="text-gray-500">Learn more about our teams and job opening.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
      <div className="mt-28">
      <NewsLetterBox />
      </div>
    </div>
  );
};

export default Contact;
