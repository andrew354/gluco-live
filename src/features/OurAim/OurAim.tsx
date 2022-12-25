import italy from '../../assets/italy.webp';
import watch from '../../assets/watch.webp';
import watchMobile from '../../assets/watchMobile.webp';

const textBoxes = [
  {
    title: '40 thousands',
    subtitle: 'Pregnancies experiencing complications from diabetes each year in Italy',
  },
  {
    title: 'Anxiety and Stress',
    subtitle: 'Gestation diabetes may affect fetal health',
  },
  {
    title: 'Our Aim',
    subtitle: 'Continuous blood glucose monitoring becomes a key factor in the pre and postpartum phase',
  },
];

const OurAim = () => {
  return (
    <>
      <h2 className="mt-10 text-center text-3xl font-semibold md:text-5xl lg:text-5xl" id="our-aim">
        Our Aim
      </h2>
      <section className="md:mx-10 md:mt-10 md:flex md:justify-center lg:mx-10 lg:mt-10 lg:flex lg:justify-center">
        <div className="md:h-[832px] md:w-full lg:h-[832px] lg:w-[490px]">
          <img
            className="hidden object-contain md:block md:h-full md:max-w-[490px] lg:block lg:h-full lg:max-w-[490px]"
            src={watch}
            alt="watch"
          />
          <img className="md:hidden lg:hidden" src={watchMobile} alt="watchMobile" />
        </div>
        <div className="relative max-w-[490px]">
          <img
            className="items-center justify-center object-contain opacity-5 md:h-[832px] md:w-full lg:h-[832px] lg:w-[490px]"
            src={italy}
            alt="italy"
          />
          <div className="absolute top-10 left-0 mt-8 flex h-full flex-col gap-16 text-center md:h-[832px] md:w-full md:justify-around lg:h-[832px] lg:w-[490px] lg:justify-around">
            {textBoxes.map((textBox) => (
              <div className="flex flex-col gap-3 md:w-full lg:w-[490px]">
                <h3 className="text-4xl font-bold">{textBox.title}</h3>
                <p className="text-base font-bold">{textBox.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurAim;
