"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { clsx } from "clsx";

import { filterLabels } from "@/constants/filterLabels";

export function FiltersTab() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeStatus = searchParams.get("status") ?? "All";

  const handleChoose = (status: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (status === "All") {
      params.delete("status");
    } else {
      params.set("status", status);
    }

    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <div className="bg-white w-full rounded-md flex border border-soft-slate p-1">
      {filterLabels.map((status) => (
        <button
          key={status}
          className={clsx(
            activeStatus === status && "bg-light-gray text-light-blue",
            "flex-1 py-1.5 px-2.5 rounded-sm transition-colors duration-300",
          )}
          onClick={() => handleChoose(status)}
        >
          {status}
        </button>
      ))}
    </div>
  );
}
