import { UseFormRegister, FieldErrors } from "react-hook-form";

import { inputOptions } from "@/constants/inputOptions";

import { JobFormData } from "@/types/job";

type FormInputsProps = {
  register: UseFormRegister<JobFormData>;
  errors: FieldErrors<JobFormData>;
};

export function FormInputs({ register, errors }: FormInputsProps) {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-2">
      {inputOptions.map((option) => (
        <div key={option.label} className="flex flex-col gap-1.5">
          <label htmlFor={option.forInfo}>{option.label}</label>
          <input
            id={option.forInfo}
            placeholder={option.placeholder}
            className="border border-soft-slate px-3 py-2 rounded-sm hover:border-blue-500 focus:border-amber-500 focus:outline-none transition-colors duration-500"
            {...register(option.forInfo, {
              required: option.required ? `${option.label} is required` : false,
            })}
          />
          <p className="min-h-5 text-sm text-red-500">
            {errors[option.forInfo]?.message}
          </p>
        </div>
      ))}
    </div>
  );
}
