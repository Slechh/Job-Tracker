import { useRouter, useSearchParams } from "next/navigation";

export function useUpdateParams(
  defaultValue: string,
  queryParam: string,
  path = "/jobs",
) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleAction = (data: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (data === defaultValue) {
      params.delete(queryParam);
    } else {
      params.set(queryParam, data);
    }

    router.push(`${path}?${params.toString()}`);
  };

  return { searchParams, handleAction };
}
