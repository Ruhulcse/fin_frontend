import WorkoutAdd from "@/components/admin/workout/WorkoutAdd";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import { redirect } from "next/navigation";

const page = ({ searchParams }: { searchParams: any }) => {
  if (!(searchParams?.trainee_id && searchParams?.training_id)) {
    redirect("/admin/trainee");
  }
  return (
    <BackLinkWrapper
      href={`/admin/workout/manage?trainee_id=${searchParams?.trainee_id}`}
      title="חזרה לניהול אימון"
      // title="Back To Workout Manage"
    >
      <WorkoutAdd
        traineeId={searchParams?.trainee_id}
        trainingId={searchParams?.training_id}
      />
      ;
    </BackLinkWrapper>
  );
};

export default page;
