import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import NutritionGuides from "@/components/nutrition-guides/NutritionGuides";
import { useTranslations } from "next-intl";

const Page = () => {
  const admin = useTranslations("admin");
  const { backToDashboard } = admin.raw("dashboard");
  return (
    <BackLinkWrapper href="/admin" title={backToDashboard}>
      <NutritionGuides />
    </BackLinkWrapper>
  );
};

export default Page;
