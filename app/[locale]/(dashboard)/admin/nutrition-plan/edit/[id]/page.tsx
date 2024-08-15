import NutritionPlanEdit from "@/components/admin/nutrition-plan/NutritionPlanEdit";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <BackLinkWrapper
      href="/admin/nutrition-plan/manage"
      title="חזרה לתוכנית התזונה"
      // title="Back To Nutrition Plan"
    >
      <NutritionPlanEdit id={params?.id} />
    </BackLinkWrapper>
  );
};

export default page;
