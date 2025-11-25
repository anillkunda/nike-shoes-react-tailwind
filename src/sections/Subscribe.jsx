const Subscribe = () => {
  return (
    <section className="bg-black text-white py-10 max-container">
      <div className="flex justify-between items-start gap-10 md:gap-15 max-sm:flex-wrap max-lg:flex-col">
        <div className="space-y-4">
          <h2 className="font-helvetica font-semibold text-2xl">Newsletter</h2>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-4 w-full rounded-md bg-white font-rubik text-black"
            />
            <button className="bg-white text-black px-6 py-4 rounded-md">
              →
            </button>
          </div>
          <p className="text-info text-gray-light line-clamp-2 ">
            Our community informed, inspired, and engaged. Our newsletter is
            your exclusive gateway to a world of insights, updates, and exciting
            offers.
          </p>
        </div>

        <div className="space-y-4 ">
          <h2 className="font-helvetica font-semibold text-2xl">Office</h2>
          <p className="text-gray-light font-rubik text-2xl md:text-4xl">
            455 N. Rexford Drive, Beverly Hills CA 90210, United States
          </p>
        </div>
      </div>
      <div className="border-t border-gray-dark mt-6"></div>
    </section>
  );
};

export default Subscribe;
