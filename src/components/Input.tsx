import React from "react";

type InputProps = {
  label: string;
} & JSX.IntrinsicElements['input']

export type InputComponent = {
  component: 'input';
  initialValue?: string | number;
  type?: 'string' | 'number'
} & InputProps

export const Input = ({
  id,
  label,
  ...inputProps
}: InputProps) => {
  return (
    <>
      <label className="mb-10 font-bold" htmlFor={id}>{label}</label>
      <input
        id={id}
        className="w-full px-4 py-2 my-2 placeholder:text-neutral-400 rounded-xl focus:outline-gray-500 mb-6 ring-2"
        autoComplete="off"
        {...inputProps}
      />
    </>
  )
}
