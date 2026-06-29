export function JobCardSkeleton() {
  return (
    <div className="animate-pulse relative flex px-5 py-4 bg-white border border-soft-slate rounded-md justify-between">
      <div className="flex gap-4.5 items-center">
        <div className="size-30 rounded-full bg-gray-200" />

        <div className="flex flex-col gap-3.75">
          <div className="flex flex-col gap-2">
            <div className="h-6 w-56 rounded bg-gray-200" />
            <div className="h-4 w-36 rounded bg-gray-200" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="h-4 w-40 rounded bg-gray-200" />
            <div className="h-4 w-32 rounded bg-gray-200" />
            <div className="h-4 w-80 rounded bg-gray-200" />
          </div>
        </div>
      </div>

      <div className="h-7 w-24 rounded-md bg-gray-200" />
    </div>
  );
}
