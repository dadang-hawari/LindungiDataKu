import React from 'react';
import TextEncrypt from '../components/encrypt/TextEncrypt';
import TextDecrypt from '../components/decrypt/TextDecrypt';
import DefaultNav from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Flip, ToastContainer } from 'react-toastify';
import Hero from '../components/common/Hero';

export default function TextEncryption() {
  return (
    <>
      <DefaultNav />
      <Hero />

      <div className=" flex h-screen w-full flex-col justify-between mt-2  ">
        <div className="w-full max-w-5xl justify-center gap-10 items-center px-3 sm:px-10  md:px-3 md:items-start mx-auto mt-32 flex flex-col xl:flex-row">
          <TextEncrypt />
          <TextDecrypt />
        </div>
        <Footer />
        <ToastContainer
          autoClose={2500}
          transition={Flip}
          hideProgressBar
          className="mt-9"
          pauseOnFocusLoss={false}
        />
      </div>
    </>
  );
}
