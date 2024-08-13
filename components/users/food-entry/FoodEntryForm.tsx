"use client";
import BasicButton from "@/components/common/BasicButton";
import Input from "@/components/common/input/Input";
import { getError } from "@/lib/helper/common";
import {
  useSetUserTaskMutation,
  useUpdateUserMutation,
} from "@/store/features/user/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "sonner";
import * as yup from "yup";

const FoodEntryForm = ({
  fooEntry,
  taskId,
}: {
  fooEntry?: any;
  taskId?: string;
}) => {
  const t = useTranslations("foodEntry");
  const foodData = t.raw("foodForm");
  const formErrMsg = t.raw("errMsg");
  const router = useRouter();
  const schema = yup.object({
    eating_day_free_txt: yup.string().required(`${formErrMsg.eatingErr}`),
    result_dt: yup.string().required(`${formErrMsg.dateErr}`),
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  });
  const [
    addTodo,
    {
      isLoading: addTodoLoading,
      error: addTodoError,
      isError: addTodoIsError,
      isSuccess: addTodoIsSuccess,
    },
  ] = useSetUserTaskMutation();
  const [
    updateTodo,
    {
      isLoading: updateTodoLoading,
      error: updateTodoError,
      isError: updateTodoIsError,
      isSuccess: updateTodoIsSuccess,
    },
  ] = useUpdateUserMutation();

  const onSubmit: any = async (data: any) => {
    const payload = {
      task_id: taskId,
      ...data,
    };
    if (fooEntry?.id) {
      await updateTodo({ data: payload, id: fooEntry?.id });
    } else {
      await addTodo(payload);
    }
  };

  useEffect(() => {
    if (fooEntry?.id) {
      setValue("eating_day_free_txt", fooEntry?.eating_day_free_txt);
      setValue(
        "result_dt",
        fooEntry?.result_dt
          ? new Date(fooEntry?.result_dt).toISOString().split("T")[0]
          : null
      );
    }
  }, [fooEntry, setValue]);

  useEffect(() => {
    if (updateTodoIsError || addTodoIsError) {
      toast.error(getError(updateTodoError || addTodoError));
    } else if (updateTodoIsSuccess || addTodoIsSuccess) {
      toast.success(
        `${foodData.foodEntry} ${
          fooEntry?.id ? foodData.updated : foodData.added
        } ${foodData.successfully}`
      );
      router.refresh();
      router.push("/");
    }
  }, [
    addTodoError,
    addTodoIsError,
    addTodoIsSuccess,
    fooEntry?.id,
    router,
    updateTodoError,
    updateTodoIsError,
    updateTodoIsSuccess,
  ]);

  return (
    <form className="grid gap-2 xl:gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="textarea"
        name="eating_day_free_txt"
        label={foodData.eatingTitle}
        register={register}
        errors={errors}
      />
      <Input
        type="date"
        name="result_dt"
        label={foodData.date}
        register={register}
        errors={errors}
      />
      <BasicButton
        type="submit"
        extraClasses="!m-0 !w-full !mt-6 flex items-center justify-center gap-1"
        disabled={addTodoLoading || updateTodoLoading}
      >
        {addTodoLoading || updateTodoLoading ? (
          <FaSpinner className="animate-spin" size={16} />
        ) : null}
        {fooEntry?.id ? foodData.update : foodData.save} {foodData.saveBtn}
      </BasicButton>
    </form>
  );
};

export default FoodEntryForm;
