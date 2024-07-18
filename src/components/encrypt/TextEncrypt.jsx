import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';

const TextEncrypt = () => {
  const [plainText, setPlainText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [password, setPassword] = useState('');

  const handleEncrypt = () => {
    if (!plainText.trim())
      return toast('Mohon memasukkan teks yang akan didecrypt', {
        className: 'toast-error',
        toastId: 'toastError',
      });
    const encrypted = CryptoJS.AES.encrypt(plainText, password).toString();
    setEncryptedText(encrypted);
  };

  return (
    <div className="w-full">
      <h2 className="font-bold text-xl text-gray-800">Encrypt Text</h2>
      <textarea
        placeholder="Masukkan text yang akan dienkripsi"
        value={plainText}
        onChange={(e) => setPlainText(e.target.value)}
        rows={2}
        className="block w-full border p-3 outline-none min-h-20 max-h-80 focus:border-blue-500 mt-2 mb-4 rounded-md"
      />
      <div className="flex flex-col sm:flex-row gap-5 mt-7  items-center sm:gap-x-3">
        <label className="block min-w-max font-bold text-gray-800">
          Secret Key
        </label>
        <input
          type="password"
          placeholder="Secret Key"
          className="border outline-none ps-3 py-2 block rounded-md  focus:border-blue-500  w-full sm:max-w-80 "
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleEncrypt}
          className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300  text-white p-3 rounded-md text-sm block w-full"
        >
          Encrypt Text
        </button>
      </div>

      <label
        htmlFor="hasilEnkripsi"
        className="text-gray-800 font-bold mt-7 text-center block"
      >
        Hasil Encrypt
      </label>
      <textarea
        id="hasilEnkripsi"
        placeholder="Teks terdecrypt"
        value={encryptedText}
        className="block w-full border p-3 outline-none min-h-20 max-h-96 focus:border-gray-500 mt-2 mb-4 rounded-md"
        readOnly
        rows={7}
      />
    </div>
  );
};

export default TextEncrypt;
