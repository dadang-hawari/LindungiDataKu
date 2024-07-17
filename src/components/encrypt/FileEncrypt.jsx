import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FileEncrypt() {
  const [file, setFile] = useState(null);
  const [encryptedFile, setEncryptedFile] = useState(null);
  const [password, setPassword] = useState('');
  const [encryptedFileUrl, setEncryptedFileUrl] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 20 * 1024 * 1024) {
      return toast('File terlalu besar, ukuran maksimal adalah 20MB.', {
        className: 'toast-error',
        toastId: 'toastError',
      });
    }

    const disallowedExecutables = [
      'application/x-msdownload', // .exe files
      'application/x-ms-installer', // Windows installer
      'application/x-ms-application', // ClickOnce application
    ];

    if (disallowedExecutables.includes(selectedFile?.type)) {
      return toast('File executable tidak diperbolehkan.', {
        className: 'toast-error',
        toastId: 'toastError',
      });
    }

    setFile(selectedFile);
    setEncryptedFile(null);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value.trim());
  };

  const handleEncrypt = async () => {
    if (file === null) {
      return toast('Mohon memilih file terlebih dahulu', {
        className: 'toast-error',
        toastId: 'toastError',
      });
    }

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

    const readFile = new Promise((resolve) => {
      reader.onloadend = resolve;
      reader.readAsDataURL(file);
    });

    await readFile;

    toast('File berhasil diencrypt', {
      className: 'toast-success',
      toastId: 'toastSuccess',
    });
  };

  return (
    <div className="mb-20 w-full flex flex-row-reverse items-center">
      <div className="w-full">
        <h2 className="font-bold text-xl text-gray-800">Enkripsi File Kamu</h2>
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
            <span className="block text-xs">Max. Ukuran 20Mb</span>
            <span className="block text-xs">
              File seperti executable (exe.) dan sebagainya, tidak diperbolehkan{' '}
            </span>
          </span>
        </div>
        <div className="w-full relative">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Berikan Sandi"
            className="outline-none border border-gray-400 rounded-md p-2 focus:border-blue-500 max-w-80 mr-4 w-full"
          />
        </div>
        <button
          onClick={handleEncrypt}
          className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 mt-4 text-white p-2 rounded-md"
        >
          Enkripsi File
        </button>
        {encryptedFile && (
          <div>
            <h3 className="mt-2">File Terenkripsi:</h3>
            <a
              href={encryptedFileUrl}
              download={`encrypt-${file?.name?.split('.')[0]}.txt`}
              className="text-blue-500 border border-blue-500 rounded-md p-2 max-w-80 w-full text-center mt-2 block"
            >
              Download {`encrypt-${file?.name?.split('.')[0]}.txt`}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default FileEncrypt;
