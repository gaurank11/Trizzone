import React from "react";

const Hero1 = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg" // Update the path as per your setup
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold uppercase">
          Good Designs Take Time. <br /> Great Ones Take a Little Longer!
        </h1>
        
        {/* Email Button */}
        <a
          href="mailto:vmehra@trizzone.com?subject=Interested in Updates&body=Hi, I would like to receive updates about Trizzone!"
          className="mt-6 inline-block px-6 py-3 bg-gray-500 hover:bg-gray-700 text-white uppercase text-sm tracking-wide"
        >
          Be the First to Know!
        </a>
      </div>

      {/* Logo */}
      <div className="absolute top-5 left-10">
        <div className="border-2 border-white p-2 text-white uppercase font-bold">
          TRIZZONE
        </div>
      </div>
    </div>
  );
};

export default Hero1;
