import NutritionPlanEdit from "@/components/admin/nutrition-plan/NutritionPlanEdit";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import { useTranslations } from "next-intl";

const Page = ({ params }: { params: { id: string } }) => {
  const admin = useTranslations("admin");
  const dashboard = admin.raw("dashboard");
  return (
    <BackLinkWrapper
      href="/admin/nutrition-plan/manage"
      title={dashboard.backToNutritionPlan}
      // title="Back To Nutrition Plan"
    >
      <NutritionPlanEdit id={params?.id} />
    </BackLinkWrapper>
  );
};

export default Page;
