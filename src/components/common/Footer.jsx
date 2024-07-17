import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white p-10">
      <hr className="my-6 " />
      <div className="flex flex-col md:flex-row justify-center flex-wrap ">
        <div className="flex  items-center text-black text-lg font-bold mt-9 mr-9 "></div>
        <div className="flex w-full flex-col justify-start sm:justify-between gap-5 sm:flex-row flex-wrap  max-w-5xl">
          <div className="w-full xl:w-fit font-bold my-auto">
            <div>
              <span className="text-blue-500 text-2xl">LindungiDataKu</span>
            </div>
            <p className="font-normal text-xs leading-5 mb-2">
              Lindungi data kamu dengan cepat, aman dan gratis.
            </p>
          </div>
          <div className="flex flex-wrap  sm:gap-14">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-black mb-4">Navigasi</h3>
              <p className="my-2">
                <Link to="/" className="my-2 text-xs">
                  Beranda
                </Link>
              </p>
              <p className="my-2">
                <Link to="/tentang" className="my-2 text-xs ">
                  Tentang Kami
                </Link>
              </p>
            </div>

            <div className="flex mt-9 mr-8 gap-x-6">
              <a
                href="https://github.com/dadang-hawari"
                target="_blank"
                className="text-gray-900 transition-all duration-500 hover:text-secondary"
              >
                <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/muh-dadang-hawari"
                className="text-gray-900 transition-all duration-500 hover:text-secondary"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
              </a>
              <a
                href="mailto:support@muhammaddadanghawari@gmail.com"
                className="text-gray-900 transition-all duration-500  hover:text-secondary"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 " />
      <span className="text-sm text-gray-500 text-center block mt-6">
        ©LindungiDataKu {new Date().getFullYear()}, All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
