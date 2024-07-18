import React from 'react';
import TextEncrypt from '../components/encrypt/TextEncrypt';
import TextDecrypt from '../components/decrypt/TextDecrypt';
import DefaultNav from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function TextEncryption() {
  return (
    <div className="mt-20 flex h-screen w-full flex-col justify-between">
      <DefaultNav />
      <div className="w-full">
        <TextEncrypt />
        <TextDecrypt />
      </div>
      <Footer />
    </div>
  );
}
