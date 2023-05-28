import React from 'react';

import { Promptato } from './promptato';

const Page = () => (
  <main className="flex min-h-screen flex-col items-center py-24 px-4" data-theme="mint">
    <div className="relative flex place-items-center flex-col my-24 max-w-4xl">
      <h1 className="text-4xl sm:text-6xl text-center font-bold pb-4">
        Simply <span className="text-primary">Translate</span> to English 🌍
      </h1>
      <h2 className="text-lg sm:text-xl text-center text-slate-700">
        A simple alternative to your daily translator. Detects the submitted language and translates it to english..
      </h2>
    </div> 

    <section className="w-full max-w-xl">
      <Promptato resultTitle="Your translation" />
    </section>
  </main>
);

export default Page;
