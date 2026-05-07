export default function Stats() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-20 py-10">
      <div className="md:flex md:items-center md:gap-x-4 space-y-2 md:space-y-0">
        <h1 className="text-3xl md:text-5xl font-bold">+250</h1>
        <div className="max-w-3/4 md:max-w-1/3">
          <p>Attractive tours around Moliva</p>
        </div>
      </div>
      <div className="md:flex md:items-center md:gap-x-4 space-y-2 md:space-y-0">
        <h1 className="text-3xl md:text-5xl font-bold">+1.1M</h1>
        <div className="max-w-3/4 md:max-w-1/3">
          <p>Clients from around the world</p>
        </div>
      </div>
      <div className="md:flex md:items-center md:gap-x-4 space-y-2 md:space-y-0">
        <h1 className="text-3xl md:text-5xl font-bold">+98%</h1>
        <div className="max-w-3/4 md:max-w-1/3">
          <p>Our clients are satisfied</p>
        </div>
      </div>
      <div className="md:flex md:items-center md:gap-x-4 space-y-2 md:space-y-0">
        <h1 className="text-3xl md:text-5xl font-bold">4.9</h1>
        <div className="max-w-3/4 md:max-w-1/3">
          <p>Average rating from our customers</p>
        </div>
      </div>
    </section>
  );
}
