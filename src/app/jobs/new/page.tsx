"use client";

import { Controller, useForm } from "react-hook-form";

import { inputOptions } from "@/constants/inputOptions";
import type { JobFormData } from "@/types/job";
import { textareaOptions } from "@/constants/textareaOptions";
import { Select } from "@/components/Select";
import { createJob } from "@/api/jobs";
import { toast } from "sonner";

export default function NewJobPage() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<JobFormData>({
    defaultValues: {
      status: "Saved",
    },
  });

  const onSubmit = async (data: JobFormData) => {
    try {
      await createJob(data);
      toast.success("Job created successfully!");
      reset();
    } catch {
      toast.error("Failed to create job!");
    }
  };

  return (
    <main className="p-4">
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        <h1 className="font-bold text-3xl">Add Job</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="bg-white rounded-md border border-soft-slate px-5 py-4 flex flex-col gap-10"
        >
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-x-10 gap-y-5">
              {inputOptions.map((option) => (
                <div key={option.label} className="flex flex-col gap-1.5">
                  <label htmlFor={option.forInfo}>{option.label}</label>
                  <input
                    id={option.forInfo}
                    placeholder={option.placeholder}
                    className="border border-soft-slate px-3 py-2 rounded-sm hover:border-blue-500 focus:border-amber-500 focus:outline-none transition-colors duration-500"
                    {...register(option.forInfo, {
                      required: option.required
                        ? `${option.label} is required`
                        : false,
                    })}
                  />
                  {errors[option.forInfo] && (
                    <p className="text-sm text-red-500">
                      {errors[option.forInfo]?.message}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onChange={field.onChange} />
              )}
            />
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
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-light-blue text-white px-4 py-1 rounded-sm hover:bg-blue-400 transition-all duration-300"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
