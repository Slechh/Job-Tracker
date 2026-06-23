type JobPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function JobPage({ params }: JobPageProps) {
  const { id } = await params;

  return (
    <main className="px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1>Job Details</h1>
      </div>
    </main>
  );
}
