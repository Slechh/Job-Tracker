import { JobFormSkeleton } from "@/components/JobFormSkeleton";
import { JobInfoContet } from "@/components/JobInfoContent";
import { JobCardSkeleton } from "@/components/jobs/JobCardSkeleton";
import { Suspense } from "react";

type JobInfoPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function JobInfoPage({ params }: JobInfoPageProps) {
  const { id } = await params;
  return (
    <main className="px-4 py-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-5">
        <Suspense
          fallback={
            <>
              <JobCardSkeleton />
              <JobFormSkeleton />
            </>
          }
        >
          <JobInfoContet id={id} />
        </Suspense>
      </div>
    </main>
  );
}
