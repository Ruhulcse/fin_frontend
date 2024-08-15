import WorkoutManage from "@/components/admin/workout/WorkoutManage";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import { redirect } from "next/navigation";

const Page = ({ searchParams }: { searchParams: any }) => {
  if (!(searchParams?.trainee_id && searchParams?.training_id)) {
    redirect("/admin/trainee");
  }
  return (
    <BackLinkWrapper
      href={`/admin/trainee-details/${searchParams?.trainee_id}`}
      title="חזרה לפרטי החניך"
      // title="Back To Trainee Details"
    >
      <WorkoutManage
        traineeId={searchParams?.trainee_id}
        trainingId={searchParams?.training_id}
      />
    </BackLinkWrapper>
  );
};

export default Page;
