import React from 'react';
import Navbar from '../components/Navbar';
import FileEncrypt from '../components/FileEncrypt';
import FileDecrypt from '../components/FileDecrypt';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-20">Home</div>
      <FileEncrypt />
      <FileDecrypt />
    </>
  );
}
