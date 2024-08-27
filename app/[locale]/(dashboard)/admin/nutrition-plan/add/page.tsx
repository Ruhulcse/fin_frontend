import NutritionPlanAdd from "@/components/admin/nutrition-plan/NutritionPlanAdd";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import { useTranslations } from "next-intl";

const Page = () => {
  const admin = useTranslations("admin");
  const dashboard = admin.raw("dashboard");
  return (
    <BackLinkWrapper
      href="/admin/nutrition-plan/manage"
      title={dashboard.backToNutritionPlan}
      // title="Back To Nutrition Plan"
    >
      <NutritionPlanAdd />
    </BackLinkWrapper>
  );
};

export default Page;
