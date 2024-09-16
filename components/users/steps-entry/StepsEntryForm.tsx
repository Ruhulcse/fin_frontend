"use client";
import BasicButton from "@/components/common/BasicButton";
import Input from "@/components/common/input/Input";
import { getError } from "@/lib/helper/common";
import {
  useSetUserStepTaskMutation,
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
import { number } from "yup";
const StepsEntryForm = ({ taskId }: { taskId?: string }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<any>();
  const [
    addSteps,
    {
      isLoading: addStepsLoading,
      error: addStepsError,
      isError: addStepsIsError,
      isSuccess: addStepsIsSuccess,
    },
  ] = useSetUserStepTaskMutation();

  const onSubmit: any = async (data: any) => {
    const payload = {
      task_id: taskId,
      ...data,
    };
    await addSteps(payload);
  };

  useEffect(() => {
    if (addStepsError) {
      toast.error(getError(addStepsError));
    } else if (addStepsIsSuccess) {
      toast.success("Steps Added Successfully!!!");
      router.push("/");
      router.refresh();
    }
  }, [addStepsError, addStepsIsSuccess, router]);
  return (
    <form className="grid gap-2 xl:gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="number"
        name="number_of_steps"
        label="Daily Steps"
        register={register}
        // errors={errors}
      />
      <BasicButton
        type="submit"
        extraClasses="!m-0 !w-full !mt-6 flex items-center justify-center gap-1"
        disabled={addStepsLoading}
      >
        {addStepsLoading ? (
          <FaSpinner className="animate-spin" size={16} />
        ) : null}
        {/* {fooEntry?.id ? foodData.update : foodData.save} {foodData.saveBtn} */}
        Save Steps
      </BasicButton>
    </form>
  );
};

export default StepsEntryForm;
