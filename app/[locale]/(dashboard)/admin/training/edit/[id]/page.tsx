import TrainingEdit from "@/components/admin/tarining/TrainingEdit";
import WorkoutEdit from "@/components/admin/workout/WorkoutEdit";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import { useTranslations } from "next-intl";

const Page = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: any;
}) => {
  const admin = useTranslations("admin");
  const dashboard = admin.raw("dashboard");
  return (
    <BackLinkWrapper
      href={`/admin/training/manage?trainee_id=${searchParams?.trainee_id}`}
      title={dashboard.backToTrainingMng}
      // title="Back To Training Manage"
    >
      <TrainingEdit id={params?.id} traineeId={searchParams?.trainee_id} />
    </BackLinkWrapper>
  );
};

export default Page;
