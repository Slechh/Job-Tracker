import Link from "next/link";

import { Icon } from "@/components/Icon";
import type { Job } from "@prisma/client";

type JobCardProps = {
  job: Job;
};

export function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/jobs/${job.id}`}>
      <div
        className="relative flex px-5 py-4 bg-white border border-soft-slate rounded-md justify-between before:content-[''] before:h-full before:w-1  
        before:absolute before:rounded-l-md before:top-0 before:left-0 hover:before:bg-light-blue hover:shadow-[0_0_10px_rgba(0,0,0,0.08)] before:transition-all before:duration-300 transition-shadow duration-300"
      >
        <div className="flex gap-4.5 items-center">
          <div className="size-30 rounded-full bg-light-gray flex items-center justify-center text-2xl font-bold">
            {job.company[0]}
          </div>
          <div className="flex flex-col gap-3.75">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">{job.position}</h2>
              <p className="text-md">
                {job.company} / {job.location}
              </p>
            </div>
            <div className="flex flex-col">
              <ul className="flex flex-col gap-0.5">
                <li className="flex gap-4 items-center text-md">
                  <h5 className="w-24.5 text-gray-500">Added:</h5>
                  <p>{new Date(job.createdAt).toLocaleDateString("uk-UA")}</p>
                </li>
                <li className="flex gap-4 items-center text-md">
                  <h5 className="w-24.5 text-gray-500">Salary:</h5>
                  <p>{job.salary}</p>
                </li>
                <li className="flex gap-4 items-center text-md">
                  <h5 className="w-24.5 text-gray-500">Technologies:</h5>
                  <p className="truncate w-130">{job.technologies}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="flex gap-2 items-center text-sm px-1 py-0.5 text-blue bg-soft-slate rounded-md">
            <Icon id="loading-icon" className="size-4" />
            {job.status.toUpperCase()}
          </h2>
        </div>
      </div>
    </Link>
  );
}
