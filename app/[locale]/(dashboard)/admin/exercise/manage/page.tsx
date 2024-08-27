import ExerciseManage from "@/components/admin/exercise/ExerciseManage";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import { useTranslations } from "next-intl";

const Page = () => {
  const admin = useTranslations("admin");
  const dashboard = admin.raw("dashboard");
  return (
    <BackLinkWrapper
      href="/admin"
      title={dashboard.backToDashboard}
      // title="Back To Dashboard"
    >
      <ExerciseManage />
    </BackLinkWrapper>
  );
};

export default Page;
