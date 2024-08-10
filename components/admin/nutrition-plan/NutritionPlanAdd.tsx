import { useTranslations } from "next-intl";
import NutritionPlanForm from "./NutritionPlanForm";

const NutritionPlanAdd = () => {
  const t = useTranslations("nutritionForm");
  const nutritionForm = t.raw("formLabel");
  return (
    <section className="add-nutrition-plan grid gap-4 xl:gap-8">
      <h3 className="section-title text-right">
        {nutritionForm.nutritionPlan}
      </h3>
      <NutritionPlanForm nutritionForm={nutritionForm} />
    </section>
  );
};

export default NutritionPlanAdd;
