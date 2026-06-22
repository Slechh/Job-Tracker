"use client";

import { useState } from "react";
import { clsx } from "clsx";

import { Icon } from "@/components/Icon";
import { filterLabels } from "@/constants/filterLabels";

import type { FilterType } from "@/constants/filterLabels";

export default function JobsPage() {
  const [inputValue, setInputValue] = useState("");
  const [activeTab, setActiveTab] = useState<FilterType>("All");

  return (
    <main className="py-4 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-3">
        <h1 className="font-bold text-3xl">Jobs</h1>
        <div className="flex flex-col gap-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                placeholder="Search jobs..."
                onChange={(e) => setInputValue(e.target.value)}
                className="pl-4 pr-22 py-2.5 bg-white w-full rounded-md border border-soft-slate hover:border-blue-500 focus:border-amber-500 focus:outline-none transition-colors duration-500"
              />
              <div className="flex items-center gap-2 absolute top-1/2 -translate-y-1/2 right-3">
                {inputValue && (
                  <button
                    type="button"
                    onClick={() => setInputValue("")}
                    className="size-6 flex items-center justify-center"
                  >
                    <Icon id="delete-icon" className="text-red-500 size-3" />
                  </button>
                )}
                <button
                  type="submit"
                  className="size-9 bg-blue p-2 rounded-sm flex items-center justify-center hover:bg-light-blue transition-colors duration-300"
                >
                  <Icon id="search-icon" className="text-white size-9" />
                </button>
              </div>
            </div>
          </form>
          <div className="bg-white w-full rounded-md flex border border-soft-slate p-1">
            {filterLabels.map((item) => (
              <button
                key={item}
                className={clsx(
                  activeTab === item && "bg-light-gray text-light-blue",
                  "flex-1 py-2.5 px-2.5 rounded-sm transition-colors duration-300",
                )}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
