import NutritionGuidesAdd from "@/components/admin/nutrition-guides/NutritionGuidesAdd";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";

const page = () => {
  return (
    <BackLinkWrapper
      href="/admin/nutrition-guides/manage"
      title="חזרה למדריכי תזונה"
      // title="Back To Nutrition Guides"
    >
      <NutritionGuidesAdd />
    </BackLinkWrapper>
  );
};

export default page;
