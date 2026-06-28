import type { SelectStatusType } from "@/constants/selectItems";

type SelectItemProps = {
  label: SelectStatusType;
  onSelect: (value: SelectStatusType) => void;
};
export function SelectItem({ label, onSelect }: SelectItemProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(label)}
      className="px-1.5 py-1.5 hover:bg-blue/15 cursor-pointer text-purple transition-all duration-300"
    >
      {label}
    </button>
  );
}
