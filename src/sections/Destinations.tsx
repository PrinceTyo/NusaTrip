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
    <section className="p-20 bg-gray-200">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-4">
            <p className="text-green-500 tracking-widest text-lg">
              MANY TOURISTS CHOOSE
            </p>
            <h1 className="text-4xl font-semibold">Top Nusa Trip Tours</h1>
          </div>

          <div className="relative flex items-center gap-2">
            <h1 className="text-3xl font-semibold">+80K</h1>
            <p className="text-gray-700">Tourist have chosen these tours</p>
            <CarouselPrevious className="static translate-x-0 translate-y-0 ms-10" />
            <CarouselNext className="static translate-x-0 translate-y-0" />
          </div>
        </div>
        <CarouselContent className="-ml-1">
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className=" pl-1 lg:basis-1/4">
              <div className="p-1">
                <div className="rounded-lg w-80 bg-white">
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
                      <button className="cursor-pointer p-2 bg-green-500 text-white rounded-full">
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
