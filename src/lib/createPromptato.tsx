import type { ChatCompletionRequestMessage } from 'openai';

import { useCallback, useState } from 'react';
import ReactMarkdown from 'react-markdown'

import { Input, Select, Spinner, TextArea } from '@/components'
import type { InputComponent, SelectComponent, TextAreaComponent } from '@/components';

type ComponentSchema = Record<string, InputComponent | SelectComponent | TextAreaComponent>;

type Message<T extends ComponentSchema> = Omit<ChatCompletionRequestMessage, 'content'> & { content: string | ((input: ToKV<T>) => string)}

// Currently only the input types string and number are supported
type ToKV<T extends ComponentSchema> = {
  [I in keyof T]: T[I] extends { type: string }
    ? (T[I]['type'] extends 'number' ? number : string)
    : string;
};

type Values<T> = T[keyof T]

type Entries<T> = [keyof T, Values<T>][]

const FormElement: React.FC<InputComponent | SelectComponent | TextAreaComponent> = ({ name, component, initialValue, ...rest }) => {
  const props = { id: name, name, ...rest };

  switch (component) {
    case 'input':
      return <Input {...props as React.ComponentProps<typeof Input>} />  
    case 'select':
      return <Select {...props as React.ComponentProps<typeof Select>} />
    case 'textarea':
      return <TextArea {...props as React.ComponentProps<typeof TextArea>} />
    default:
      return null;
  }
}

export const createPromptato = <T extends ComponentSchema>(inputSchema: T, messages: Message<T>[]) => {
  const inputEntries = Object.entries(inputSchema) as Entries<T>;
  const inputItems = inputEntries.map(([name, entry]) => ({ name, type: 'string', ...entry }));

  const mapped = inputItems.map(({ name, type, initialValue }) => ({ [name]: initialValue || (type === 'string' ? '' : 0) }));
  const initialState: ToKV<T> = Object.assign({}, ...mapped );

  const formatMessages = (state: ToKV<T>) => messages.map(({ content, ...rest }) => ({
    content: typeof content === 'string' ? content : content(state as ToKV<T>),
    ...rest,
  }))

  const PromptatoForm = ({
    resultTitle
  }: { resultTitle?: string }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState(initialState);
    const [completion, setCompletion] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }, [formData]);
  
    const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(async (e) => {
      e.preventDefault();
  
      if (loading) {
        return;
      }
  
      try {
        setLoading(true);
  
        const response = await fetch('/api/prompt', {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
          }),
          body: JSON.stringify({
            messages: formatMessages(formData)
          }),
        });
  
        const { completion } = await response.json();
  
        if (!response.ok || !completion) {
          throw new Error('Something went wrong.');
        }
  
        setCompletion(completion);

        if (error) {
          setError(null);
        }
      } catch (e) {
        setError(`An error occurred: ${e}`);
      } finally {
        setLoading(false);
      }
    }, [formData, loading, error]);

    if (inputItems.length === 0) {
      return null;
    }
  
    return (
      <>
        <form className="w-full" action="/prompt" onSubmit={onSubmit}>
          {inputItems.map((item) => 
            <FormElement key={item.name} value={formData[item.name]} onChange={onChange} {...item} />
          )}
  
          <button
            className="w-full px-4 py-2 mt-4 rounded-xl text-white bg-primary flex justify-center font-bold"
            disabled={loading}
          >
            {loading ? <Spinner /> : 'Submit'}
          </button>
          {error && <p className="text-red-500 mt-2 text-center font-bold">Something went wrong.</p>}
        </form>
        {completion && (
          <>
            {resultTitle && <h3 className="mt-12 text-center text-2xl font-bold">{resultTitle}</h3>}
            <ReactMarkdown className="markdown">{completion}</ReactMarkdown>
          </>
        )}
      </>
    )
  }

  return PromptatoForm;
}

