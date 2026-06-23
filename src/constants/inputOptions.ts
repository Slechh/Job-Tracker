import type { JobFormData } from "@/types/job";

type InputOptions = {
  label: string;
  placeholder: string;
  forInfo: keyof JobFormData;
};

export const inputOptions: InputOptions[] = [
  { label: "Company", placeholder: "Enter company...", forInfo: "company" },
  { label: "Position", placeholder: "Enter position...", forInfo: "position" },
  { label: "Location", placeholder: "Enter location...", forInfo: "location" },
  { label: "Salary", placeholder: "Enter salary...", forInfo: "salary" },
  {
    label: "Technologies",
    placeholder: "Enter technologies...",
    forInfo: "technologies",
  },
  { label: "Status", placeholder: "Enter status...", forInfo: "status" },
  { label: "Link", placeholder: "Enter link...", forInfo: "link" },
];
