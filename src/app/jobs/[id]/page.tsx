import { DeleteButton } from "@/components/DeleteButton";
import { JobDetails } from "@/components/JobDetails";
import { JobCard } from "@/components/jobs/JobCard";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type JobInfoPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function JobInfoPage({ params }: JobInfoPageProps) {
  const { id } = await params;

  const job = await prisma.job.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!job) {
    notFound();
  }

  return (
    <main className="px-4 py-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-5">
        <JobCard job={job}>
          <DeleteButton jobId={job.id}/>
        </JobCard>
        <JobDetails job={job} />
      </div>
    </main>
  );
}
