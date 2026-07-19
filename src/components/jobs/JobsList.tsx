import { JobCard } from "./JobCard";
import { prisma } from "@/lib/prisma";
import { Prisma, JobStatus } from "@prisma/client";

import Link from "next/link";
import Image from "next/image";

type JobsListProps = {
  searchParams: Promise<{ status?: string; search?: string }>;
};

export async function JobsList({ searchParams }: JobsListProps) {
  const { status, search } = await searchParams;
  const where: Prisma.JobWhereInput = {};

  if (
    status &&
    status !== "All" &&
    Object.values(JobStatus).includes(status as JobStatus)
  ) {
    where.status = status as JobStatus;
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
          <Link href={`/jobs/${job.id}`}>
            <JobCard job={job} isOverview={true} />
          </Link>
        </li>
      ))}
      {jobs.length < 1 && (
        <div className="flex flex-col gap-4 items-center justify-center">
          <Image
            src="/images/empty-job.png"
            alt="Job vacancy empty"
            width={500}
            height={500}
          />
          <p className="text-2xl font-bold">Empty...</p>
        </div>
      )}
    </ul>
  );
}
