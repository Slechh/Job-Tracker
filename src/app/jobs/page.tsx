import { Suspense } from "react";

import { SearchInput } from "@/components/SearchInput";
import { FiltersTab } from "@/components/FiltersTab";
import { JobsList } from "@/components/JobsList";
import { JobsListSkeleton } from "@/components/JobsListSkeleton";

export default function JobsPage() {
  return (
    <main className="py-4 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-3">
        <h1 className="font-bold text-3xl">Jobs</h1>
        <div className="flex flex-col gap-5">
          <SearchInput />
          <FiltersTab />
          <Suspense fallback={<JobsListSkeleton />}>
            <JobsList />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
