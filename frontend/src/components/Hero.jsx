import React from "react";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[300px] md:h-[500px] sm:flex-row  rounded-lg">
      <img
        src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg"
        alt=""
        className="w-full h-full absolute inset-0 object-cover rounded-lg"
      />

      {/* Left side */}
      <div className="relative z-10 bg-black bg-opacity-10 backdrop-blur-sm p-8 px-10 rounded-lg max-w-2xl mx-auto ">
        <div className="text-white text-center">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-white"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed font-bold mb-6">
            Latest Arrivals
          </h1>
          <div className="flex items-center justify-center gap-2">
            <button className="font-semibold text-sm md:text-base bg-white text-black px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
              Shop Now
            </button>
            {/* <p className="w-8 md:w-11 h-[1px] bg-white"></p> */}
          </div>
        </div>
      </div>

      {/* Right Side */}
    </div>
  );
};

export default Hero;
