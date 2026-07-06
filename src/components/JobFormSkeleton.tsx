export function JobFormSkeleton() {
  return (
    <div className="flex min-h-128 flex-col gap-5 rounded-md border border-soft-slate bg-white px-5 pt-8 pb-4 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-7 w-56 rounded bg-light-gray" />
        <div className="h-6 w-24 rounded bg-light-gray" />
      </div>

      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-3 gap-x-7 gap-y-9">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="h-4 w-24 rounded bg-light-gray" />
              <div className="h-10 w-full rounded-sm bg-light-gray" />
            </div>
          ))}

          <div className="flex flex-col gap-3">
            <div className="h-4 w-24 rounded bg-light-gray" />
            <div className="h-25 w-full rounded-sm bg-light-gray" />
          </div>

          <div className="flex flex-col gap-3">
            <div className="h-4 w-20 rounded bg-light-gray" />
            <div className="h-25 w-full rounded-sm bg-light-gray" />
          </div>

          <div className="flex flex-col gap-3">
            <div className="h-4 w-16 rounded bg-light-gray" />
            <div className="h-10 w-full rounded-sm bg-light-gray" />
          </div>
        </div>

        <div className="flex min-h-8 justify-end" />
      </div>
    </div>
  );
}
