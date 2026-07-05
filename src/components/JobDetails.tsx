"use client";

import { Job } from "@prisma/client";
import { JobForm } from "./JobForm";
import { useState } from "react";
import { Icon } from "./Icon";
import clsx from "clsx";

type JobDetailsProps = {
  job: Job;
};

export function JobDetails({ job }: JobDetailsProps) {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className="flex flex-col bg-white rounded-md border border-soft-slate px-5 pt-8 pb-4 gap-5">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Vacation Information</h2>
        <button
          className={clsx(
            isDisabled ? "text-blue" : "text-red-500",
            "flex items-center justify-center gap-2.5",
          )}
          type="button"
          onClick={() => setIsDisabled((prev) => !prev)}
        >
          <Icon
            id={`${isDisabled ? "edit" : "close"}-icon`}
            className={clsx(isDisabled ? "size-4" : "size-6")}
          />
          <p>{isDisabled && "Edit Job"}</p>
        </button>
      </div>
      <JobForm
        defaultValues={{
          company: job.company,
          position: job.position,
          location: job.location ?? "",
          salary: job.salary ?? "",
          technologies: job.technologies ?? "",
          status: job.status,
          link: job.link ?? "",
          description: job.description ?? "",
          notes: job.notes ?? "",
        }}
        variant="edit"
        jobId={job.id}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
      />
    </div>
  );
}
