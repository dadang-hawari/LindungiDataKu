import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function FileDecrypt() {
  const [file, setFile] = useState(null);
  const [encryptedFileContent, setEncryptedFileContent] = useState('');
  const [decryptedFile, setDecryptedFile] = useState(null);
  const [password, setPassword] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setEncryptedFileContent(e.target.result);
    };
    reader.readAsText(file);
    console.log('file', file);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDecrypt = () => {
    try {
      const decrypted = CryptoJS.AES.decrypt(
        encryptedFileContent,
        password,
      ).toString(CryptoJS.enc.Latin1);
      if (!/^data:/.test(decrypted)) {
        alert('Password salah atau file tidak valid.');
        return;
      }
      setDecryptedFile(decrypted);
    } catch (e) {
      alert('Password salah atau file tidak valid.');
    }
  };

  return (
    <div className="w-full">
      <h2 className="font-bold">Dekripsi FileMu Di Sini</h2>
      <div className="flex items-center space-x-4 my-4">
        <label
          htmlFor="fileInputDecrypt"
          className="cursor-pointer bg-gray-500 hover:bg-gray-600 transition-colors text-white font-medium py-2 max-w-36 w-full text-center rounded"
        >
          Pilih File
        </label>
        <input
          type="file"
          id="fileInputDecrypt"
          className="hidden"
          onChange={handleFileChange}
        />
        <span id="fileName" className="text-gray-600">
          {file?.name ? file?.name : 'Tidak ada file yang dipilih'}
        </span>
      </div>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Masukkan Sandi File"
        className="outline-none border border-gray-400 rounded-md  p-2 focus:border-blue-500 max-w-80 mr-4 w-full"
      />
      <button
        onClick={handleDecrypt}
        className="bg-blue-500 mt-4 text-white p-2 rounded-md"
      >
        Decrypt File
      </button>
      {decryptedFile && (
        <div>
          <h3 className="mt-2">Decrypted File:</h3>
          <a
            href={decryptedFile}
            download="decryptedFile"
            className="text-blue-500 border border-blue-500 rounded-md p-2 max-w-80 w-full text-center mt-2 block"
          >
            Download {`${file?.name}`}
          </a>
        </div>
      )}
    </div>
  );
}

export default FileDecrypt;
