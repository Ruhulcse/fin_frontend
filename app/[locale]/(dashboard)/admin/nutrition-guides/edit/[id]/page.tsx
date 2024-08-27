import NutritionGuidesEdit from "@/components/admin/nutrition-guides/NutritionGuidesEdit";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import { useTranslations } from "next-intl";

const Page = ({ params }: { params: { id: string } }) => {
  const admin = useTranslations("admin");
  const dashboard = admin.raw("dashboard");
  return (
    <BackLinkWrapper
      href="/admin/nutrition-guides/manage"
      title={dashboard.backToNutritionGuides}
      // title="Back To Nutrition Guides"
    >
      <NutritionGuidesEdit id={params?.id} />
    </BackLinkWrapper>
  );
};

export default Page;
