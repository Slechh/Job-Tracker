"use client";

import { Icon } from "@/components/Icon";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [inputValue, setInputValue] = useState(search ?? "");

  const handleChange = (search: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (search === "") {
      params.delete("search");
    } else {
      params.set("search", search);
    }

    router.push(`/jobs?${params.toString()}`);
  };

  return (
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
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="pl-4 pr-22 py-2.5 bg-white w-full rounded-md border border-soft-slate hover:border-blue-500 focus:border-amber-500 focus:outline-none transition-colors duration-500"
        />
        <div className="flex items-center gap-2 absolute top-1/2 -translate-y-1/2 right-3">
          {inputValue && (
            <button
              type="button"
              onClick={() => {
                setInputValue("");
                handleChange("");
              }}
              className="size-6 flex items-center justify-center"
            >
              <Icon id="delete-icon" className="text-red-500 size-3" />
            </button>
          )}
          <button
            type="submit"
            onClick={() => handleChange(inputValue)}
            className="size-9 bg-blue p-2 rounded-sm flex items-center justify-center hover:bg-light-blue transition-colors duration-300"
          >
            <Icon id="search-icon" className="text-white size-9" />
          </button>
        </div>
      </div>
    </form>
  );
}
