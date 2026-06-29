"use client";

import { useState } from "react";
import { clsx } from "clsx";

import { filterLabels } from "@/constants/filterLabels";

import type { FilterType } from "@/constants/filterLabels";

export function FiltersTab() {
  const [activeTab, setActiveTab] = useState<FilterType>("All");

  return (
    <div className="bg-white w-full rounded-md flex border border-soft-slate p-1">
      {filterLabels.map((item) => (
        <button
          key={item}
          className={clsx(
            activeTab === item && "bg-light-gray text-light-blue",
            "flex-1 py-1.5 px-2.5 rounded-sm transition-colors duration-300",
          )}
          onClick={() => setActiveTab(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
