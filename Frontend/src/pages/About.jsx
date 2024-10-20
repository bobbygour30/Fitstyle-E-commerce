import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t mx-4 sm:ml-36">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-8 sm:gap-16 mx-4 sm:ml-48">
        <img
          className="w-full sm:max-w-[450px] object-cover"
          src={assets.about_img}
          alt="About Fitstyle"
        />
        <div className="flex flex-col justify-center gap-6 sm:w-2/4 text-gray-600">
          <p>
            Welcome to Fitstyle, where fashion meets individuality. At Fitstyle,
            we believe that clothing is more than just fabric; it's a form of
            self-expression. Our designs blend timeless elegance with modern
            trends, ensuring that every piece not only makes you look good but
            feel confident and empowered. We are committed to sustainability,
            using eco-friendly materials and ethical production processes to
            create fashion that’s as good for the planet as it is for you.
            Whether you're dressing for a casual day out or a special occasion,
            Fitstyle has something for every style and moment. Join us on a
            journey where style meets purpose.
          </p>
          <p>
            At Fitstyle, we take pride in offering carefully curated collections
            that celebrate diversity and creativity. Each garment is crafted
            with attention to detail, from fabric selection to the final stitch,
            ensuring quality that lasts. Our mission is to inspire confidence
            through fashion, empowering you to express your true self. We
            embrace inclusivity, offering a wide range of sizes and styles that
            cater to different body types and personal tastes. Whether you're
            looking for bold statement pieces or timeless classics, Fitstyle is
            your destination for effortless style that speaks volumes.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Fitstyle is to redefine fashion by offering stylish,
            high-quality, and sustainable clothing that empowers individuals to
            express their unique identities. We are committed to ethical
            practices, from sourcing eco-friendly materials to supporting fair
            labor. By blending innovation with timeless design, we aim to create
            garments that not only elevate personal style but also contribute to
            a more conscious and responsible fashion industry. At Fitstyle, our
            goal is to inspire confidence and self-expression, while making a
            positive impact on the world around us.
          </p>
        </div>
      </div>
      <div className="text-xl py-4 ">
        <Title text1={"WHY"} text2={" US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            At Fitstyle, quality is at the heart of everything we create. We use
            premium, sustainably sourced materials to ensure our clothing feels
            as good as it looks. Each piece is crafted with precision, offering
            durability and comfort that lasts, so you can enjoy your wardrobe
            for seasons to come. We believe in creating clothing that stands the
            test of time, both in style and craftsmanship.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            We also prioritize convenience in every step of your shopping
            experience. From easy-to-navigate website features to fast, reliable
            shipping, we make sure that finding and receiving your favorite
            pieces is seamless and stress-free. Our responsive customer service
            team is always here to assist you, ensuring that your shopping
            journey is smooth from start to finish.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            At Fitstyle, exceptional customer service is one of our core
            values. We believe in creating a personalized and enjoyable shopping
            experience for every customer. Our dedicated support team is always
            available to answer questions, offer styling advice, and assist with
            any concerns, ensuring that you feel valued and taken care of at
            every step.
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
