import { IoIosArrowRoundForward } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
import heroImage from "@/assets/hero.jpg";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex justify-center items-center px-0 lg:px-20 text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="z-10 max-w-md px-5 lg:px-0 md:max-w-7xl h-screen flex flex-col lg:flex-row justify-center lg:justify-between">
        <div className="flex items-center justify-center h-full">
          <div className="space-y-4 flex flex-col items-center lg:items-start justify-center lg:justify-start">
            <p className="text-lg tracking-widest font-normal">
              EXPLORE NUSA TRIP
            </p>
            <h1 className="text-4xl md:text-6xl font-medium text-center lg:text-start leading-tight">
              Enjoy the beautiful and romantic nature
            </h1>
            <div>
              <a href="#destinations">
                <button className="flex items-center gap-x-1 mt-10 border bg-transparent text-white hover:bg-white hover:text-black transition duration-300 px-10 py-2.5 rounded-lg tracking-widest">
                  EXPLORE <IoIosArrowRoundForward size={22} />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-center lg:justify-end">
          <div className="bg-gray-200 p-4 lg:p-6 rounded-tl-lg">
            <div className="flex items-center bg-white px-4 py-2.5 rounded-lg shadow-lg">
              <SlLocationPin size={19} className="text-gray-600" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="text-black ms-2 md:ms-4 w-40 md:w-96 focus:none outline-none"
              />
            </div>
          </div>
          <div className="bg-secondary p-5.5 lg:p-7.5 rounded-tr-lg cursor-pointer">
            <FiSearch size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}
