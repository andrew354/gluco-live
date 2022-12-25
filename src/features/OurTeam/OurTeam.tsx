import team from '../../assets/team.webp';
import { people } from './people';
import ProfileCard from './ProfileCard';

const OurTeam = () => {
  return (
    <section className="mt-10 flex flex-col gap-8" id="our-team">
      <div className="relative w-full">
        <img
          className="mx-auto opacity-75 md:h-[540px] md:w-[980px] lg:h-[540px] lg:w-[980px]"
          src={team}
          alt="italy"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform flex-col justify-around">
          <h2 className="text-center text-3xl font-semibold text-white md:text-5xl lg:text-5xl">Our Team</h2>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
          {people.map((person) => (
            <ProfileCard person={person} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
