import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { z } from "zod";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const MessageSchema = z.array(z.object({
  role: z.enum(['system', 'user', 'assistant']),
  content: z.string(),
  name: z.string().optional(),
}))

export async function POST(req: Request) {
  console.log('== req: ');

  const body = await req.json();

  console.log('== body: ', body);

  if (!MessageSchema.safeParse(body?.messages).success) {
    return new NextResponse('Malformed messages', { status: 400 });
  }

  const messages = body.messages;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      max_tokens: 500,
      temperature: 0,
    });

    console.log(completion);

    const completionContent = completion.choices?.[0]?.message.content?.trim()

    console.log(completionContent);

    if (!completionContent) {
      throw new Error('No completion present');
    }

    return NextResponse.json({ completion: completionContent });
  } catch (e) {
    console.error(e);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
