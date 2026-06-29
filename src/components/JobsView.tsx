import type { Job } from "@prisma/client";
import { SearchInput } from "./SearchInput";
import { FiltersTab } from "./FiltersTab";
import { JobCard } from "./JobCard";

type JobsViewProps = {
  jobs: Job[];
};

export function JobsView({ jobs }: JobsViewProps) {
  return (
    <main className="py-4 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-3">
        <h1 className="font-bold text-3xl">Jobs</h1>
        <div className="flex flex-col gap-5">
          <SearchInput />
          <FiltersTab />
          <ul className="flex flex-col gap-5">
            {jobs.map((job) => (
              <li key={job.id}>
                <JobCard job={job} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
