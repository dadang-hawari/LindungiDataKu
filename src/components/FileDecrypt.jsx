import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function FileDecrypt() {
  const [file, setFile] = useState(null);
  const [encryptedFileContent, setEncryptedFileContent] = useState('');
  const [decryptedFile, setDecryptedFile] = useState(null);
  const [password, setPassword] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setEncryptedFileContent(e.target.result);
    };
    reader.readAsText(file);
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
    <div>
      <h2>Decrypt File</h2>
      <input type="file" onChange={handleFileChange} />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
      />
      <button onClick={handleDecrypt}>Decrypt File</button>
      {decryptedFile && (
        <div>
          <h3>Decrypted File:</h3>
          <a href={decryptedFile} download="decryptedFile">
            Download Decrypted File
          </a>
        </div>
      )}
    </div>
  );
}

export default FileDecrypt;
