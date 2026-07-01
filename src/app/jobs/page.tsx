import { Suspense } from "react";

import { SearchInput } from "@/components/jobs/SearchInput";
import { FiltersTab } from "@/components/jobs/FiltersTab";
import { JobsList } from "@/components/jobs/JobsList";
import { JobsListSkeleton } from "@/components/jobs/JobsListSkeleton";

type JobsPageProps = {
  searchParams: Promise<{ status?: string; search?: string }>;
};

export default async function JobsPage({ searchParams }: JobsPageProps) {
  return (
    <main className="py-4 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-3">
        <h1 className="font-bold text-3xl">Jobs</h1>
        <div className="flex flex-col gap-5">
          <SearchInput />
          <FiltersTab />
          <Suspense fallback={<JobsListSkeleton />}>
            <JobsList searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
