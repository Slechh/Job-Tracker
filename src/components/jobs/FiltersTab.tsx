"use client";

import { clsx } from "clsx";
import { useUpdateParams } from "@/hooks/useUpdateParams";

import { filterLabels } from "@/constants/filterLabels";

export function FiltersTab() {
  const { searchParams, handleAction } = useUpdateParams("All", "status");
  const activeStatus = searchParams.get("status") ?? "All";

  return (
    <div className="bg-white w-full rounded-md flex border border-soft-slate p-1">
      {filterLabels.map((status) => (
        <button
          key={status}
          className={clsx(
            activeStatus === status && "bg-light-gray text-light-blue",
            "flex-1 py-1.5 px-2.5 rounded-sm transition-colors duration-300",
          )}
          onClick={() => handleAction(status)}
        >
          {status}
        </button>
      ))}
    </div>
  );
}
