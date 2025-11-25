import { soccerTackle, basketballPlay } from '../assets/images';
import { arrowForward } from '../assets/icons';
import { Button } from '../components';

const Performance = () => {
  return (
    <section className="w-full max-container">
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

        <div className="space-y-8">
          <h1 className="text-2xl md:text-5xl font-helvetica font-bold leading-tight">
            MAXIMUM <br />
            <span className="text-red-coral inline-block mt-0 md:mt-3">
              PERFORMANCE
            </span>{' '}
            FOR <br />
            EVERY ACTIVITY
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
