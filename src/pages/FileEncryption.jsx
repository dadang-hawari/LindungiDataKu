import React from 'react';
import Navbar from '../components/common/Navbar';
import FileEncrypt from '../components/encrypt/FileEncrypt';
import FileDecrypt from '../components/decrypt/FileDecrypt';
import Footer from '../components/common/Footer';
import Information from '../components/common/Information';
import 'react-toastify/dist/ReactToastify.css';
import { Flip, ToastContainer } from 'react-toastify';
import Hero from '../components/common/Hero';

export default function FileEncryption() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-4xl justify-center items-center  md:items-start gap-x-10 mx-auto mt-32 px-5 flex flex-col xl:flex-row">
        <FileEncrypt />
        <FileDecrypt />
      </div>

      <Information />
      <ToastContainer
        autoClose={2500}
        transition={Flip}
        hideProgressBar
        className="mt-8"
        pauseOnFocusLoss={false}
      />
      <Footer />
    </>
  );
}
