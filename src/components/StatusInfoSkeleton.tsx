export function StatusInfoSkeleton() {
  return (
    <div className="animate-pulse h-75 w-full rounded-xl border border-soft-slate bg-white px-5 py-4">
      <div className="flex h-full flex-col">
        <div className="h-6 w-40 rounded bg-light-gray" />

        <div className="flex flex-1 flex-col items-center justify-center gap-6">
          <div className="size-40 rounded-full bg-light-gray" />

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-sm bg-light-gray" />
              <div className="h-4 w-16 rounded bg-light-gray" />
            </div>

            <div className="flex items-center gap-2">
              <div className="size-3 rounded-sm bg-light-gray" />
              <div className="h-4 w-20 rounded bg-light-gray" />
            </div>

            <div className="flex items-center gap-2">
              <div className="size-3 rounded-sm bg-light-gray" />
              <div className="h-4 w-14 rounded bg-light-gray" />
            </div>

            <div className="flex items-center gap-2">
              <div className="size-3 rounded-sm bg-light-gray" />
              <div className="h-4 w-14 rounded bg-light-gray" />
            </div>

            <div className="flex items-center gap-2">
              <div className="size-3 rounded-sm bg-light-gray" />
              <div className="h-4 w-18 rounded bg-light-gray" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
