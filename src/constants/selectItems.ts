export const selectStatusItems = [
  "Saved",
  "Applied",
  "Interview",
  "Offer",
  "Rejected",
] as const;

export type SelectStatusType = (typeof selectStatusItems)[number];
