import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const jobs = await prisma.job.findMany();

  return (
    <main className="p-10">
      <h1>Jobs count: {jobs.length}</h1>

      {jobs.map((job) => (
        <div key={job.id}>
          {job.company} - {job.position}
        </div>
      ))}
    </main>
  );
}
