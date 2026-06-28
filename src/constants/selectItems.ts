export const selectStatusItems = [
  "Applied",
  "Interview",
  "Offer",
  "Saved",
  "Rejected",
] as const;

export type SelectStatusType = (typeof selectStatusItems)[number];
