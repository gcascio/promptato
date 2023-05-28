import { Promptato } from '@/app/promptato';

const Home = () => (
  <main className="flex flex-col items-center py-24 px-4" data-theme="default">
    <div className="relative flex place-items-center flex-col my-24 max-w-3xl">
      <h1 className="text-4xl sm:text-5xl text-center font-bold pb-4">
        Feeling Like a Prompt Potato🥔?
      </h1>
      <h2 className="text-lg sm:text-xl text-center text-slate-700">
        Build an AI tool in minutes. Prompt potato gives you an esy to use
        template to map user input to ChatGPT prompts and present the results
      </h2>
    </div> 

    <section className="w-full max-w-xl">
      <Promptato />
    </section>
  </main>
);

export default Home;
