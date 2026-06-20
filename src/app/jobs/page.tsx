"use client";

import { Icon } from "@/components/Icon";

export default function JobsPage() {
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
                placeholder="Search jobs..."
                className="pl-4 pr-3 py-2.5 bg-white w-full rounded-md appearance-none border border-soft-blate hover:border-blue-500 focus:border-amber-500 focus:outline-none transition-colors duration-700"
              />
              <button
                type="submit"
                className="absolute size-9 bg-blue p-2 rounded-sm right-3 top-1/2    -translate-y-1/2 flex items-center justify-center hover:bg-light-blue cursor-pointer transition-colors duration-300"
              >
                <Icon id="search-icon" className="text-white size-9" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
