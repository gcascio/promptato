import React from "react";

type SelectProps = {
  label: string;
  options?: string[];
} & JSX.IntrinsicElements['select']

export type SelectComponent = {
  component: 'select';
  initialValue?: string;
} & SelectProps

export const Select = ({
  id,
  label,
  options = [],
  ...selectProps
}: SelectProps) => {
  return (
    <>
      <label className="mb-10 font-bold" htmlFor={id}>{label}</label>
      <select
        id={id}
        className="w-full pl-4 pr-10 py-2 my-2 placeholder:text-neutral-400 rounded-xl focus:outline-gray-500 mb-6 ring-2"
        autoComplete="off"
        {...selectProps}
      >
        <option disabled value=""> -- select an option -- </option>
        {options.map((value) => <option key={value} value={value}>{value}</option>)}
      </select>
    </>
  )
}
