import type { SelectStatusType } from "@/constants/selectItems";
import clsx from "clsx";

type SelectItemProps = {
  label: SelectStatusType;
  onSelect: (value: SelectStatusType) => void;
  activeValue: SelectStatusType;
};
export function SelectItem({ label, onSelect, activeValue }: SelectItemProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(label)}
      className={clsx(
        activeValue === label ? "bg-blue/30" : "",
        "px-1.5 py-1.5 hover:bg-blue/15 cursor-pointer text-purple transition-all duration-300",
      )}
    >
      {label}
    </button>
  );
}
