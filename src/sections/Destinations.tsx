import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Separator } from "../components/ui/separator";
import baliImage from "@/assets/destinations/bali.jpg";
import borobudurImage from "@/assets/destinations/borobudur.jpg";
import bromoImage from "@/assets/destinations/bromo.jpg";
import komodoImage from "@/assets/destinations/komodo.jpg";
import rakumImage from "@/assets/destinations/rakum.jpg";
import rampatImage from "@/assets/destinations/rampat.jpg";
import ijenImage from "@/assets/destinations/ijen.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Destinations() {
  return (
    <section
      className="px-4 py-20 md:px-20 bg-linear-to-b from-gray-200 to-gray-100"
      id="destinations"
    >
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
        {/* Bali */}
        <CarouselContent className="-ml-1">
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-80 bg-white">
                <img
                  src={baliImage}
                  alt="Image Destination"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <h1 className="text-xl font-medium">
                    Discovering the beauty and culture of Bali
                  </h1>
                  <div className="flex items-center gap-3">
                    <div className="flex items-end gap-x-1">
                      <CiCalendar size={22} />
                      <p className="text-gray-700">4 days</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <CiLocationOn size={22} />
                      <p className="text-gray-700">5 Destinations</p>
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
                      Rp. 3.599.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-secondary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Komodo Island */}
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-80 bg-white">
                <img
                  src={komodoImage}
                  alt="Image Destination"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <h1 className="text-xl font-medium">
                    Adventure and experience on Komodo Island
                  </h1>
                  <div className="flex items-center gap-3">
                    <div className="flex items-end gap-x-1">
                      <CiCalendar size={22} />
                      <p className="text-gray-700">2 days</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <CiLocationOn size={22} />
                      <p className="text-gray-700">2 Destinations</p>
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
                      Rp. 2.500.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-secondary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Bromo */}
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-80 bg-white">
                <img
                  src={bromoImage}
                  alt="Image Destination"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <h1 className="text-xl font-medium">
                    Climbing and experiencing life in Bromo
                  </h1>
                  <div className="flex items-center gap-3">
                    <div className="flex items-end gap-x-1">
                      <CiCalendar size={22} />
                      <p className="text-gray-700">2 days</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <CiLocationOn size={22} />
                      <p className="text-gray-700">1 Destinations</p>
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
                      Rp. 1.500.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-secondary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Ijen */}
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-80 bg-white">
                <img
                  src={ijenImage}
                  alt="Image Destination"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <h1 className="text-xl font-medium">
                    Witnessing the magical blue fire of Kawah Ijen
                  </h1>
                  <div className="flex items-center gap-3">
                    <div className="flex items-end gap-x-1">
                      <CiCalendar size={22} />
                      <p className="text-gray-700">2 days</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <CiLocationOn size={22} />
                      <p className="text-gray-700">1 Destinations</p>
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
                      Rp. 1.299.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-secondary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Raja Ampat */}
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-80 bg-white">
                <img
                  src={rampatImage}
                  alt="Image Destination"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <h1 className="text-xl font-medium">
                    Exploring the underwater paradise of Raja Ampat
                  </h1>
                  <div className="flex items-center gap-3">
                    <div className="flex items-end gap-x-1">
                      <CiCalendar size={22} />
                      <p className="text-gray-700">3 days</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <CiLocationOn size={22} />
                      <p className="text-gray-700">5 Destinations</p>
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
                      Rp. 4.500.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-secondary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Ranu Kumbolo */}
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-80 bg-white">
                <img
                  src={rakumImage}
                  alt="Image Destination"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <h1 className="text-xl font-medium">
                    Hiking and camping under the stars at Ranu Kumbolo
                  </h1>
                  <div className="flex items-center gap-3">
                    <div className="flex items-end gap-x-1">
                      <CiCalendar size={22} />
                      <p className="text-gray-700">3 days</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <CiLocationOn size={22} />
                      <p className="text-gray-700">2 Destinations</p>
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
                      Rp. 1.799.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-secondary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          {/* Candi Borobudur */}
          <CarouselItem className=" pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-80 bg-white">
                <img
                  src={borobudurImage}
                  alt="Image Destination"
                  className="rounded-t-lg h-70 object-cover w-full"
                />
                <div className="p-6 space-y-4">
                  <h1 className="text-xl font-medium">
                    Exploring the timeless wonder of Borobudur Temple
                  </h1>
                  <div className="flex items-center gap-3">
                    <div className="flex items-end gap-x-1">
                      <CiCalendar size={22} />
                      <p className="text-gray-700">5 days</p>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <CiLocationOn size={22} />
                      <p className="text-gray-700">8 Destinations</p>
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
                      Rp. 5.000.000
                    </h1>
                    <button className="cursor-pointer p-2 bg-secondary text-white rounded-full">
                      <IoIosArrowRoundForward size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
