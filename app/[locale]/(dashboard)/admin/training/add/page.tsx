import TrainingAdd from "@/components/admin/tarining/TrainingAdd";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import { useTranslations } from "next-intl";

const Page = ({ searchParams }: { searchParams: any }) => {
  const admin = useTranslations("admin");
  const dashboard = admin.raw("dashboard");
  return (
    <BackLinkWrapper
      href={`/admin/training/manage?trainee_id=${searchParams?.trainee_id}`}
      title={dashboard.backToTrainingMng}
      // title="Back To Training Manage"
    >
      <TrainingAdd traineeId={searchParams?.trainee_id} />;
    </BackLinkWrapper>
  );
};

export default Page;
