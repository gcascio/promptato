import React from 'react';

import { Promptato } from './promptato';

const Page = () => (
  <main className="flex min-h-screen flex-col items-center py-24 px-4" data-theme="berry">
    <div className="relative flex place-items-center flex-col my-24 max-w-4xl">
      <h1 className="text-4xl sm:text-6xl text-center font-bold pb-4">
        Stories beyond  <span className="text-primary">Imagination 💭</span></h1>
      <h2 className="text-lg sm:text-xl text-center text-slate-700">
        Have a blast with personalized short stories of your favorite genre.
      </h2>
    </div>

    <section className="w-full max-w-xl">
      <Promptato resultTitle="Your story" />
    </section>
  </main>
);

export default Page;
