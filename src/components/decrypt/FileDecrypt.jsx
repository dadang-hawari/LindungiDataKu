import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';
import QuestionMarkDec from './QuestionMarkDec';

function FileDecrypt() {
  const [file, setFile] = useState(null);
  const [encryptedFileContent, setEncryptedFileContent] = useState('');
  const [decryptedFile, setDecryptedFile] = useState(null);
  const [password, setPassword] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile != decryptedFile) setDecryptedFile(null);
    setFile(selectedFile);

    if (selectedFile && selectedFile.size > 20 * 1024 * 1024) {
      return toast('File terlalu besar, ukuran maksimal adalah 30Mb.', {
        className: 'toast-error',
        toastId: 'toastError',
      });
    }
    if (!selectedFile) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setEncryptedFileContent(e.target.result);
    };
    reader.readAsText(selectedFile);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDecrypt = async () => {
    if (file === null) {
      return toast('Mohon memilih file yang akan didecrypt', {
        className: 'toast-error',
        toastId: 'toastError',
      });
    }
    try {
      const decrypted = CryptoJS.AES.decrypt(
        encryptedFileContent,
        password,
      ).toString(CryptoJS.enc.Utf8);

      if (!decrypted) {
        return toast('File belum terencrypt', {
          toastId: 'toastError',
          className: 'toast-error',
        });
      }

      setDecryptedFile(decrypted);
      await decrypted;
      toast('File berhasil didecrypt', {
        className: 'toast-success',
        toastId: 'toastSuccess',
      });
    } catch (e) {
      if (e == 'Error: Malformed UTF-8 data') {
        toast('Secret Key salah atau File yang dipilih tidak valid .', {
          className: 'toast-error',
          toastId: 'toastError',
        });
      } else {
        toast('Terjadi kesalahan saat mendekripsi file.', {
          className: 'toast-error',
          toastId: 'toastError',
        });
      }
      setDecryptedFile(null);
    }
  };

  return (
    <div className="w-full">
      <h2 className="font-bold text-xl text-gray-800">Decrypt File Kamu</h2>
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
        <span id="fileName" className="text-gray-500">
          {file?.name
            ? file?.name?.length > 20
              ? file?.name?.slice(0, 20) + '...'
              : file?.name
            : 'Tidak ada file yang dipilih'}
          <span className="block text-xs">Max. Ukuran 30 Mb </span>
          <span className="block text-xs">
            File yang dapat didecrypt hanya file yang telah diencrypt.
          </span>
        </span>
      </div>
      <div className="relative max-w-[360px] w-full">
        <label className="relative text-sm">
          Secret Key File (Jika ada)
          <QuestionMarkDec
            text={
              ' Jika file memiliki secret key, silahkan masukkan secret key pada inputan berikut'
            }
          />
        </label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Secret Key"
          className="outline-none border block mt-2 border-gray-400 rounded-md  p-2 focus:border-green-500 mr-4 w-full"
        />
      </div>
      <button
        onClick={handleDecrypt}
        className="bg-green-500  hover:bg-green-600 transition-colors duration-300 mt-4 text-white p-2 rounded-md"
      >
        Decrypt File
      </button>
      {decryptedFile && (
        <div>
          <h3 className="mt-2">File Decrypt:</h3>
          <a
            href={decryptedFile}
            download={`decrypt-${
              file?.name?.includes('encrypt-')
                ? file?.name?.slice(8).split('.')[0]
                : file?.name?.split('.')[0]
            }`}
            className="text-green-500 border border-green-500 rounded-md p-2 max-w-80 w-full text-center mt-2 block"
          >
            Download{' '}
            {`decrypt-${
              file?.name?.includes('encrypt-')
                ? file?.name?.slice(8).split('.')[0]
                : file?.name?.split('.')[0]
            }`}
          </a>
        </div>
      )}
    </div>
  );
}

export default FileDecrypt;
