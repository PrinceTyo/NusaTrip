import { IoIosArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Advantages() {
  return (
    <section className="bg-gray-100 flex flex-col-reverse lg:flex-row items-start lg:justify-evenly px-4 py-20 md:px-20 gap-14 lg:gap-34">
      <div className="relative lg:max-w-[40%]">
        <div className="absolute translate-x-1/2 -top-6 lg:top-1/8 right-1/4 lg:-right-5">
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
              Excellent
            </p>
          </div>
          <div className="w-fit text-sm font-medium text-white py-2 px-7 bg-primary rounded-b-lg">
            <p>TripAdvisor</p>
          </div>
        </div>
        <div className="flex items-center text-nowrap gap-x-8">
          <div className="absolute left-6 top-4/5 md:top-[90%] lg:top-8/12 gap-2 font-medium rounded-lg space-y-2 text-center px-2 py-4 w-32 text-wrap bg-secondary text-gray-300">
            <p className="text-white font-semibold text-4xl">+31</p>
            <p className="text-white">YEARS OF EXPERIENCE</p>
          </div>
          <img
            src="https://moliva.themenix.com/assets/img/about/a1.jpg"
            alt="About Image"
            className="rounded-lg md:w-[100vh] lg:w-[210vh] lg:ms-16"
          />
        </div>
      </div>
      <div className="space-y-3 lg:space-y-6 lg:max-w-1/2">
        <p className="text-secondary tracking-widest">GREAT EXPERIENCE</p>
        <h1 className="text-3xl lg:text-4xl font-semibold">Why choose us</h1>
        <p className="text-gray-700">
          We are a leading travel agency in Moliva with many years of
          experience, highly rated and appreciated by tourists.
        </p>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:text-secondary transition duration-200">
              <div className="flex items-center justify-start gap-x-3">
                <FaCheck className="w-5 h-5 lg:w-7 lg:h-7 text-secondary" />
                <h1 className="text-lg lg:text-xl font-semibold group-data-[state=open]:text-secondary">
                  Leading travel agency in Nusa Trip
                </h1>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Top-rated agency in Nusa Trip is renowned for exceptional service
              and unforgettable travel experiences.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:text-secondary transition duration-200">
              <div className="flex items-center justify-start gap-x-3">
                <FaCheck className="w-5 h-5 lg:w-7 lg:h-7 text-secondary" />
                <h1 className="text-lg lg:text-xl font-semibold group-data-[state=open]:text-secondary">
                  Years of experience in tour operations
                </h1>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              With years of expertise, we excel at organizing seamless,
              enjoyable, and memorable tours for every traveler.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:text-secondary transition duration-200">
              <div className="flex items-center justify-start gap-x-3">
                <FaCheck className="w-5 h-5 lg:w-7 lg:h-7 text-secondary" />
                <h1 className="text-lg lg:text-xl font-semibold group-data-[state=open]:text-secondary">
                  Flexible tour package and bookings
                </h1>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              We offer customizable trips with flexible packages and convenient
              booking options tailored to your needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:text-secondary transition duration-200">
              <div className="flex items-center justify-start gap-x-3">
                <FaCheck className="w-5 h-5 lg:w-7 lg:h-7 text-secondary" />
                <h1 className="text-lg lg:text-xl font-semibold group-data-[state=open]:text-secondary">
                  Best prices with attractive Offers
                </h1>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Enjoy unbeatable prices and exclusive offers, ensuring you receive
              great value and memorable vacation experiences.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <button className="mt-10 py-3 px-6 text-white cursor-pointer font-medium tracking-widest bg-secondary rounded-xl flex gap-x-1 ">
          VIEW TOURS
          <IoIosArrowRoundForward size={24} />
        </button>
      </div>
    </section>
  );
}
