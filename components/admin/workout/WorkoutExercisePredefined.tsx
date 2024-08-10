import { AutoComplete } from "@/components/common/AutoComplete";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";

const WorkoutExercisePredefined = ({
  exerciseOptions,
  setValue,
  getValues,
  disabled,
}: {
  exerciseOptions: any;
  setValue: any;
  getValues: any;
  disabled?: boolean;
}) => {
  const [defaultValue, setDefaultValue] = useState(false);
  const stateChangeHandler = async ({ selectValue }: any) => {
    if (selectValue) {
      setValue("exercise_id", selectValue);
      setDefaultValue(false);
    } else {
      setValue("exercise_id", null);
      setDefaultValue(true);
    }
  };
  const t = useTranslations("admin");
  const execData = t.raw("workout");
  return (
    <>
      <label className={cn("text-textPrimary text-right")}>
        {execData.selectExercise}
      </label>
      <AutoComplete
        disabled={disabled}
        options={exerciseOptions}
        onValueChange={stateChangeHandler}
        defaultValue={defaultValue}
        value={getValues("exercise_id")}
      />
    </>
  );
};

export default WorkoutExercisePredefined;
