<p align="center">
  <picture>
    <img src="https://github.com/gcascio/promptato/blob/main/assets/banner.png" width="480" height="80" alt="Banner for Promptato">
  </picture>
</p>

## Intro
Sometimes you just want to map some user input to a prompt and present the result be it to share some magic with your friends and family or simply because you feel like a prompt potato.

<p align="center">
  <video width="100%" controls>
    <source src="https://github.com/gcascio/promptato/blob/main/assets/demo.mp4" type="video/mp4">
    Your browser does not support HTML video.
  </video>
</p>

### Technologies used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenAI API](https://platform.openai.com/docs/introduction)

:clapper: Examples

Have a look at the examples in `/app/examples` to get some inspiration about what is possible:

<p align="center">
  <picture>
    <img src="https://github.com/gcascio/promptato/blob/main/assets/examples.png" width="100%" alt="Examples of Promptato">
  </picture>
</p>

## :technologist: Usage

There is no package yet so this repo acts as template. Simply fork or clone it to get started.

```sh
# ssh
git clone
# https
git clone 
```

To start the application run

```
pnpm install
```

create a `env.local` file (see `env.example`) and run

```
pnpm dev
```

### Customizing

Using the higher order function `createPromptato` you can easily define a input-prompt mapping:

```typescript
// promptato.ts

import { createPromptato } from "@/lib/createPromptato";

export const Promptato = createPromptato({
  myInput: {
    component: 'input',
    label: 'What is your name?',
  },
}, [
  {
    role: 'system',
    content:
`You are a comedian making fun of the tch scene.
You will write a funny story about a topic you will receive.
You must limit the story to 100 words.
Format your response using markdown.`
  },
  {
    role: 'user',
    content: (inp) =>
      `${inp.myInput} feels lazy about writing prompts for LLM's.`
  }
])
```

The returned component `Promptato` can then be used in a page:

```tsx
// page.ts

import { Promptato } from './promptato';

const Page = () => (
  <main> 
    <h1>Feeling like a Prompt Potato?</h1>

    <Promptato />
  </main>
);

export default Page;
```

## :monocle_face: API

The API of promptato is simple and straightforward and self explanatory with the hep of the typings.
As shown in the example above `createPromptato` expects two arguments, the input definition and the prompt definition. All input values can be accessed in the prompt definition.

Each input of the input definition has the following properties:

| Property                                       | Required                       | Description                          |
| ---------------------------------------------- | ------------------------------ | ------------------------------------ |
| `component: 'input' \| 'select' \| 'textarea'` | Yes                            | The component type                   |
| `label: string`                                | Yes                            | Label describing the input           |
| `initialValue: string \| number`               | No                             | Initial value of the input component |
| `options: string[]`                            | Yes (for `'select'` component) | Options of select element            |

## :hammer_and_wrench: Contributing

Interested in contributing? Great!

To fix a bug or add a feature, follow these steps:

- Create a [Fork](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#forking-a-repository) of the repo
- Create a new branch (`git checkout -b your-branch`)
- Add your changes
- Commit your changes (`git commit -am 'feat: fantastic feature'`)
- Push the branch (`git push origin your-branch`)
- Create a [Pull Request](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#forking-a-repository)

## :raising_hand: FAQ

### Why Promptato
It is a reference to the famous "Couch Potato" cliche.
