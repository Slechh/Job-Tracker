"use client";

import { deleteJob } from "@/api/jobs";
import { Icon } from "./Icon";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Modal } from "./Modal";

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

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <button className="flex justify-end" onClick={() => setIsOpen(true)}>
        <div className="bg-light-gray p-2 rounded-md text-blue border-l-2">
          <Icon id="trash-icon" className="size-6" />
        </div>
      </button>
      {isOpen && (
        <Modal onClose={onClose}>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold flex justify-center">
                Delete Vacation
              </h2>
              <p>Are you sure you want delete this job?</p>
            </div>
            <div className="flex gap-5 justify-center mt-3">
              <button
                onClick={onClose}
                type="button"
                className="flex flex-1 justify-center items-center py-1 border border-blue rounded-md hover:bg-blue/10 transition-colors duration-300"
              >
                Close
              </button>
              <button
                onClick={onSubmit}
                type="button"
                className="flex justify-center items-center py-1 flex-1 text-white bg-blue rounded-md hover:bg-blue-500 transition-colors duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
