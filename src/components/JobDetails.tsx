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
  return (
    <div className="flex flex-col bg-white rounded-md border border-soft-slate px-5 pt-8 pb-4 gap-5">
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
      />
    </div>
  );
}
