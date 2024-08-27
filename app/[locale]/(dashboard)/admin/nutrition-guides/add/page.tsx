import NutritionGuidesAdd from "@/components/admin/nutrition-guides/NutritionGuidesAdd";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import { useTranslations } from "next-intl";

const Page = () => {
  const admin = useTranslations("admin");
  const dashboard = admin.raw("dashboard");
  return (
    <BackLinkWrapper
      href="/admin/nutrition-guides/manage"
      title={dashboard.backToNutritionGuides}
      // title="Back To Nutrition Guides"
    >
      <NutritionGuidesAdd />
    </BackLinkWrapper>
  );
};

export default Page;
