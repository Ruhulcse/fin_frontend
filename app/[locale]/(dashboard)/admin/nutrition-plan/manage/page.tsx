import NutritionPlanManage from "@/components/admin/nutrition-plan/NutritionPlanManage";
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
      <NutritionPlanManage />
    </BackLinkWrapper>
  );
};

export default Page;
