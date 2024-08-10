import { useTranslations } from "next-intl";
import WorkingProgramSinglePrevData from "./WorkingProgramSinglePrevData";

const WorkingProgramPrevData = ({ prevWorkout }: any) => {
  const t = useTranslations("workoutProgramm");
  const details = t.raw("workoutDetails");
  const prevData = {
    Workout: prevWorkout?.Workout ?? "N/A",
    Exercise: prevWorkout?.Exercise ?? "N/A",
    Manipulation: prevWorkout?.Manipulation ?? "N/A",
    "Goal Weight": prevWorkout[details.goalWeight] ?? 0,
    "Weight Done": prevWorkout[details.weightDone] ?? 0,
    "Reps Target": prevWorkout[details.repsTarget] ?? 0,
    "Reps Done": prevWorkout[details.repsDone] ?? 0,
    "Sets Target": prevWorkout[details.setsTarget] ?? 0,
    "Sets Done": prevWorkout[details.setsDone] ?? 0,
  };

  if (!prevWorkout) {
    return null;
  }

  return (
    <div>
      <div className="semi-section-title text-right mb-4">
        {details.lastTrData}
      </div>
      <div className="bg-card p-4 rounded-md">
        <div className="grid grid-cols-2 md:grid-cols-3 text-textPrimary">
          {Object.keys(prevData).map((key, index) => (
            <WorkingProgramSinglePrevData
              key={index}
              label={key}
              value={prevWorkout[key] ?? "N/A"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingProgramPrevData;
