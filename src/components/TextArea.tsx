import React from "react";

type TextAreaProps = {
  label: string;
} & JSX.IntrinsicElements['textarea']

export type TextAreaComponent = {
  component: 'textarea';
  initialValue?: string;
} & TextAreaProps

export const TextArea = ({
  id,
  label,
  ...textAreaProps
}: TextAreaProps) => {
  return (
    <>
      <label className="mb-10 font-bold" htmlFor={id}>{label}</label>
      <textarea
        id={id}
        className="w-full px-4 py-2 my-2 placeholder:text-neutral-400 rounded-xl focus:outline-gray-500 mb-6 ring-2"
        autoComplete="off"
        {...textAreaProps}
      />
    </>
  )
}
