import { JobStatus } from "@prisma/client";

export const selectStatusItems: JobStatus[] = [
  JobStatus.Applied,
  JobStatus.Interview,
  JobStatus.Offer,
  JobStatus.Saved,
  JobStatus.Rejected,
];

export type SelectStatusType = JobStatus;
