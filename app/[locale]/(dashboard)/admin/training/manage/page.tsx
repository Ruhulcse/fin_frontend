import TrainingManage from "@/components/admin/tarining/TrainingManage";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import { useTranslations } from "next-intl";

const Page = ({ searchParams }: { searchParams: any }) => {
  const admin = useTranslations("admin");
  const dashboard = admin.raw("dashboard");
  return (
    <BackLinkWrapper
      href={`/admin/trainee-details/${searchParams?.trainee_id}`}
      title={dashboard.backToTraineeDetails}
      // title="Back To Trainee Details"
    >
      <TrainingManage traineeId={searchParams?.trainee_id} />
    </BackLinkWrapper>
  );
};

export default Page;
