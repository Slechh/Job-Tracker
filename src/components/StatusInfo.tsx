import { prisma } from "@/lib/prisma";
import { StatusChart } from "./StatusChart";
import { colors } from "@/constants/colors";

export async function StatusInfo() {
  const stats = await prisma.job.groupBy({
    by: ["status"],
    _count: {
      status: true,
    },
  });

  const data = stats.map((item) => ({
    status: item.status,
    count: item._count.status,
    fill: colors[item.status],
  }));

  return (
    <div className="h-75 w-full bg-white py-4 px-5 rounded-xl border border-soft-slate">
      <h2 className="text-lg">Vacancy status</h2>
      <div className="h-[calc(100%-28px)]">
        <StatusChart data={data} />
      </div>
    </div>
  );
}
