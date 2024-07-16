import React from 'react';
import Navbar from '../components/Navbar';
import FileEncrypt from '../components/FileEncrypt';
import FileDecrypt from '../components/FileDecrypt';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="mt-20 font-bold text-3xl text-center text-white">
        Lindungi DataKu
      </h1>
      <div
        className="w-full h-[245px] absolute top-0 left-0 -z-50"
        style={{ backgroundImage: 'url(/assets/svgs/wave_green.svg)' }}
      ></div>

      <div className="max-w-4xl justify-center items-center  md:items-start gap-x-10 mx-auto mt-32 px-5 flex flex-col xl:flex-row">
        <FileEncrypt />
        <FileDecrypt />
      </div>
      <Footer />
    </>
  );
}
