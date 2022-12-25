type Person = {
  name: string;
  position: string;
  linkedinProfile: string;
  picture: string;
};

type ProfileCardProps = {
  person: Person;
};

const ProfileCard = ({ person }: ProfileCardProps) => {
  return (
    <div className="flex h-[450px] max-w-md flex-col justify-center rounded-xl bg-customLightBlue p-6 shadow-md sm:px-12 md:h-[550px] lg:h-[550px]">
      <img
        src={person.picture}
        alt={person.name}
        className="mx-auto aspect-square h-[250px] w-[250px] rounded-full dark:bg-gray-500 md:h-[352px] md:w-[352px] lg:h-[352px] lg:w-[352px]"
      />
      <div className="space-y-4 divide-y divide-gray-700 text-center">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">{person.name}</h2>
          <p className="px-5 text-xs dark:text-gray-400 sm:text-base">{person.position}</p>
        </div>
        <div className="align-center flex justify-center space-x-4 pt-2">
          <a
            rel="noopener noreferrer"
            href={person.linkedinProfile}
            target="_blank"
            className="rounded-md p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
