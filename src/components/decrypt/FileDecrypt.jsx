import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';

function FileDecrypt() {
  const [file, setFile] = useState(null);
  const [encryptedFileContent, setEncryptedFileContent] = useState('');
  const [decryptedFile, setDecryptedFile] = useState(null);
  const [password, setPassword] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onload = (e) => {
      setEncryptedFileContent(e.target.result);
    };
    reader.readAsText(selectedFile);
    setDecryptedFile(null);
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
        return toast('File belum terencrypt atau secret key salah.', {
          toastId: 'toastError',
          className: 'toast-error',
        });
      }

      setDecryptedFile(decrypted);
    } catch (e) {
      console.log('e', e);
      toast('Password salah atau file tidak valid.', {
        className: 'toast-error',
        toastId: 'toastError',
      });
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
        <span id="fileName" className="text-gray-600">
          {file?.name ? file?.name : 'Tidak ada file yang dipilih'}
          <span className="block text-xs">Max. Ukuran 20Mb</span>
          <span className="block text-xs">
            File yang dapat didecrypt hanya file yang telah diencrypt.
          </span>
        </span>
      </div>
      <div className="relative max-w-[360px] w-full">
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Masukkan Secret Key File (Jika ada)"
          className="outline-none border border-gray-400 rounded-md  p-2 focus:border-green-600 mr-4 w-full"
        />
      </div>
      <button
        onClick={handleDecrypt}
        className="bg-green-600 hover:bg-green-600 transition-colors duration-300 mt-4 text-white p-2 rounded-md"
      >
        Decrypt File
      </button>
      {decryptedFile && (
        <div>
          <h3 className="mt-2">Decrypted File:</h3>
          <a
            href={decryptedFile}
            download={`decrypt`}
            className="text-green-600 border border-green-600 rounded-md p-2 max-w-80 w-full text-center mt-2 block"
          >
            Download {`decrypt-${file?.name?.split('.')[0]}.txt`}
          </a>
        </div>
      )}
    </div>
  );
}

export default FileDecrypt;
