import { soccerTackle, basketballPlay } from '../assets/images';
import { arrowForward } from '../assets/icons';
import { Button } from '../components';

const Performance = () => {
  return (
    <section id="performance" className="w-full max-container">
      <h1 className="text-3xl md:text-5xl font-helvetica font-extrabold mb-10">
        &mdash; Maximum{' '}
        <span className="text-red-coral inline-block">Performance</span>
      </h1>
      <div className="grid lg:grid-cols-2 gap-7 md:gap-12 items-center">
        <div className="space-y-10 max-[1023px]:row-start-2">
          <img
            src={soccerTackle}
            alt="Soccer Tackle"
            className="rounded-3xl w-full object-cover"
          />

          <p className="text-info max-w-[95%] line-clamp-3">
            Whether it's a fierce slide tackle on the soccer field or a sharp
            dribble move on the basketball court, these moments capture athletes
            pushing their limits. Each scene reflects precision, energy, and the
            drive for maximum performance in every activity.
          </p>

          <Button
            label="learn more"
            iconURL={arrowForward}
            backgroundColor="bg-black"
            textColor="text-white"
          />
        </div>

        <div className="space-y-15">
          <h1 className="text-3xl md:text-7xl lg:text-5xl font-helvetica font-bold leading-tight">
            Ultimate{' '}
            <span className="text-red-coral inline-block mt-0 md:mt-3">
              Athletic
            </span>{' '}
            <br />
            Drive In Every Sport
          </h1>

          <img
            src={basketballPlay}
            alt="Basketball Play"
            className="rounded-3xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Performance;
