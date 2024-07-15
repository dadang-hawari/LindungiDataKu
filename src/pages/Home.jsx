import React from 'react';
import Navbar from '../components/Navbar';
import FileEncrypt from '../components/FileEncrypt';
import FileDecrypt from '../components/FileDecrypt';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl justify-center items-center md:items-start gap-x-10 mx-auto mt-20 px-5 flex flex-col xl:flex-row">
        <FileEncrypt />
        <FileDecrypt />
      </div>
    </>
  );
}
