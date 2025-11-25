import { soccerKick } from '../assets/images';
import { arrowForward } from '../assets/icons';
import { Button } from '../components';

const Spotlight = () => {
  return (
    <section className="flex justify-between md:items-center  max-lg:flex-col gap-10 w-full max-container">
      <div className="lg:w-2/5 sm:mt-0">
        <h1 className="text-4xl md:text-7xl font-helvetica font-extrabold leading-tight">
          READY FOR THE{' '}
          <span className="text-red-coral inline-block max-sm:mt-0">
            SPOTLIGHT
          </span>
        </h1>
        <p className="mt-4 text-info line-clamp-3 max-w-[80%]">
          Step into the future with Nike’s latest lineup — engineered for
          comfort, performance, and style. Designed for athletes and
          trendsetters alike.
        </p>

        <div className="flex gap-4 mt-8">
          <Button
            label="learn more"
            iconURL={arrowForward}
            backgroundColor="bg-black"
            textColor="text-white"
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img
          src={soccerKick}
          alt="Soccer player kicking a ball in Nike shoes"
          className="object-contain w-full h-full"
        />
      </div>
    </section>
  );
};

export default Spotlight;
