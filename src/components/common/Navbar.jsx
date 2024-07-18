import {
  faBarsStaggered,
  faUserShield,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Collapse } from '@material-tailwind/react';

export default function DefaultNav() {
  const navigate = useNavigate();
  const path = window.location.pathname;
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth >= 960 && setOpenNav(false);
    });
    window.scrollTo(0, 0);
  }, []);

  const navList = (
    <ul
      className={`mt-2 mb-4 flex text-[15px] font-medium text-center flex-col gap-4 md:mb-0 md:mt-0 transition-all  ${
        openNav ? 'h-screen' : 'h-fit'
      } md:flex-row md:items-center md:gap-6`}
    >
      <li>
        <Link
          className={`${path === '/' ? 'text-blue-500' : 'text-gray-700'} `}
          to="/"
        >
          File Encrypt
        </Link>
      </li>

      <li>
        <Link
          className={`${
            path === '/text-encrypt' ? ' text-blue-500' : 'text-gray-700'
          } `}
          to="/text-encrypt"
        >
          Text Encrypt
        </Link>
      </li>
      <li>
        <Link
          className={`${
            path === '/about' ? ' text-blue-500' : 'text-gray-700'
          } font-medium`}
          to="/about"
        >
          Tentang
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="w-full">
      <nav className="block shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-60 bg-white text-white fixed top-0 z-10 h-max w-full rounded-none py-3 sm:px-6 px-5">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/" className="no-underline">
            <h1 className="font-bold text-blue-500">
              <FontAwesomeIcon icon={faUserShield} />
              LDK
            </h1>
          </Link>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden md:block">{navList}</div>

            <button
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden text-gray-800"
              title="Menu"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <FontAwesomeIcon icon={faXmark} className="h-4" />
              ) : (
                <FontAwesomeIcon icon={faBarsStaggered} className="h-4" />
              )}
            </button>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </nav>
    </div>
  );
}
