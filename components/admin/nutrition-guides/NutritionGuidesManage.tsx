"use client";
import BasicCard from "@/components/common/BasicCard";
import NotDataFound from "@/components/common/message/NotDataFound";
import SkeletonGroup from "@/components/common/skeleton/SkeletonGroup";
import { useGetNutritionGuidesQuery } from "@/store/features/nutrition-guides/api";
import NutritionGuidesSmallInfo from "./NutritionGuidesSmallInfo";
import { useTranslations } from "next-intl";

const NutritionGuidesManage = () => {
  const { data = {}, isLoading } = useGetNutritionGuidesQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const { data: guides = [] } = data || {};
  const t = useTranslations("nutritionForm");
  const nutritionForm = t.raw("formLabel");
  return (
    <section className="nutrition-plan-list-area">
      <h3 className="section-title text-right mb-4 xl:mb-8">
        {nutritionForm.mngNutrition}
      </h3>
      <BasicCard link="/admin/nutrition-guides/add">
        <strong>{nutritionForm.addNutrition}</strong>
      </BasicCard>
      <br />
      {isLoading ? (
        <div className="grid grid-cols-1 gap-4">
          <SkeletonGroup count={3} />
        </div>
      ) : guides?.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {guides?.map((guide: any, index: number) => (
            <NutritionGuidesSmallInfo guide={guide} key={index} />
          ))}
        </div>
      ) : (
        <NotDataFound />
      )}
    </section>
  );
};

export default NutritionGuidesManage;
