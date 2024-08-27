"use client";
import BasicButton from "@/components/common/BasicButton";
import Input from "@/components/common/input/Input";
import { getError } from "@/lib/helper/common";
import { equipmentOptions } from "@/lib/helper/options";
import {
  useAddExerciseMutation,
  useEditExerciseMutation,
} from "@/store/features/exercise/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "sonner";
import * as yup from "yup";
type Inputs = {
  name: string;
  area: string;
  equipment: string;
  description: string;
};

const ExerciseForm = ({
  exercise,
  excForm,
}: {
  exercise?: any;
  excForm?: any;
}) => {
  const router = useRouter();
  const schema = (edit: boolean) =>
    yup.object({
      name: yup.string().required(excForm?.nameErr).min(3, excForm?.nameChrErr),
      area: yup.string().required(excForm?.areaErr).min(3, excForm?.areaChrErr),
      equipment: yup
        .string()
        .required(excForm?.equipementErr)
        .min(3, excForm?.eqpChrErr),
      description: yup
        .string()
        .required(excForm?.desErr)
        .min(3, excForm?.desCherErr),
      file: edit
        ? yup.mixed().nullable().notRequired()
        : yup.mixed().test(excForm?.upVideoErr, (value: any) => {
            return value && value.length > 0;
          }),
    });
  const {
    register,
    handleSubmit,
    setValue,
    control,
    resetField,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema(!!exercise?.exercise_id)),
  });
  const [
    addExercise,
    {
      isLoading: addExerciseLoading,
      error: addExerciseError,
      isError: addExerciseIsError,
      isSuccess: addExerciseIsSuccess,
    },
  ] = useAddExerciseMutation();
  const [
    updateExercise,
    {
      isLoading: updateExerciseLoading,
      error: updateExerciseError,
      isError: updateExerciseIsError,
      isSuccess: updateExerciseIsSuccess,
    },
  ] = useEditExerciseMutation();

  const onSubmit: any = async (data: any) => {
    const updatedData = { ...data, file: data?.file[0] };
    const formData = new FormData();
    for (const key in updatedData) {
      formData.append(key, updatedData[key]);
    }
    if (exercise?.exercise_id) {
      await updateExercise({ data: formData, id: exercise?.exercise_id });
    } else {
      await addExercise(formData);
    }
  };

  useEffect(() => {
    if (exercise?.exercise_id) {
      setValue("name", exercise.name);
      setValue("area", exercise.area);
      setValue("equipment", exercise.equipment);
      setValue("description", exercise.description);
    }
  }, [exercise, setValue]);

  useEffect(() => {
    if (updateExerciseIsError || addExerciseIsError) {
      toast.error(getError(updateExerciseError || addExerciseError));
    } else if (updateExerciseIsSuccess || addExerciseIsSuccess) {
      toast.success(
        `${excForm.exercise} ${
          exercise?.exercise_id ? excForm?.update : excForm?.added
        } ${excForm.successfully}`
      );
      router.refresh();
      router.push("/admin/exercise/manage");
    }
  }, [
    addExerciseError,
    addExerciseIsError,
    addExerciseIsSuccess,
    excForm.added,
    excForm.exercise,
    excForm.successfully,
    excForm.update,
    exercise?.exercise_id,
    router,
    updateExerciseError,
    updateExerciseIsError,
    updateExerciseIsSuccess,
  ]);

  return (
    <form className="grid gap-2 xl:gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        name="name"
        label={excForm.name}
        register={register}
        errors={errors}
      />
      <Input
        type="text"
        name="area"
        label={excForm.area}
        register={register}
        errors={errors}
        // options={areaOptions}
      />
      <Input
        type="select"
        name="equipment"
        label={excForm.equipment}
        register={register}
        errors={errors}
        options={equipmentOptions}
      />
      <Input
        type="textarea"
        name="description"
        label={excForm.description}
        register={register}
        errors={errors}
      />
      <Input
        type="file"
        name="file"
        label={excForm.uploadVideo}
        register={register}
        errors={errors}
        control={control}
        resetField={resetField}
        accept="video/mp4,video/x-m4v,video/*"
      />

      <BasicButton
        type="submit"
        extraClasses="!m-0 !w-full !mt-6 flex items-center justify-center gap-1"
        disabled={addExerciseLoading || updateExerciseLoading}
      >
        {addExerciseLoading || updateExerciseLoading ? (
          <FaSpinner className="animate-spin" size={16} />
        ) : null}
        {exercise?.exercise_id ? excForm.updateBtn : excForm.saveBtn}{" "}
        {excForm.exercise}
      </BasicButton>
    </form>
  );
};

export default ExerciseForm;
