import { useTranslations } from "next-intl";
import NutritionGuidesForm from "./NutritionGuidesForm";

const NutritionGuidesAdd = () => {
  const t = useTranslations("nutritionForm");
  const nutritionForm = t.raw("formLabel");
  return (
    <section className="add-nutrition-plan grid gap-4 xl:gap-8">
      <h3 className="section-title text-right">{nutritionForm.addNutrition}</h3>
      <NutritionGuidesForm nutritionForm={nutritionForm} />
    </section>
  );
};

export default NutritionGuidesAdd;
