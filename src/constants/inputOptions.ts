import type { JobFormData } from "@/types/job";

type InputOptions = {
  label: string;
  placeholder: string;
  forInfo: keyof JobFormData;
  required: boolean;
};

export const inputOptions: InputOptions[] = [
  {
    label: "Company",
    placeholder: "Enter company...",
    forInfo: "company",
    required: true,
  },
  {
    label: "Position",
    placeholder: "Enter position...",
    forInfo: "position",
    required: true,
  },
  {
    label: "Location",
    placeholder: "Enter location...",
    forInfo: "location",
    required: true,
  },
  {
    label: "Salary",
    placeholder: "Enter salary...",
    forInfo: "salary",
    required: true,
  },
  {
    label: "Technologies",
    placeholder: "Enter technologies...",
    forInfo: "technologies",
    required: true,
  },
  {
    label: "Link",
    placeholder: "Enter link...",
    forInfo: "link",
    required: true,
  },
];
