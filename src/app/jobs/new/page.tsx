"use client";

import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Select } from "@/components/Select";
import { FormInputs } from "@/components/FormInputs";
import { FormTextarea } from "@/components/FormTextareas";

import type { JobFormData } from "@/types/job";

import { createJob } from "@/api/jobs";

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
          <div className="flex flex-col gap-2">
            <FormInputs register={register} errors={errors} />
            <div className="flex flex-col gap-5">
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onChange={field.onChange} />
                )}
              />
              <FormTextarea register={register} />
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
