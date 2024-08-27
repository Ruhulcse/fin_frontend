import NutritionGuidesManage from "@/components/admin/nutrition-guides/NutritionGuidesManage";
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
      <NutritionGuidesManage />
    </BackLinkWrapper>
  );
};

export default Page;
