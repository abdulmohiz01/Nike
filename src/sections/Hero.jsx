import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center gap-10 max-container min-h-screen"
    >
      {/* Left Content */}
      <div className="relative xl:w-2/5 w-full flex flex-col justify-center items-start px-6 sm:px-10 xl:px-0 pt-28">
        <p className="text-lg sm:text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-6 sm:mt-10 font-palanquin font-bold text-[6vw] sm:text-7xl lg:text-8xl leading-tight sm:leading-snug">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-5 sm:pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-base sm:text-lg leading-6 sm:leading-8 mt-4 sm:mt-6 mb-10 sm:mb-14 max-w-xs sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-14 sm:mt-20 gap-6 sm:gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-6 sm:leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="relative flex flex-1 justify-center items-center bg-primary bg-hero bg-cover bg-center xl:min-h-screen max-xl:py-20">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          className="object-contain relative z-10 w-64 sm:w-96"
        />
        <div className="flex gap-4 sm:gap-6 absolute -bottom-10 left-5 sm:left-10 px-4 sm:px-0">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                key={shoe}
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
