import React from 'react';
import Navbar from '../components/Navbar';
import FileEncrypt from '../components/FileEncrypt';
import FileDecrypt from '../components/FileDecrypt';

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="mt-20 font-bold text-3xl text-center text-white">
        Lindung DataKu
      </h1>
      <div
        className="w-full h-60 absolute top-0 left-0 -z-50"
        style={{ backgroundImage: 'url(/assets/svgs/wave_green.svg)' }}
      ></div>

      <div className="max-w-4xl justify-center items-center  md:items-start gap-x-10 mx-auto mt-20 px-5 flex flex-col xl:flex-row">
        <FileEncrypt />
        <FileDecrypt />
      </div>
    </>
  );
}
