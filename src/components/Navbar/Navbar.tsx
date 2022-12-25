import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import glucoliveLogo from '../../assets/glucoliveLogo.webp';
import linkedinLogo from '../../assets/linkedinIcon.webp';

const navbarLinks = [
  {
    title: 'Home',
    linkUrl: 'home',
  },
  {
    title: 'Our Aim',
    linkUrl: 'our-aim',
  },
  {
    title: 'Development',
    linkUrl: 'development',
  },
  {
    title: 'Team',
    linkUrl: 'our-team',
  },
  {
    title: 'Contact Us',
    linkUrl: 'contact-us',
  },
];

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="sticky top-0 z-50 h-[90px] w-full bg-customLightGray">
      <div className="justify-around px-4 md:flex md:items-center ">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <img className="h-[71px] w-[147px]" src={glucoliveLogo} alt="glucoliveLogo" />
            <div className="md:hidden">
              <button
                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`absolute top-[90px] right-0 w-[300px] bg-customLightGray text-center md:relative md:top-0 md:mt-0 md:block md:w-full md:flex-1 md:justify-self-center lg:relative lg:top-0 lg:w-full ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center md:flex md:gap-5 lg:gap-5">
              {navbarLinks.map((link) => (
                <li className="my-5 cursor-pointer text-lg hover:text-customNeutral500">
                  <Link
                    onClick={() => setNavbar(!navbar)}
                    activeClass="active"
                    to={link.linkUrl}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a href="https://www.linkedin.com/company/gluco-live/" target="_blank" rel="noreferrer">
          <img
            className={`lg_block hidden h-[40px] w-[40px] md:mt-0 md:block md:pb-0 ${
              navbar ? 'block' : 'hidden'
            }`}
            src={linkedinLogo}
            alt="linkedinLogo"
          />
        </a>
      </div>
    </nav>
  );
}
