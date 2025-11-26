import { soccerKick } from '../assets/images';
import { arrowForward } from '../assets/icons';
import { Button } from '../components';

const Spotlight = () => {
  return (
    <section className="w-full max-container">
      <h1 className="text-3xl md:text-5xl font-helvetica font-extrabold mb-10">
        &mdash; Ready For{' '}
        <span className="text-red-coral inline-block">Spotlight</span>
      </h1>
      <div className="flex justify-between md:items-center max-lg:flex-col gap-10">
        <div className="lg:w-2/4 sm:mt-0">
          {' '}
          <h1 className="text-4xl md:text-7xl font-helvetica font-bold leading-tight">
            Ready for Soccer
            <br />
            <span className="text-red-coral inline-block max-sm:mt-0">
              Spotlight
            </span>
          </h1>
          <p className="mt-4 text-info line-clamp-2 max-w-[90%]">
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
      </div>
    </section>
  );
};

export default Spotlight;
