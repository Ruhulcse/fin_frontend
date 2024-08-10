import { AutoComplete } from "@/components/common/AutoComplete";
import { axiosInstance } from "@/lib/helper/axios-api";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const WorkoutPredefined = ({
  userWorkouts,
  setValue,
  setExercises,
}: {
  userWorkouts: any;
  setValue: any;
  setExercises: any;
}) => {
  const stateChangeHandler = async ({ selectValue, inputValue }: any) => {
    try {
      if (selectValue) {
        const {
          data: { data: workout },
        } = await axiosInstance(`api/workouts/${selectValue}`);
        const {
          data: { data: workoutExercises },
        } = await axiosInstance(`api/admin/training/${selectValue}`);
        if (workout?.workout_id) {
          setValue("workout_name", workout.workout_name);
          setValue("workout_description", workout.workout_description);
          setExercises(
            workoutExercises.map((exercise: any) => ({
              manipulation: exercise?.manipulation ?? "",
              sets_to_do: exercise?.sets_to_do ?? 0,
              goal_weight: exercise?.goal_weight ?? 0,
              reps_to_do: exercise?.reps_to_do ?? 0,
              exercise_id: exercise?.exercise_id ?? null,
              trainer_exp: exercise?.trainer_exp ?? "",
              exercise_name: exercise?.Exercise?.name ?? "",
            }))
          );
        }
      } else {
        setValue("workout_name", inputValue);
      }
    } catch (error) {}
  };

  const userOptions = userWorkouts.map((workout: any) => ({
    value: workout?.workout_id,
    label: workout?.workout_name,
  }));
  const t = useTranslations("admin");
  const workoutData = t.raw("workout");
  return (
    <>
      <label className={cn("text-textPrimary text-right")}>
        {workoutData.name}
      </label>
      <AutoComplete options={userOptions} onValueChange={stateChangeHandler} />
    </>
  );
};

export default WorkoutPredefined;
