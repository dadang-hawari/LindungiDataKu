import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function FileEncrypt() {
  const [file, setFile] = useState(null);
  const [encryptedFile, setEncryptedFile] = useState(null);
  const [password, setPassword] = useState('');
  const [encryptedFileUrl, setEncryptedFileUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log('file', file);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEncrypt = () => {
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
      <h2>Encrypt File</h2>
      <input type="file" onChange={handleFileChange} />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
      />
      <button onClick={handleEncrypt}>Encrypt File</button>
      {encryptedFile && (
        <div>
          <h3>Encrypted File:</h3>
          {/* <textarea
            value={encryptedFile}
            readOnly
            rows="10"
            cols="50"
          ></textarea>
          <br /> */}
          <a href={encryptedFileUrl} download={`encrypt-${file}.txt`}>
            Download Encrypted File
          </a>
        </div>
      )}
    </div>
  );
}

export default FileEncrypt;
