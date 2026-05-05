import heroImage from "../assets/hero.png";

export default function Navbar() {
  return (
    <nav className="bg-primary fixed w-full z-20 top-0 inset-s-0 border-default">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={heroImage} className="h-7" alt="Krezio Dev Logo" />
          <span className="self-center text-xl text-white font-semibold whitespace-nowrap">
            NusaTrip
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-prima-soft hover:text-white transition-all duration-300"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {/* <x-radix-hamburger-menu /> */}
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-primary md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-primary">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-secondary md:hover:text-primary transition-all duration-300"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-secondary md:hover:text-primary transition-all duration-300"
              >
                Tentang
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-secondary md:hover:text-primary transition-all duration-300"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-secondary md:hover:text-primary transition-all duration-300"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#price"
                className="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-secondary md:hover:text-primary transition-all duration-300"
              >
                Harga
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
