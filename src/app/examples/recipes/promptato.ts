"use client"

import { createPromptato } from "@/lib/createPromptato";

export const Promptato = createPromptato({
  dish: {
    component: 'input',
    label: 'What do you want to cook?'
  },
  time: {
    component: 'input',
    label: 'How many minutes do you have to cook?',
    type: 'number'
  }
}, [
  {
    role: 'system',
    content:
`You are a cooking assistant.
You will be given a dish and you shall respond with a recipe.
You will be given a maximum amount of minutes the recipe is allowed to take.
Format your response using markdown.`
  },
  {
    role: 'user',
    content: (inp) =>
`The dish is: ${inp.dish}.
The maximum cooking time is: ${inp.time}`
  }
])
