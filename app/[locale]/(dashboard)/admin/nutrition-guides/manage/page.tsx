import NutritionGuidesManage from "@/components/admin/nutrition-guides/NutritionGuidesManage";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";

const Page = () => {
  return (
    <BackLinkWrapper
      href="/admin"
      title="חזרה ללוח המחוונים"
      // title="Back To Dashboard"
    >
      <NutritionGuidesManage />
    </BackLinkWrapper>
  );
};

export default Page;
