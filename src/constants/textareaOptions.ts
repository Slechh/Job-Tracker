import type { JobFormData } from "@/types/job";

type textareaOptions = {
  label: string;
  placeholder: string;
  forInfo: keyof JobFormData;
};

export const textareaOptions: textareaOptions[] = [
  {
    label: "Description",
    placeholder: "Enter description...",
    forInfo: "description",
  },
  {
    label: "Notes",
    placeholder: "Enter notes...",
    forInfo: "notes",
  },
];
