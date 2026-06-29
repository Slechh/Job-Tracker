"use client";

import { useState } from "react";
import { clsx } from "clsx";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { filterLabels } from "@/constants/filterLabels";

import type { FilterType } from "@/constants/filterLabels";
import type { Job } from "@prisma/client";

type JobsView = {
  jobs: Job[];
};

export function JobsView({ jobs }: JobsView) {
  const [inputValue, setInputValue] = useState("");
  const [activeTab, setActiveTab] = useState<FilterType>("All");

  return (
    <main className="py-4 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-3">
        <h1 className="font-bold text-3xl">Jobs</h1>
        <div className="flex flex-col gap-5">
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
                  "flex-1 py-1.5 px-2.5 rounded-sm transition-colors duration-300",
                )}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <ul className="flex flex-col gap-5">
            {jobs.map((job) => (
              <li key={job.id}>
                <Link href={`/jobs/${job.id}`}>
                  <div
                    className="relative flex px-5 py-4 bg-white border border-soft-slate rounded-md justify-between before:content-[''] before:h-full before:w-1  
                    before:absolute before:rounded-l-md before:top-0 before:left-0 hover:before:bg-light-blue hover:shadow-[0_0_10px_rgba(0,0,0,0.08)] before:transition-all before:duration-300 transition-shadow duration-300"
                  >
                    <div className="flex gap-4.5 items-center">
                      <div className="size-30 rounded-full bg-light-gray flex items-center justify-center text-2xl font-bold">
                        {job.company[0]}
                      </div>
                      <div className="flex flex-col gap-3.75">
                        <div className="flex flex-col">
                          <h2 className="text-xl font-semibold">
                            {job.position}
                          </h2>
                          <p className="text-md">
                            {job.company} / {job.location}
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <ul className="flex flex-col gap-0.5">
                            <li className="flex gap-4 items-center text-md">
                              <h5 className="w-24.5 text-gray-500">Added:</h5>
                              <p>
                                {new Date(job.createdAt).toLocaleDateString()}
                              </p>
                            </li>
                            <li className="flex gap-4 items-center text-md">
                              <h5 className="w-24.5 text-gray-500">Salary:</h5>
                              <p>{job.salary}</p>
                            </li>
                            <li className="flex gap-4 items-center text-md">
                              <h5 className="w-24.5 text-gray-500">
                                Technologies:
                              </h5>
                              <p className="truncate w-130">
                                {job.technologies}
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h2 className="flex gap-2 items-center text-sm px-1 py-0.5 text-blue bg-soft-slate rounded-md">
                        <Icon id="loading-icon" className="size-4" />
                        {job.status.toUpperCase()}
                      </h2>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
