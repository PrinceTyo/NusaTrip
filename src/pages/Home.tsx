import Advantages from "@/sections/Advantages";
import About from "@/sections/About";
import Destinations from "@/sections/Destinations";
import Hero from "@/sections/Hero";
import Parallax from "@/sections/Parallax";
import Stats from "@/sections/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Parallax />
      <Destinations />
      <Advantages />
    </>
  );
}
