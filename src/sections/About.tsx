import { FaStar } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { PiCalendarCheckLight } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";
import { LiaMedalSolid } from "react-icons/lia";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function About() {
  return (
    <section className="bg-gray-100 flex items-start justify-evenly p-20 gap-28">
      <div className="relative">
        <div className="absolute translate-x-1/2 top-1/8 right-0">
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
            <p className="py-1 px-1.5 text-sm rounded-md bg-green-600 text-white font-bold">
              Best Choice
            </p>
          </div>
          <div className="w-fit text-sm font-medium text-white py-2 px-7 bg-primary rounded-b-lg">
            <p>TripAdvisor</p>
          </div>
        </div>
        <div className="flex items-center text-nowrap gap-x-8">
          <div className="flex items-center gap-2 font-medium [writing-mode:vertical-rl] rotate-180 tracking-widest text-gray-300">
            <p className="text-green-500">SINCE 1993 -</p>
            <p className="text-black ">31 YEARS</p>
            <p className="text-gray-400">OF EXPERIENCE</p>
          </div>
          <img
            src="https://moliva.themenix.com/assets/img/about/a2.jpg"
            alt="About Image"
            className="rounded-lg w-[210vh]"
          />
        </div>
      </div>
      <div className="space-y-6 max-w-1/2">
        <p className="text-green-500 tracking-widest">ABOUT US</p>
        <h1 className="text-4xl font-medium">Nusa Trip Travel Agency</h1>
        <p className="text-gray-700">
          Moliva Travel Agency offers unique and memorable tours, providing rich
          experiences in the beautiful country of Moliva. With a professional
          and dedicated team, we are committed to bringing you wonderful, safe,
          and exciting journeys, helping you explore the beauty of the world.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="flex items-end gap-x-2">
            <IoCheckmarkCircleOutline size={30} className="text-green-500" />
            <p className="font-medium text-lg text-gray-900">
              Great travel experiences
            </p>
          </div>
          <div className="flex items-end gap-x-2">
            <IoPricetagsOutline size={30} className="text-green-500" />
            <p className="font-medium text-lg">Flexible itinerary options</p>
          </div>
          <div className="flex items-end gap-x-2">
            <PiCalendarCheckLight size={30} className="text-green-500" />
            <p className="font-medium text-lg">Compettive pricing offers</p>
          </div>
          <div className="flex items-end gap-x-2">
            <LiaMedalSolid size={30} className="text-green-500" />
            <p className="font-medium text-lg">Leading industry reputation</p>
          </div>
        </div>
        <button className="mt-10 py-3 px-6 text-white cursor-pointer font-medium tracking-widest bg-green-500 rounded-xl flex gap-x-1 ">
          READ MORE
          <IoIosArrowRoundForward size={24} />
        </button>
      </div>
    </section>
  );
}
