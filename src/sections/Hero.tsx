import { IoIosArrowRoundForward } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex justify-center items-center text-white"
      style={{
        backgroundImage: `url(https://moliva.themenix.com/assets/img/hero/h1.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="z-10 max-w-7xl h-screen flex justify-between">
        <div className="flex items-center mt-10">
          <div className="space-y-4 ">
            <p className="text-md tracking-widest font-normal">
              EXPLORE NUSA TRIP
            </p>
            <h1 className="text-6xl font-medium leading-tight">
              Enjoy the beautiful and romantic nature
            </h1>
            <div>
              <button className="flex items-center gap-x-1 mt-10 border bg-transparent text-white hover:bg-white hover:text-black transition duration-300 px-10 py-2.5 rounded-lg tracking-widest">
                EXPLORE <IoIosArrowRoundForward size={22} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-end">
          <div className="bg-gray-200 p-6 rounded-tl-lg">
            <div className="flex items-center bg-white px-4 py-2.5 rounded-lg shadow-lg">
              <SlLocationPin size={19} className="text-gray-600" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="text-black ms-4 w-96 focus:none outline-none"
              />
            </div>
          </div>
          <div className="bg-green-600 p-7.5 rounded-tr-lg cursor-pointer">
            <FiSearch size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}
