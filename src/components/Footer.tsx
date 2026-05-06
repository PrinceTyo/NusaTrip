import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";
import footerImage from "../assets/footer.png";

export default function Footer() {
  return (
    <footer className="bg-primary p-20 space-y-10 text-white">
      <div className="flex items-start justify-start gap-x-20">
        <div className="space-y-3 max-w-1/4">
          <img
            src="https://moliva.themenix.com/assets/img/logos/footer-logo.png"
            alt="Logo"
          />
          <blockquote className="italic">
            Nusa Trip Travel Agency offers unique and memorable tours, providing
            rich experiences in the beautiful country of Nusa Trip. [+]
          </blockquote>
          <div className="flex items-center gap-x-1">
            <a href="">
              <FaWhatsapp size={22} />
            </a>
            <a href="">
              <FaInstagram size={22} />
            </a>
            <a href="">
              <FaFacebook size={22} />
            </a>
            <a href="">
              <FaPinterest size={22} />
            </a>
            <a href="">
              <RiTwitterXFill size={22} />
            </a>
          </div>
        </div>
        <div className="space-y-3 max-w-1/4">
          <h1 className="text-2xl font-semibold mb-4">Contact Info</h1>
          <p className="text-md text-white/80">
            Jl. ikan wijinongko no 12 Banyuwangi, Jawa Timur, Indonesia.
          </p>
          <p className="text-md text-white/80">+62-881-1661-7171</p>
          <p>
            <a
              href=""
              className="text-md cursor-pointer hover:text-green-500 transition duration-300"
            >
              nusatrip@gmail.com
            </a>
          </p>
          <p>
            <a
              href=""
              className="text-md cursor-pointer hover:text-green-500 transition duration-300"
            >
              www.nusatrip.com
            </a>
          </p>
        </div>
        <div className="space-y-3 max-w-1/4">
          <h1 className="text-2xl font-semibold mb-4">Nusa Trip</h1>
          <p>
            <a
              href=""
              className="text-md cursor-pointer hover:text-green-500 transition duration-300"
            >
              Home
            </a>
          </p>
          <p>
            <a
              href=""
              className="text-md cursor-pointer hover:text-green-500 transition duration-300"
            >
              About
            </a>
          </p>
          <p>
            <a
              href=""
              className="text-md cursor-pointer hover:text-green-500 transition duration-300"
            >
              Destinations
            </a>
          </p>
          <p>
            <a
              href=""
              className="text-md cursor-pointer hover:text-green-500 transition duration-300"
            >
              Advantages
            </a>
          </p>
        </div>
        <div>
          <img src={footerImage} alt="Footer Image" className="w-72" />
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-between text-md">
        <p className="text-white/80">
          © 2024 Nusa Trip Travel Agency. All rights reserved.
        </p>
        <div className="flex items-center gap-x-3">
          <p>
            <a
              href=""
              className="cursor-pointer hover:text-green-500 transition duration-300"
            >
              Privacy Policy
            </a>
          </p>
          <p>
            <a
              href=""
              className="cursor-pointer hover:text-green-500 transition duration-300"
            >
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
