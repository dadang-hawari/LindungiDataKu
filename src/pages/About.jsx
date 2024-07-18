import Footer from '../components/common/Footer';
import DefaultNav from '../components/common/Navbar';
import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <DefaultNav />

      <div>
        <section className="mt-20  max-w-3xl px-4 mx-auto">
          <div className="w-full border border-gray-300 bg-gray-100 px-4 rounded-md py-2">
            <h2 className="font-bold ">Lindungi DataKu</h2>
            <p className="text-xs leading-5 mt-1">
              LDK (Lindungi DataKu) ditujukan untuk melindungi data-data file
              seperti docs, ppt, pdf, dan sebagainya dengan cepat dan aman yang
              memanfaatkan enkripsi AES-256 (Advanced Encryption Standard) .
            </p>
            <p className="text-xs leading-5 mt-1">
              Website ini dilengkapi dengan fitur PWA (Progressive Web App) yang
              membuatnya dapat diinstall dan digunakan secara offline.
            </p>
          </div>
        </section>
        <section className="mt-10  max-w-3xl px-4 mx-auto">
          <div className="w-full border border-green-200 bg-green-100 px-4 rounded-md py-2">
            <h2 className="text-gray-900 font-bold ">
              Oleh: Muh. Dadang Hawari
            </h2>
            <p className="text-gray-900 font-medium text-xs  leading-5 mt-1 ">
              {' '}
              Baparekraf Digital Talent 2024 - Upaya Keamanan Siber dan
              Ketahanan Digital
            </p>
            <p className="text-[10px]">©LDK - MDH</p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
