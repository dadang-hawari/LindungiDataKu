import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';
import QuestionMarkEnc from './QuestionMarkEnc';

function FileEncrypt() {
  const [file, setFile] = useState(null);
  const [encryptedFile, setEncryptedFile] = useState(null);
  const [password, setPassword] = useState('');
  const [encryptedFileUrl, setEncryptedFileUrl] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 20 * 1024 * 1024) {
      return toast('File terlalu besar, ukuran maksimal adalah 20Mb.', {
        className: 'toast-error',
        toastId: 'toastError',
      });
    }

    const disallowedExecutables = [
      'application/x-msdownload', // .exe files
      'application/x-ms-installer', // Windows installer
      'application/x-ms-application', // ClickOnce application
      'application/vnd.microsoft.portable-executable', // Portable Executable (PE) format
      'application/x-bat', // Batch files
      'application/x-sh', // Shell script files
      'application/x-csh', // C shell script files
      'application/x-msdos-program', // MS-DOS executable
      'application/x-com', // COM files
      'application/x-ms-shortcut', // Windows shortcut files (.lnk)
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
    const reader = new FileReader();
    if (file === null) {
      return toast('Mohon memilih file terlebih dahulu', {
        className: 'toast-error',
        toastId: 'toastError',
      });
    }
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
        <h2 className="font-bold text-xl text-gray-800">Encrypt File Kamu</h2>
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
            {file?.name
              ? file?.name?.length > 20
                ? file?.name?.slice(0, 20) + '...'
                : file?.name
              : 'Tidak ada file yang dipilih'}
            <span className="block text-xs">Max. Ukuran 20Mb</span>
            <span className="block text-xs">
              File seperti executable (exe.) dan sebagainya, tidak
              diperbolehkan.
            </span>
          </span>
        </div>
        <div className="w-full max-w-[360px]">
          <label className="relative text-sm">
            Berikan Secret Key (Opsional)
            <QuestionMarkEnc />
          </label>
          <input
            id="passEncrypt"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Secret Key"
            className="outline-none border block mt-2  border-gray-400 rounded-md p-2 focus:border-blue-500 mr-4 w-full"
          />
        </div>

        <button
          onClick={handleEncrypt}
          className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 mt-4 text-white p-3 rounded-md text-sm"
        >
          Encrypt File
        </button>
        {encryptedFile && (
          <div>
            <h3 className="mt-2">File Encrypt:</h3>
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
