import { FaStar } from "react-icons/fa";
import { IoCheckmarkCircleOutline, IoPricetagsOutline } from "react-icons/io5";
import { PiCalendarCheckLight } from "react-icons/pi";
import { LiaMedalSolid } from "react-icons/lia";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function About() {
  return (
    <section className="bg-gray-100 flex flex-col-reverse lg:flex-row items-start lg:justify-evenly px-4 py-20 md:px-20 gap-20 lg:gap-28">
      <div className="relative">
        <div className="absolute md:translate-x-1/2 -top-1/6 md:top-1/8 right-6 md:right-0">
          <div className="p-4 space-y-2 bg-white rounded-t-lg justify-items-center">
            <h1 className="text-4xl font-bold">4.9</h1>
            <div className="text-yellow-500 flex items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              <span className="font-medium">2394</span> reviews
            </p>
            <p className="py-1 px-1.5 text-sm rounded-md bg-secondary text-white font-bold">
              Best Choice
            </p>
          </div>
          <div className="w-fit text-sm font-medium text-white py-2 px-7 bg-primary rounded-b-lg">
            <p>TripAdvisor</p>
          </div>
        </div>
        <div className="flex items-center text-nowrap gap-x-4 lg:gap-x-8">
          <div className="text-sm md:text-md flex items-center gap-2 font-medium [writing-mode:vertical-rl] rotate-180 tracking-widest text-gray-300">
            <p className="text-secondary">SINCE 1993 -</p>
            <p className="text-black ">31 YEARS</p>
            <p className="text-gray-400">OF EXPERIENCE</p>
          </div>
          <img
            src="https://moliva.themenix.com/assets/img/about/a2.jpg"
            alt="About Image"
            className="rounded-lg w-80 md:w-[210vh]"
          />
        </div>
      </div>
      <div className="space-y-3 md:space-y-6 lg:max-w-1/2">
        <p className="text-secondary tracking-widest">ABOUT US</p>
        <h1 className="text-2xl md:text-4xl font-medium">
          Nusa Trip Travel Agency
        </h1>
        <p className="text-gray-700">
          Moliva Travel Agency offers unique and memorable tours, providing rich
          experiences in the beautiful country of Moliva. With a professional
          and dedicated team, we are committed to bringing you wonderful, safe,
          and exciting journeys, helping you explore the beauty of the world.
        </p>
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-4">
          <div className="flex items-end gap-x-2">
            <IoCheckmarkCircleOutline size={30} className="text-secondary" />
            <p className="font-medium text-md lg:text-lg text-gray-900">
              Great travel experiences
            </p>
          </div>
          <div className="flex items-end gap-x-2">
            <IoPricetagsOutline size={30} className="text-secondary" />
            <p className="font-medium text-md lg:text-lg">
              Flexible itinerary options
            </p>
          </div>
          <div className="flex items-end gap-x-2">
            <PiCalendarCheckLight size={30} className="text-secondary" />
            <p className="font-medium text-md lg:text-lg">
              Compettive pricing offers
            </p>
          </div>
          <div className="flex items-end gap-x-2">
            <LiaMedalSolid size={30} className="text-secondary" />
            <p className="font-medium text-md lg:text-lg">
              Leading industry reputation
            </p>
          </div>
        </div>
        <button className="mt-10 py-3 px-6 text-white cursor-pointer font-medium tracking-widest bg-secondary rounded-xl flex gap-x-1 ">
          READ MORE
          <IoIosArrowRoundForward size={24} />
        </button>
      </div>
    </section>
  );
}
