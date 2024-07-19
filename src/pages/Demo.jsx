import { Link } from 'react-router-dom';
import Hero from '../components/common/Hero';
import React from 'react';
import Footer from '../components/common/Footer';

export default function Demo() {
  return (
    <>
      <Hero />
      <div className="w-full h-[700px] mx-auto mt-36">
        <iframe
          src="https://www.youtube.com/embed/ChTaYaJ4DaQ?si=0XDB7E55u1UFEHfd"
          title=""
          frameborder="0"
          className="w-full max-w-[1200px] h-full max-h-[700px] mx-auto"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share full-screen"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <Link
        to="/"
        className="block mx-auto w-full px-5 max-w-max bg-blue-500 text-white font-medium text-xl rounded-md py-5 mt-5"
      >
        Mulai Encrypt DataKu....
      </Link>
      <Footer />
    </>
  );
}
