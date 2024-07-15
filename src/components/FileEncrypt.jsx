import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function FileEncrypt() {
  const [file, setFile] = useState(null);
  const [encryptedFile, setEncryptedFile] = useState(null);
  const [password, setPassword] = useState('');
  const [encryptedFileUrl, setEncryptedFileUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value.trim());
  };

  const handleEncrypt = () => {
    console.log('file', file);
    if (file === null) return alert('Mohon memilih file terlebih dahulu');
    const reader = new FileReader();
    reader.onload = (e) => {
      const encrypted = CryptoJS.AES.encrypt(
        e.target.result,
        password,
      ).toString();
      setEncryptedFile(encrypted);
      const blob = new Blob([encrypted], { type: 'text/plain' });
      setEncryptedFileUrl(URL.createObjectURL(blob));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-20">
      <h2 className="font-bold">Enkripsi File Kamu</h2>
      <div className="flex items-center space-x-4 my-4">
        <label
          htmlFor="fileInput"
          className="cursor-pointer bg-gray-500 hover:bg-gray-600 transition-colors text-white font-medium py-2 max-w-36 w-full text-center rounded"
        >
          Pilih File
        </label>
        <input
          type="file"
          id="fileInput"
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
        placeholder="Berikan Sandi"
        className="outline-none border border-gray-400 rounded-md  p-2 focus:border-green-500 max-w-80 mr-4 w-full"
      />
      <button
        onClick={handleEncrypt}
        className="bg-green-500 mt-4 text-white p-2 rounded-md"
      >
        Enkripsi File
      </button>
      {encryptedFile && (
        <div>
          <h3 className="mt-2">File Terenkripsi:</h3>
          <a
            href={encryptedFileUrl}
            download={`encrypt-${file?.name?.slice(0, 6)}.txt`}
            className="text-green-500 border border-green-500 rounded-md p-2 max-w-80 w-full text-center mt-2 block"
          >
            Download {`encrypt-${file?.name?.slice(0, -4)}.txt`}
          </a>
        </div>
      )}
    </div>
  );
}

export default FileEncrypt;
