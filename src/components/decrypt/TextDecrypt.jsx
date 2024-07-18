import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const TextDecrypt = () => {
  const [encrptedText, setEncText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [password, setPassword] = useState('');

  const handleDecrypt = () => {
    try {
      const bytes = CryptoJS.AES.decrypt(encrptedText, password);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      setDecryptedText(decrypted);
    } catch (error) {
      alert('Error decrypting the text. Check your input or key.');
    }
  };

  return (
    <div>
      <h2>Text Decrypter</h2>
      <textarea
        placeholder="Enter encrypted text"
        value={encrptedText}
        onChange={(e) => setEncText(e.target.value)}
        rows={5}
        cols={50}
        className="block"
      />
      <br />
      <input
        type="password"
        placeholder="secretkey"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleDecrypt}>Decrypt</button>
      <br />
      <textarea
        placeholder="Decrypted text"
        value={decryptedText}
        readOnly
        rows={5}
        cols={50}
      />
    </div>
  );
};

export default TextDecrypt;
