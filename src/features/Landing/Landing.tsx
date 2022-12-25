import Navbar from '../../components/Navbar/Navbar';
import ContactUs from '../ContactUs/ContactUs';
import Development from '../Development/Development';
import Home from '../Home/Home';
import OurAim from '../OurAim/OurAim';
import OurTeam from '../OurTeam/OurTeam';

const Landing = () => {
  return (
    <div className="mx-auto max-w-[1440px] bg-customLightGray text-customNeutral800">
      <Navbar />
      <Home />
      <OurAim />
      <Development />
      <OurTeam />
      <ContactUs />
    </div>
  );
};

export default Landing;
