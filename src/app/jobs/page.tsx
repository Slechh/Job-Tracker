import { prisma } from "@/lib/prisma";
import { JobsView } from "@/components/JobsView";

export default async function JobsPage() {
  const jobs = await prisma.job.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return <JobsView jobs={jobs} />;
}
