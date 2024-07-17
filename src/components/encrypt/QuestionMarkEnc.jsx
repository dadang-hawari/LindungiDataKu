import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export default function QuestionMarkEnc() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" absolute w-fit h-fit rounded-full top-0 -right-6 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className=" font-600   bg-gray-500 text-white rounded-full px-1 py-1 flex items-center text-xs">
        <FontAwesomeIcon icon={faQuestion} className="h-3 w-3" />
      </span>
      <div
        className={` ${
          isHovered ? 'opacity-100 ' : 'opacity-0 scale-0 '
        } transition-all absolute bottom-5 right-0 sm:left-0 w-56 overflow-auto bg-blue-400 text-white  shadow-[0_0_5px_0_rgb(0,0,0,0.3)] px-2 rounded-md`}
      >
        <p className="text-[11px] my-2 text-center font-medium">
          Gunakan secret key untuk menjaga data lebih aman, secret key ini
          digunakan untuk melakukan decrypt file yang telah diencrypt.
        </p>
      </div>
    </div>
  );
}
