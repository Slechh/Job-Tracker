import { JobCardSkeleton } from "./JobCardSkeleton";

export function JobsListSkeleton() {
  return (
    <ul className="flex flex-col gap-5">
      {Array.from({ length: 3 }).map((_, index) => (
        <li key={index}>
          <JobCardSkeleton />
        </li>
      ))}
    </ul>
  );
}
