import { JobCard } from "./JobCard";
import { prisma } from "@/lib/prisma";

export async function JobsList() {
  const jobs = await prisma.job.findMany({
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
