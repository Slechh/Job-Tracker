"use client";

import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Select } from "@/components/Select";
import { FormInputs } from "@/components/FormInputs";
import { FormTextarea } from "@/components/FormTextareas";

import type { JobFormData } from "@/types/job";

import { createJob, updateJob } from "@/api/jobs";
import clsx from "clsx";

type JobFormProps = {
  variant: "create" | "edit";
  defaultValues: JobFormData;
  jobId?: number;
  isDisabled?: boolean;
  setIsDisabled?: (data: boolean) => void;
};

export function JobForm({
  variant,
  defaultValues,
  jobId,
  isDisabled,
  setIsDisabled,
}: JobFormProps) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JobFormData>({
    defaultValues,
  });

  const router = useRouter();

  const onSubmit = async (data: JobFormData) => {
    if (variant === "create") {
      try {
        await createJob(data);
        toast.success("Job created successfully!");
        reset();
      } catch {
        toast.error("Failed to create job!");
      }
    }
    if (variant === "edit") {
      try {
        await updateJob(jobId, data);
        router.refresh();
        toast.success("Job edited successfully!");
        setIsDisabled?.(true);
      } catch (error) {
        console.log(error);
        toast.error("Failed to edit job!");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className={clsx(
        variant === "create"
          ? "bg-white rounded-md border border-soft-slate px-5 py-4 flex flex-col gap-10"
          : "",
      )}
    >
      {variant === "create" && (
        <>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              <FormInputs register={register} errors={errors} />
            </div>
            <div className="flex flex-col gap-5">
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onChange={field.onChange} />
                )}
              />
              <div className="flex flex-col gap-5">
                <FormTextarea register={register} />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-light-blue text-white px-4 py-1 rounded-sm hover:bg-blue-400 transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Save"}
            </button>
          </div>
        </>
      )}
      {variant === "edit" && (
        <>
          <div className="flex flex-col gap-10">
            {" "}
            <fieldset disabled={isDisabled}>
              <div className="grid grid-cols-3 gap-x-7 gap-y-2">
                <FormInputs register={register} errors={errors} />
                <FormTextarea register={register} />
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onChange={field.onChange} />
                  )}
                />
              </div>
            </fieldset>
            <div className="flex min-h-8 justify-end">
              {isDisabled === false && (
                <button
                  type="submit"
                  className="bg-light-blue text-white px-4 py-1 rounded-sm hover:bg-blue-400 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Editing..." : "Save"}
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </form>
  );
}
