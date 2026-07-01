import { JobCard } from "./JobCard";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

type JobsListProps = {
  searchParams: Promise<{ status?: string; search?: string }>;
};

export async function JobsList({ searchParams }: JobsListProps) {
  const { status, search } = await searchParams;
  const where: Prisma.JobWhereInput = {};

  if (status && status !== "All") {
    where.status = status;
  }

  if (search) {
    where.OR = [
      { company: { contains: search, mode: "insensitive" } },
      { position: { contains: search, mode: "insensitive" } },
      { technologies: { contains: search, mode: "insensitive" } },
    ];
  }

  console.log(where);

  const jobs = await prisma.job.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <ul className="flex flex-col gap-5">
      {jobs.map((job) => (
        <li key={job.id}>
          <JobCard job={job} />
        </li>
      ))}
    </ul>
  );
}
