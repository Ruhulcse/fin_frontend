import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const WorkingExerciseInfo = ({
  workProgramDetails,
  extraClasses = "",
}: any) => {
  const t = useTranslations("workoutProgramm");
  const details = t.raw("workoutDetails");
  return (
    <section className={cn("work-start-input", extraClasses)}>
      <div className="flex-center-between work-input-header">
        <h3 className="section-title">{details.done}</h3>
        <h3 className="section-title">{details.target}</h3>
      </div>
      <div className="start-input-area">
        <div className="flex-center-between input">
          <strong className="underline">
            {workProgramDetails?.sets_to_do ?? 0}
          </strong>
          <div className="start-info">
            <strong>{details.sets}</strong>
            <small>{workProgramDetails?.sets_to_do ?? 0}</small>
          </div>
        </div>
        <div className="flex-center-between input">
          <strong className="underline">
            {workProgramDetails?.reps_to_do ?? 0}
          </strong>
          <div className="start-info">
            <strong>{details.reps}</strong>
            <small>{workProgramDetails?.reps_to_do ?? 0}</small>
          </div>
        </div>
        <div className="flex-center-between input">
          <strong className="underline">
            {workProgramDetails?.last_set_weight ?? 0}
          </strong>
          <div className="start-info">
            <strong>{details.weight}</strong>
            <small>{workProgramDetails?.goal_weight ?? 0}</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingExerciseInfo;
