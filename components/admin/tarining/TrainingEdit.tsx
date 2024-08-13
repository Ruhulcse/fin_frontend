import { generateDataFromServer } from "@/lib/helper/server-fetch";
import TrainingForm from "./TrainingForm";
import { useTranslations } from "next-intl";

const TrainingEdit = async ({
  id,
  traineeId,
}: {
  id: string;
  traineeId: string;
}) => {
  const { data: training = {} } = await generateDataFromServer(
    `trainings/${id}`
  );
  const t = useTranslations("traineeDetails");
  const traineData = t.raw("traineeData");
  return (
    <section className="edit-workout grid gap-4 xl:gap-8">
      <h3 className="section-title text-right">{traineData.editTraining}</h3>
      <TrainingForm training={training} traineeId={traineeId} />
    </section>
  );
};

export default TrainingEdit;
