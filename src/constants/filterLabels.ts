export const filterLabels = [
  "All",
  "Saved",
  "Applied",
  "Interview",
  "Offer",
  "Rejected",
] as const;

export type FilterType = (typeof filterLabels)[number];
