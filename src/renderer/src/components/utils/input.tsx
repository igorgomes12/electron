import React from "react";
import { FieldErrors } from "react-hook-form";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  errors: FieldErrors;
  disabled: boolean;
}
export function Input({ id, type, errors, disabled }: IInput) {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        placeholder=""
        disabled={disabled}
        className={`disabled:cursor-default h-10 p-2 text-md peer w-full rounded-lg border-2 border-solid border-gray-300 bg-gray-50 px-2 font-medium text-black focus:border-white focus:ring-white disabled:bg-gray-400 ${
          errors[id]
            ? "border-rose-500 focus:border-rose-500"
            : "border-neutral-300 focus:border-black"
        }`}
      />
    </div>
  );
}
