import { arrowForward } from '../assets/icons';
import { nikeHero } from '../assets/images';
import { Button } from '../components';
import { statistics } from '../constants';

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-red-coral font-rubik">
          Next-Gen Performance
        </p>
        <h1 className="mt-10 font-helvetica text-gray-darkest text-8xl max-sm:text-5xl max-sm:leading-15 font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-red-coral inline-block mt-3 max-sm:mt-0">
            Nike
          </span>{' '}
          Shoes
        </h1>
        <p className="font-rubik text-gray-dark text-lg leading-8 mt-6 mb-14">
          Explore new Nike designs crafted for performance, comfort, and
          everyday movement.
        </p>

        <Button label="Explore All" iconURL={arrowForward} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 max-sm:mt-14 max-sm:gap-8">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-5xl text-gray-darkest font-helvetica font-black max-sm:text-[32px]">
                {stat.value}
              </p>
              <p className="font-rubik leading-7 text-gray-dark text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-end xl:min-h-screen bg-gray-darkest">
        <img
          src={nikeHero}
          alt="Nike running shoe in a clean modern layout"
          width={750}
          className="object-contain relative"
        />
      </div>
    </section>
  );
};

export default Hero;
