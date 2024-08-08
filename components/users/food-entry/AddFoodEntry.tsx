import { useTranslations } from "next-intl";
import FoodEntryForm from "./FoodEntryForm";

const AddFoodEntry = ({ taskId }: { taskId: string }) => {
  const t = useTranslations("foodEntry");
  const formData = t.raw("foodForm");
  return (
    <section>
      <h3 className="section-title text-right mb-4">{formData.formTitle}</h3>
      <FoodEntryForm taskId={taskId} />
    </section>
  );
};

export default AddFoodEntry;
