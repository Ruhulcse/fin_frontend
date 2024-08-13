"use client";
import BasicButton from "@/components/common/BasicButton";
import Input from "@/components/common/input/Input";
import { getError } from "@/lib/helper/common";
import { useUserNutritionPlanMutation } from "@/store/features/admin/nutrition-plan/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "sonner";
import * as yup from "yup";
type Inputs = {
  plan_ids: any[];
};

const UserNutritionPlanForm = ({
  plans,
  existingPlans,
  traineeId,
}: {
  plans: any;
  existingPlans: any;
  traineeId: string;
}) => {
  const router = useRouter();
  const t = useTranslations("admin");
  const nutritionForm = t.raw("userNutrition");
  const schema = yup.object({
    plan_ids: yup.array().required("Please select plan"),
  });
  const [update, { isLoading, isError, isSuccess, error }] =
    useUserNutritionPlanMutation();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const payload = {
      user_id: traineeId,
      plan_ids: data.plan_ids?.map((id: any) => id.value),
    };
    await update(payload);
  };

  useEffect(() => {
    if (existingPlans.length > 0) {
      const planIds = existingPlans?.map((plan: any) => ({
        value: plan.nutrition_plan_id,
        label: plan.NutritionPlan.name,
      }));
      setValue("plan_ids", planIds);
    }
  }, [existingPlans, setValue]);

  useEffect(() => {
    if (isError) {
      toast.error(getError(error));
    } else if (isSuccess) {
      toast.success("Nutrition plan updated successfully");
      router.push("/admin/trainee-details/" + traineeId);
    }
  }, [isSuccess, isError, router, error, traineeId]);

  return (
    <form className="grid gap-2 xl:gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="multi-select"
        name="plan_ids"
        label={nutritionForm.plan}
        control={control}
        options={plans?.map((plan: any) => ({
          value: plan.id,
          label: plan.name,
        }))}
        errors={errors}
      />
      <BasicButton
        type="submit"
        extraClasses="flex justify-center gap-1 items-center !m-0 !w-full"
        disabled={isLoading}
      >
        {isLoading ? <FaSpinner size={20} className="animate-spin" /> : null}
        {nutritionForm.userPlan}
      </BasicButton>
    </form>
  );
};

export default UserNutritionPlanForm;
