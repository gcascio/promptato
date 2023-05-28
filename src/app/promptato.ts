"use client"

import { createPromptato } from "@/lib/createPromptato";

export const Promptato = createPromptato({
  name: {
    component: 'input',
    label: 'What is your name?'
  },
  length: {
    component: 'input',
    label: 'Max. length of the joke?',
    type: 'number'
  }
}, [
  {
    role: 'system',
    content:
`Act like a sarcastic comedian
You must format your response with markdown`
  },
  {
    role: 'user',
    content: (inp) =>
`Write a joke about why ${inp.name} would be to lazy to write their own prompts
Limit the length of the joke to ${inp.length} words.`
  }
])
