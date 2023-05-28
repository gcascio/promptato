import React from 'react';

import { Promptato } from './promptato';

const Page = () => (
  <main className="flex min-h-screen flex-col items-center py-24 px-4" data-theme="mustard">
    <div className="relative flex place-items-center flex-col my-24 max-w-4xl">
      <h1 className="text-4xl sm:text-6xl text-center font-bold pb-4">
        Every <span className="text-primary">Recipe</span> You Crave 🧑‍🍳</h1>
      <h2 className="text-lg sm:text-xl text-center text-slate-700">
        Looking for a recipe? Name dish you are looking for and how much time you have available.
      </h2>
    </div> 

    <section className="w-full max-w-xl">
      <Promptato resultTitle="Your recipe" />
    </section>
  </main>
);

export default Page;
