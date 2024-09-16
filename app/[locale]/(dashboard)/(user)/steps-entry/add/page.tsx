import AddStepsEntry from "@/components/users/steps-entry/AddStepsEntry";

const page = ({ searchParams }: { searchParams: any }) => {
  return <AddStepsEntry taskId={searchParams?.task_id} />;
};

export default page;
