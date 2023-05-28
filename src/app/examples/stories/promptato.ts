"use client"

import { createPromptato } from "@/lib/createPromptato";

export const Promptato = createPromptato({
  genre: {
    component: 'select',
    label: 'What genre should the story be?',
    options: [
      'Sci-Fi',
      'Fantasy',
    ]
  },
  age: {
    component: 'input',
    label: 'For what age should the story bee?',
    type: 'number'
  }
}, [
  {
    role: 'system',
    content:
`You are a story author.
You will write a story to a given genre.
You must keep the story under 300 words.
Format your response using markdown.`
  },
  {
    role: 'user',
    content: (inp) =>
`The genre is is: ${inp.genre}.
The story must be written appropriate for a person of age ${inp.age}.`
  }
])
