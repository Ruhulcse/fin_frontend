import NutritionPlanAdd from "@/components/admin/nutrition-plan/NutritionPlanAdd";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";

const page = () => {
  return (
    <BackLinkWrapper
      href="/admin/nutrition-plan/manage"
      title="חזרה לתוכנית התזונה"
      // title="Back To Nutrition Plan"
    >
      <NutritionPlanAdd />
    </BackLinkWrapper>
  );
};

export default page;
