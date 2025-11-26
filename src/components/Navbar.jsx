import { hamburger, nikeLogo, jordanLogo } from '../assets/icons';
import { navLinks } from '../constants';
import { BrandBadge } from '../components';

const Navbar = () => {
  return (
    <header className="padding-x py-2 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={nikeLogo}
            alt="Nike Logo"
            width={70}
            className="max-sm:w-[60px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-rubik leading-normal text-lg text-gray-dark hover:text-red-coral transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <BrandBadge icon_1={nikeLogo} icon_2={jordanLogo} />

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger Icon" width={40} height={40} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
