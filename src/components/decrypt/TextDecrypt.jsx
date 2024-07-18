import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';

const TextDecrypt = () => {
  const [encrptedText, setEncText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [password, setPassword] = useState('');

  const handleDecrypt = () => {
    if (!encrptedText.trim())
      return toast('Mohon memasukkan teks yang akan didecrypt', {
        className: 'toast-error',
        toastId: 'toastError2',
      });
    try {
      const bytes = CryptoJS.AES.decrypt(encrptedText, password);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      setDecryptedText(decrypted);
    } catch (error) {
      toast('Maaf ada kesalahan, silahkan cek key atau input kamu', {
        className: 'toast-error',
      });
    }
  };

  return (
    <div className="w-full">
      <h2 className="font-bold text-xl text-gray-800">Decrypt Text</h2>
      <textarea
        placeholder="Masukkan teks terenkripsi"
        value={encrptedText}
        onChange={(e) => setEncText(e.target.value)}
        rows={2}
        className="block w-full border p-3 outline-none min-h-20 max-h-80 focus:border-green-500 mt-2 mb-4 rounded-md"
      />
      <div className="flex flex-col sm:flex-row gap-5 mt-7  items-center sm:gap-x-3">
        <label className="block min-w-max font-bold text-gray-800">
          Secret Key
        </label>
        <input
          type="password"
          placeholder="Secret Key"
          className="border outline-none ps-3 py-2 block rounded-md  focus:border-green-500  w-full sm:max-w-80 "
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleDecrypt}
          className="bg-green-500 hover:bg-green-600 transition-colors duration-300  text-white p-3 rounded-md text-sm block w-full"
        >
          Decrypt
        </button>
      </div>
      <label
        htmlFor="hasilDecrypt"
        className="text-gray-800 font-bold mt-7 text-center block"
      >
        Hasil Encrypt
      </label>
      <textarea
        id="hasilDecrypt"
        placeholder="Teks terencrypt"
        value={decryptedText}
        readOnly
        className="block w-full border p-3 outline-none min-h-20 max-h-96 focus:border-gray-500 mt-2 mb-4 rounded-md"
        rows={7}
      />
    </div>
  );
};

export default TextDecrypt;
