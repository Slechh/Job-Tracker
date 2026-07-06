import { DeleteButton } from "@/components/DeleteButton";
import { JobDetails } from "@/components/JobDetails";
import { JobCard } from "@/components/jobs/JobCard";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type JobInfoContetProps = {
  id: string;
};

export async function JobInfoContet({ id }: JobInfoContetProps) {
  const job = await prisma.job.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!job) {
    notFound();
  }
  
  return (
    <>
      <JobCard job={job}>
        <DeleteButton jobId={job.id} />
      </JobCard>
      <JobDetails job={job} />
    </>
  );
}
