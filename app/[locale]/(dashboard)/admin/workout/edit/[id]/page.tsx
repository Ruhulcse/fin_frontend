import WorkoutEdit from "@/components/admin/workout/WorkoutEdit";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";

const Page = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: any;
}) => {
  const admin = useTranslations("admin");
  const workout = admin.raw("workout");
  if (!(searchParams?.trainee_id && searchParams?.training_id)) {
    redirect("/admin/trainee");
  }
  return (
    <BackLinkWrapper
      href={`/admin/workout/manage?trainee_id=${searchParams?.trainee_id}`}
      title={workout.backToWorkoutMng}
      // title="Back To Workout Manage"
    >
      <WorkoutEdit
        id={params?.id}
        traineeId={searchParams?.trainee_id}
        trainingId={searchParams?.training_id}
      />
    </BackLinkWrapper>
  );
};

export default Page;
