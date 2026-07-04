import { JobForm } from "@/components/JobForm";
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
        <JobCard job={job} />
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
    </main>
  );
}
