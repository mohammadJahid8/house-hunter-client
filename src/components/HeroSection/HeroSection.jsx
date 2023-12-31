/* eslint-disable react/no-unescaped-entities */
import homegif from "../../assets/house.gif";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div>
      <section className="">
        <div className="lg:grid max-w-screen-2xl px-4  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 hero-flex">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Every home is a destination
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              The best of Luxury Retreats is now House Hunteroffering the
              world's most extraordinary homes with the highest standard of
              service.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              BOOK NOW
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex justify-end items-start ">
            <img src={homegif} alt="mockup" className="w-[450px] mt-[-55px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
