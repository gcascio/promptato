"use client"

import { createPromptato } from "@/lib/createPromptato";

export const Promptato = createPromptato({
  toTranslate: {
    component: 'textarea',
    label: 'What do you want to translate?'
  },
}, [
  {
    role: 'system',
    content:
`I want you to act as an English translator.
I will speak to you in any language and you will detect the language and translate it to english.
You must not change the meaning of the input.
Do not write any explanations.`
  },
  {
    role: 'user',
    content: (inp) => inp.toTranslate,
  }
])
