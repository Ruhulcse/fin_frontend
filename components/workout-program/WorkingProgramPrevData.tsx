import { useTranslations } from "next-intl";
import WorkingProgramSinglePrevData from "./WorkingProgramSinglePrevData";

const WorkingProgramPrevData = ({ prevWorkout }: any) => {
  const t = useTranslations("workoutProgramm");
  const details = t.raw("workoutDetails");
  const prevData = {
    [details.workout]: prevWorkout?.Workout ?? "N/A",
    [details.exercise]: prevWorkout?.Exercise ?? "N/A",
    [details.manipulation]: prevWorkout?.Manipulation ?? "N/A",
    [details.goalWeight]: prevWorkout[details.goalWeight] ?? 0,
    [details.weightDone]: prevWorkout[details.weightDone] ?? 0,
    [details.repsTarget]: prevWorkout[details.repsTarget] ?? 0,
    [details.repsDone]: prevWorkout[details.repsDone] ?? 0,
    [details.setsTarget]: prevWorkout[details.setsTarget] ?? 0,
    [details.setsDone]: prevWorkout[details.setsDone] ?? 0,
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
