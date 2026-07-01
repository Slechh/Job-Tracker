import { UseFormRegister } from "react-hook-form";

import { JobFormData } from "@/types/job";

import { textareaOptions } from "@/constants/textareaOptions";

type FormInputsProps = {
  register: UseFormRegister<JobFormData>;
};

export function FormTextarea({ register }: FormInputsProps) {
  return (
    <div className="flex flex-col gap-5">
      {textareaOptions.map((option) => (
        <div key={option.label} className="flex flex-col gap-1.5">
          <label htmlFor={option.forInfo}>{option.label}</label>
          <textarea
            id={option.forInfo}
            placeholder={option.placeholder}
            className="border border-soft-slate px-3 py-2 rounded-sm h-25 hover:border-blue-500 focus:border-amber-500 focus:outline-none transition-colors duration-500"
            {...register(option.forInfo)}
          />
        </div>
      ))}
    </div>
  );
}
