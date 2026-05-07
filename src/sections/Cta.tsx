import { FaWhatsapp } from "react-icons/fa";

export default function Cta() {
  return (
    <section className="bg-primary h-116 md:h-72 flex items-center justify-center space-y-6">
      <div className="justify-items-center text-white">
        <p className="text-md tracking-widest">START EXPLORING</p>
        <h1 className="text-center text-2xl md:text-3xl font-semibold">
          Are you ready for adventures to Nusa trip?
        </h1>
        <button className="flex items-start gap-x-2 mt-10 border bg-transparent text-white hover:bg-secondary hover:text-white transition duration-300 px-8 py-2.5 rounded-lg tracking-widest">
          <FaWhatsapp size={22} /> CONTACT US
        </button>
      </div>
    </section>
  );
}
