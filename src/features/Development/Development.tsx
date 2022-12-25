import { SimplyCarousel } from '../../components/Carusel/SimplyCarousel';

const Development = () => {
  return (
    <section className="my-20 mx-auto w-[300px] sm:w-[600px] md:w-[800px] lg:max-w-[800px]" id="development">
      <h2 className="my-7 text-center text-3xl font-semibold md:text-5xl lg:text-5xl">
        From concept to development
      </h2>
      <SimplyCarousel />
    </section>
  );
};

export default Development;
