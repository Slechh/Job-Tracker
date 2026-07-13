import { StatusInfo } from "@/components/StatusInfo";
import { StatusInfoSkeleton } from "@/components/StatusInfoSkeleton";
import { Suspense } from "react";

export default async function DashboardPage() {
  return (
    <main className="py-4 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-3">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <Suspense fallback={<StatusInfoSkeleton />}>
          <StatusInfo />
        </Suspense>
      </div>
    </main>
  );
}
