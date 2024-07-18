import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const TextEncrypt = () => {
  const [plainText, setPlainText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [password, setPassword] = useState('');

  const handleEncrypt = () => {
    const encrypted = CryptoJS.AES.encrypt(plainText, password).toString();
    setEncryptedText(encrypted);
  };

  return (
    <div>
      <h2>Text Encrypter</h2>
      <textarea
        placeholder="Enter text to encrypt"
        value={plainText}
        onChange={(e) => setPlainText(e.target.value)}
        rows={5}
        className="block"
        cols={50}
      />
      <input
        type="password"
        placeholder="secretkey"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <button onClick={handleEncrypt}>Encrypt</button>
      <br />
      <textarea
        placeholder="Encrypted text"
        value={encryptedText}
        readOnly
        rows={5}
        cols={50}
      />
    </div>
  );
};

export default TextEncrypt;
