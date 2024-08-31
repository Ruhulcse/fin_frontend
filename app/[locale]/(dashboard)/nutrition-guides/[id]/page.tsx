import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import NutritionGuideView from "@/components/nutrition-guides/NutritionGuideView";
import { useTranslations } from "next-intl";

const Page = ({ params }: { params: { id: string } }) => {
  const admin = useTranslations("admin");
  const { backToDashboard } = admin.raw("dashboard");
  return (
    <BackLinkWrapper href="/admin" title={backToDashboard}>
      <NutritionGuideView id={params?.id} />
    </BackLinkWrapper>
  );
};

export default Page;
