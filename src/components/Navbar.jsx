import {
  faBarsProgress,
  faChevronDown,
  faQuestionCircle,
  faSpoon,
  faUser,
  faUserShield,
  faXmarkSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';

export default function DefaultNav() {
  const navigate = useNavigate();
  const path = window.location.pathname;
  const [openNav, setOpenNav] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth >= 960 && setOpenNav(false);
    });
  }, []);

  const handleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const navList = (
    <ul
      className={`mt-2 mb-4 flex text-center flex-col gap-4 lg:mb-0 lg:mt-0 transition-all  ${
        openNav ? 'h-screen' : 'h-fit'
      } lg:flex-row lg:items-center lg:gap-6`}
    >
      <li>
        <Link
          className={`${path === '/' ? 'font-medium text-blue-500' : ''}`}
          to="/"
        >
          File Encrypt
        </Link>
      </li>

      <li>
        <Link
          className={`${
            path === '/text-encrypt' ? 'font-medium text-blue-500' : ''
          }`}
          to="/text-encrypt"
        >
          Text Encrypt
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="w-full">
      <nav className="block shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 bg-white text-white fixed top-0 z-10 h-max w-full rounded-none py-3 sm:px-6 px-5">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/" className="no-underline">
            <h1 className="font-bold text-blue-400">
              <FontAwesomeIcon icon={faUserShield} />
              LindungiAku
            </h1>
          </Link>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-gray-800"
              ripple={false}
              title="Menu"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <FontAwesomeIcon icon={faXmarkSquare} className="h-[16px]" />
              ) : (
                <FontAwesomeIcon icon={faBarsProgress} className="h-[16px]" />
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </nav>
    </div>
  );
}
