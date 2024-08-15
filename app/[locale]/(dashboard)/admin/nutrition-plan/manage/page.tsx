import NutritionPlanManage from "@/components/admin/nutrition-plan/NutritionPlanManage";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";

const Page = () => {
  return (
    <BackLinkWrapper
      href="/admin"
      title="חזרה ללוח המחוונים"
      // title="Back To Dashboard"
    >
      <NutritionPlanManage />
    </BackLinkWrapper>
  );
};

export default Page;
