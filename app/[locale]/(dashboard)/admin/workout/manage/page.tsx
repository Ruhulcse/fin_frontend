import WorkoutManage from "@/components/admin/workout/WorkoutManage";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";

const Page = ({ searchParams }: { searchParams: any }) => {
  const admin = useTranslations("admin");
  const dashboard = admin.raw("dashboard");
  if (!(searchParams?.trainee_id && searchParams?.training_id)) {
    redirect("/admin/trainee");
  }
  return (
    <BackLinkWrapper
      href={`/admin/trainee-details/${searchParams?.trainee_id}`}
      title={dashboard.backToTraineeDetails}
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
