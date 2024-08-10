"use client";
import { useEditUserWorkoutMutation } from "@/store/features/workout/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "sonner";
import BasicButton from "../common/BasicButton";
import WorkingProgramStartInput from "./WorkingProgramStartInput";
import { useTranslations } from "next-intl";

const WorkoutExercises = ({
  workoutExercises,
  setCurrentExercise,
  id,
}: any) => {
  const [tab, setTab] = useState(0);
  const router = useRouter();
  const t = useTranslations("workoutProgramm");
  const details = t.raw("workoutDetails");
  const [workoutExercisesData, setWorkoutExercisesData] = useState<any>({
    workout_id: id,
    exercises: workoutExercises?.map((exercise: any) => {
      return {
        sets_done: exercise?.sets_done ?? 0,
        reps_done: exercise?.reps_done ?? 0,
        last_set_weight: exercise?.last_set_weight ?? 0,
        training_id: exercise?.training_id,
      };
    }),
  });

  const [update, { isLoading }] = useEditUserWorkoutMutation();

  const tabChangeHandler = async (tab: number) => {
    setCurrentExercise(workoutExercises[tab]);
    setTab(tab);
  };

  const submitHandler = async () => {
    update(workoutExercisesData).then((res) => {
      if (res?.data) {
        toast.success("Exercises Updated");
        router.push("/workout-program");
      }
    });
  };

  useEffect(() => {
    if (workoutExercises?.length > 0) {
      setCurrentExercise(workoutExercises[0]);
    }
  }, [setCurrentExercise, workoutExercises]);

  return (
    <>
      {workoutExercises?.map((exercise: any, index: number) => (
        <WorkingProgramStartInput
          key={index}
          extraClass={`${tab !== index ? "hidden" : ""}`}
          workProgramDetails={exercise}
          setUpdatedData={setWorkoutExercisesData}
        />
      ))}

      <div className="actions flex justify-center xl:justify-end gap-2 xl:gap-4 mt-2">
        {workoutExercises?.length > 1 && tab !== 0 ? (
          <BasicButton
            onClick={() => tabChangeHandler(tab - 1)}
            disabled={isLoading}
            extraClasses="!w-full"
            hard
          >
            {details.prevExercise}
          </BasicButton>
        ) : null}
        {workoutExercises?.length > 1 && tab !== workoutExercises.length - 1 ? (
          <BasicButton
            onClick={() => tabChangeHandler(tab + 1)}
            disabled={isLoading}
            hard
            extraClasses="!w-full"
          >
            {details.nextExercise}
          </BasicButton>
        ) : null}
        {workoutExercises?.length > 0 && tab === workoutExercises.length - 1 ? (
          <BasicButton
            onClick={submitHandler}
            disabled={isLoading}
            extraClasses="!w-full flex justify-center gap-1 items-center"
          >
            {isLoading ? (
              <FaSpinner size={20} className="animate-spin" />
            ) : null}
            {details.finish}
          </BasicButton>
        ) : null}
      </div>
    </>
  );
};

export default WorkoutExercises;
