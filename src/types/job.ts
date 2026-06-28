import type { SelectStatusType } from "@/constants/selectItems";

export type JobFormData = {
  company: string;
  position: string;
  location: string;
  salary: string;
  technologies: string;
  status: SelectStatusType;
  link: string;
  description: string;
  notes: string;
};
