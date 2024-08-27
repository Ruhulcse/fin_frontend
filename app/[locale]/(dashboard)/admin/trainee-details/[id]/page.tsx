import TraineeDetails from "@/components/admin/trainee-details/TraineeDetails";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import { useTranslations } from "next-intl";

const Page = ({ params }: { params: { id: string } }) => {
  const admin = useTranslations("admin");
  const dashboard = admin.raw("dashboard");
  return (
    <BackLinkWrapper
      href="/admin/trainee"
      title={dashboard.backToTrainee}
      // title="Back To Trainee"
    >
      <TraineeDetails id={params?.id} />
    </BackLinkWrapper>
  );
};

export default Page;
