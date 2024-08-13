import BasicCard from "@/components/common/BasicCard";
import { getTranslations } from "next-intl/server";
import FoodReport from "./FoodReport";
import MeasurementReport from "./MeasurementReport";
import TrainingReport from "./TrainingReport";

const TraineeActions = async ({ trainee }: { trainee: any }) => {
  const t = await getTranslations("admin");
  const traineInfo = t.raw("traineeDetails");
  return (
    <>
      <div className="grid gap-2 xl:gap-4">
        <h4 className="semi-section-title text-right">{traineInfo.add}</h4>
        <BasicCard
          link={`/admin/training/manage?trainee_id=${trainee?.user_id}`}
        >
          <strong>{traineInfo.trainingMng}</strong>
        </BasicCard>
        <BasicCard
          link={`/admin/user-nutrition-plan?trainee_id=${trainee?.user_id}`}
        >
          <strong>{traineInfo.nutritionPlan}</strong>
        </BasicCard>
      </div>
      <MeasurementReport trainee={trainee} />
      <FoodReport trainee={trainee} />
      <div className="grid gap-2 xl:gap-4">
        <h4 className="semi-section-title text-right">
          {traineInfo.agreement}
        </h4>
        <BasicCard link={`/agreements/${trainee?.user_id}`}>
          <strong>{traineInfo.userAgreement}</strong>
        </BasicCard>
      </div>
      <TrainingReport trainee={trainee} />
    </>
  );
};

export default TraineeActions;
