import React from 'react';
import Navbar from '../components/Navbar';
import FileEncrypt from '../components/FileEncrypt';
import FileDecrypt from '../components/FileDecrypt';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-20 px-5">
        <FileEncrypt />
        <FileDecrypt />
      </div>
    </>
  );
}
