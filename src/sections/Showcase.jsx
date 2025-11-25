const Showcase = () => {
  return (
    <section className="relative bg-soccerFieldBg bg-cover bg-no-repeat h-60 md:h-120 lg:h-screen p-3 md:p-10 max-container">
      <div className="relative z-10 w-full h-full col-span-3 grid grid-cols-3">
        <div className="col-span-2 self-center md:self-start">
          <h1 className="text-3xl md:text-7xl lg:text-8xl font-helvetica font-extrabold leading-none text-white tracking-tighter">
            TAKE THE <br /> FIRST STEP <br />
            TOWARD <br /> PERFORMANCE
          </h1>
        </div>

        <div className="hidden md:block col-span-1 self-start pt-2">
          <p className="text-info line-clamp-1">
            Discover the perfect pair that complements your unique style
          </p>
        </div>
      </div>

      <button className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-25 h-25 z-20 bg-white text-gray-darkest font-helvetica font-semibold text-sm rounded-full shadow-lg hidden md:block">
        Shop Now!
      </button>
    </section>
  );
};

export default Showcase;
