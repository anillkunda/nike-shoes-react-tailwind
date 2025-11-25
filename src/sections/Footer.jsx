import { footerLogo } from '../assets/icons';
import { footerIcons, footerLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-15 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="Nike logo"
              width={70}
              className="mb-5 max-sm:w-[60px]"
            />
          </a>
          <p className="text-info text-gray-light sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {footerIcons.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-10 md:gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-helvetica text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-rubik text-base leading-normal text-gray-light hover:text-gray-dark"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white mt-10 md:mt-20 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-helvetica text-lg cursor-pointer">
          <p>
            Copyright{' '}
            <span className="text-red-coral inline-block mt-3 max-sm:mt-0">
              &copy;
            </span>{' '}
            All rights reserved.
          </p>
        </div>
        <p className="font-helvetica text-lg cursor-pointer">
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
