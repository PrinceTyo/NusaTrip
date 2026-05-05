export default function Parallax() {
  return (
    <div
      className="relative h-96 flex items-center justify-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://moliva.themenix.com/assets/img/background/b1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="z-10 text-center space-y-4">
        <p className="text-white tracking-widest text-md">NUSA TRIP</p>
        <h1 className="text-5xl text-white font-medium">
          Beautiful & Romantic
        </h1>
      </div>
    </div>
  );
}
