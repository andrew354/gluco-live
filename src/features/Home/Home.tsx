import videohome from '../../assets/videohome.mp4';
import glucoliveLogo from '../../assets/glucoliveLogo.webp';
import linkedinLogo from '../../assets/linkedinIcon.webp';

const Home = () => {
  return (
    <section id="home" className="relative mb-12 flex h-screen items-center justify-center overflow-hidden">
      <div className="relative z-30 flex flex-col gap-7">
        <img
          className="mx-auto h-[71px] w-[141px] md:h-[180px] md:w-[374px] lg:h-[180px] lg:w-[374px]"
          src={glucoliveLogo}
          alt="glucoliveLogo"
        />
        <h2 className="p-4 text-center text-3xl font-semibold md:text-5xl lg:text-5xl">
          Non-invasive device for continuous glucose monitoring
        </h2>
        <a href="https://www.linkedin.com/company/gluco-live/" target="_blank" rel="noreferrer">
          <img
            className="mx-auto h-[70px] w-[70px] md:h-[90px] md:w-[90px] lg:h-[90x] lg:w-[90px]"
            src={linkedinLogo}
            alt="linkedinLogo"
          />
        </a>
      </div>
      <video autoPlay loop muted className="absolute z-10 min-h-full w-auto min-w-full max-w-none">
        <source src={videohome} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Home;
