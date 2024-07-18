import React from 'react';

export default function Information() {
  return (
    <section className="mt-10  max-w-4xl px-4 mx-auto">
      <div className="w-full border border-gray-300 bg-gray-100 px-4 rounded-md py-2">
        <h2 className="font-bold ">Informasi:</h2>
        <p className="text-xs leading-5 mt-1">
          Website ini tidak menyimpan data yang kamu encrypt dan decrypt. Selain
          itu, website ini dilengkapi dengan fitur PWA (Progressive Web App)
          yang membuatnya kamu dapat menginstall dan menggunakannya secara
          offline.
        </p>
        <p className="text-xs leading-5 mt-1">
          Silahkan melakukan encrypt & decrypt dengan cepat dan aman.
        </p>
      </div>
    </section>
  );
}
