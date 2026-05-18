import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";
import footerImage from "../assets/footer.png";
import logoImage from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-primary px-4 py-20 md:px-20 space-y-10 text-white">
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-10 md:gap-20">
        <div className="space-y-3">
          <div className="flex items-center gap-x-2">
            <img src={logoImage} alt="Logo" className="h-16" />
            <h1 className="font-semibold text-3xl">NusaTrip</h1>
          </div>
          <blockquote className="italic">
            Nusa Trip Travel Agency offers unique and memorable tours, providing
            rich experiences in the beautiful country of Nusa Trip. [+]
          </blockquote>
          <div className="flex items-center gap-x-2">
            <a href="#">
              <FaWhatsapp size={22} />
            </a>
            <a href="#">
              <FaInstagram size={22} />
            </a>
            <a href="#">
              <FaFacebook size={22} />
            </a>
            <a href="#">
              <FaPinterest size={22} />
            </a>
            <a href="#">
              <RiTwitterXFill size={22} />
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold mb-4">Contact Info</h1>
          <p className="text-md text-white/80">
            Jl. ikan wijinongko no 12 Banyuwangi, Jawa Timur, Indonesia.
          </p>
          <p className="text-md text-white/80">+62-881-1661-7171</p>
          <p>
            <a
              href="#"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              nusatrip@gmail.com
            </a>
          </p>
          <p>
            <a
              href="#"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              www.nusatrip.com
            </a>
          </p>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold mb-4">Nusa Trip</h1>
          <p>
            <a
              href="#"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              Home
            </a>
          </p>
          <p>
            <a
              href="#about"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              About
            </a>
          </p>
          <p>
            <a
              href="#destinations"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              Destinations
            </a>
          </p>
          <p>
            <a
              href="#advantages"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              Advantages
            </a>
          </p>
          <p>
            <a
              href="#reviews"
              className="text-md cursor-pointer hover:text-secondary transition duration-300"
            >
              Reviews
            </a>
          </p>
        </div>
        <div>
          <img
            src={footerImage}
            alt="Footer Image"
            className="w-full lg:w-72"
          />
        </div>
      </div>
      <Separator />
      <div className="flex flex-col md:flex-row items-start lg:items-center justify-between text-lg md:text-md">
        <p className="text-white/80 w-full md:w-3/4 lg:w-full">
          © 2024 Nusa Trip Travel Agency. All rights reserved.
        </p>
        <div className="flex items-center justify-start md:justify-end gap-x-3 w-full">
          <p>
            <a
              href=""
              className="cursor-pointer hover:text-secondary transition duration-300"
            >
              Privacy Policy
            </a>
          </p>
          <p>
            <a
              href=""
              className="cursor-pointer hover:text-secondary transition duration-300"
            >
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
