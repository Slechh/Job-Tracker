import { JobForm } from "@/components/JobForm";

export default function NewJobPage() {

  return (
    <main className="p-4">
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        <h1 className="font-bold text-3xl">Add Job</h1>
        <JobForm
          variant="create"
          defaultValues={{
            company: "",
            position: "",
            location: "",
            salary: "",
            technologies: "",
            status: "Saved",
            link: "",
            description: "",
            notes: "",
          }}
        />
      </div>
    </main>
  );
}
