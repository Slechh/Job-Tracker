"use client";

import { deleteJob } from "@/api/jobs";
import { Icon } from "./Icon";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type DeleteButtonProps = {
  jobId: number;
};

export function DeleteButton({ jobId }: DeleteButtonProps) {
  const router = useRouter();
  const onSubmit = async () => {
    try {
      await deleteJob(jobId);
      toast.success("Job deleted successfully!");
      router.push("/jobs");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete job!");
    }
  };
  return (
    <button className="flex justify-end" onClick={() => onSubmit()}>
      <div className="bg-light-gray p-2 rounded-md text-blue border-l-2">
        <Icon id="trash-icon" className="size-6" />
      </div>
    </button>
  );
}
