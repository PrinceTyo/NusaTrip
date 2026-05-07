import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Separator } from "../components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Destinations() {
  return (
    <section className="px-4 py-20 md:px-20 bg-gray-200">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div className="space-y-2 md:space-y-4">
            <p className="text-secondary tracking-widest text-md md:text-lg">
              MANY TOURISTS CHOOSE
            </p>
            <h1 className="text-2xl md:text-4xl font-semibold">
              Top Nusa Trip Tours
            </h1>
          </div>

          <div className="relative flex flex-col md:flex-col-reverse items-start md:items-end lg:flex-row lg:items-center gap-2 mt-6 lg:mt-0">
            <div className="flex items-center gap-x-2">
              <h1 className="text-3xl font-semibold">+80K</h1>
              <p className="text-gray-700">Tourist have chosen these tours</p>
            </div>
            <div className="flex items-center gap-x-1">
              <CarouselPrevious className="static translate-x-0 translate-y-0 md:ms-10" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </div>
        </div>
        <CarouselContent className="-ml-1">
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem
              key={index}
              className=" pl-1 md:basis-1/2 lg:basis-1/4"
            >
              <div className="p-1">
                <div className="rounded-lg w-full md:w-80 bg-white">
                  <img
                    src="https://moliva.themenix.com/assets/img/tours/t1.jpg"
                    alt="Image Destination"
                    className="rounded-t-lg"
                  />
                  <div className="p-6 space-y-4">
                    <h1 className="text-xl font-medium">
                      Climbing and experiencing life in Bromo
                    </h1>
                    <div className="flex items-center gap-3">
                      <div className="flex items-end gap-x-1">
                        <CiCalendar size={22} />
                        <p className="text-gray-700">3 days</p>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <CiLocationOn size={22} />
                        <p className="text-gray-700">3 Destinations</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Separator />
                      <div className="flex items-center">
                        <p className="font-medium me-1">4.9</p>
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <p className="ms-2 text-gray-500">(231 reviews)</p>
                      </div>
                      <Separator />
                    </div>
                    <div className="flex items-center justify-between">
                      <h1 className="text-2xl font-bold text-gray-800">
                        Rp. 1.000.000
                      </h1>
                      <button className="cursor-pointer p-2 bg-secondary text-white rounded-full">
                        <IoIosArrowRoundForward size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
