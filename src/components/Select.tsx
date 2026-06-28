import { useState } from "react";
import clsx from "clsx";

import { Icon } from "./Icon";
import { selectStatusItems } from "@/constants/selectItems";
import { SelectItem } from "./SelectItem";

import type { SelectStatusType } from "@/constants/selectItems";

type SelectProps = {
  value: SelectStatusType;
  onChange: (value: SelectStatusType) => void;
};

export function Select({ value, onChange }: SelectProps) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="w-1/3 relative flex flex-col gap-1.5">
      <label htmlFor="status">Status</label>
      <button
        type="button"
        onClick={() => setIsClicked((prev) => !prev)}
        className="flex flex-col items-center border border-soft-slate w-full rounded-sm px-3 py-2"
      >
        <div className="flex items-center gap-2">
          <p>{value}</p>
          <Icon
            id="chevron-icon"
            className={clsx(
              isClicked && "rotate-180",
              "size-3 transition-all duration-300",
            )}
          />
        </div>
      </button>
      {isClicked && (
        <div className="absolute flex flex-col bg-white w-full border mt-1 border-soft-slate top-full z-20">
          {selectStatusItems.map((item) => (
            <SelectItem
              key={item}
              label={item}
              onSelect={(value) => {
                onChange(value);
                setIsClicked(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
