import React from 'react';

export default function Hero() {
  return (
    <>
      <h1 className="mt-20 font-bold text-3xl text-center text-white">
        Lindungi DataKu
      </h1>
      <div
        className="w-full h-[245px] absolute top-0 left-0 -z-50"
        style={{ backgroundImage: 'url(/assets/svgs/wave_blue.svg)' }}
      ></div>
    </>
  );
}
