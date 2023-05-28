import React from 'react';

interface ExampleCardProps {
  title: string;
  description: string;
  emoji: string;
  href: string;
}

const ExampleCard = ({
  title,
  description,
  emoji,
  href,
}: ExampleCardProps) => (
  <a href={href} className="max-w-sm rounded-xl overflow-hidden shadow-lg m-auto border border-gray-200 h-full">
    <p className="text-8xl text-center p-4">{emoji}</p>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">
        {description}
      </p>
    </div>
  </a>
)

const Home = () => (
  <main className="flex min-h-screen flex-col items-center py-24 px-4">
    <div className="relative flex place-items-center flex-col my-24 max-w-4xl">
      <h1 className="text-4xl sm:text-6xl text-center font-bold pb-4">Promptato examples</h1>
      <h2 className="text-lg sm:text-xl text-center text-slate-700">
        Checkout some examples built using promptato.
      </h2>
    </div> 

    <section className="w-full max-w-4xl">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6">
        <ExampleCard
          title="Recipe search"
          description="Looking for a recipe? Name dish you are looking for and how much time you have available."
          emoji="🧑‍🍳"
          href="/examples/recipes"
        />
        <ExampleCard
          title="Engish translator"
          description="A simple alternative to your daily translator. Detects the submitted language and translates it to english."
          emoji="🌍"
          href="/examples/recipes"
        />
        <ExampleCard
          title="Personalized Stories"
          description="Have a blast with personalized short stories of your favorite genre."
          emoji="💭"
          href="/examples/recipes"
        />
      </div>
    </section>
  </main>
);

export default Home;
