import type { JobFormData } from "@/types/job";

export async function createJob(data: JobFormData) {
  const response = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function getJobs() {
  const response = await fetch("api/jobs");

  return response.json();
}

export async function updateJob(id: number | undefined, data: JobFormData) {
  const response = await fetch(`/api/jobs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function deleteJob(id: number) {
  const response = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete job");
  }
  
  return response.json();
}
