"use client";
import BasicButton from "@/components/common/BasicButton";
import SignaturePadWrapper from "@/components/common/SignaturePad";
import Input from "@/components/common/input/Input";
import { base64StringToFile, getError } from "@/lib/helper/common";
import {
  healthDeclarationInputs,
  registrationInputs,
} from "@/lib/helper/inputs";
import { useUpdateUserMutation } from "@/store/features/user/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "sonner";
import * as yup from "yup";

const schema = yup.object({});

const HealthDeclarationForm = ({ user }: { user: any }) => {
  const router = useRouter();
  const [imageURL, setImageURL] = useState<string>();
  const [tab, setTab] = useState(1);
  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    control,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  });

  const [updateUser, { isLoading, isSuccess, isError, error }] =
    useUpdateUserMutation();
  const common = useTranslations("common");
  const t = useTranslations("healthDeclaration");
  const regInput = t.raw("registrationForm");
  const healthInput = t.raw("healthDeclarationInputs");
  const registrationInputs = [
    {
      name: "phone",
      label: regInput.phoneNumber,
      type: "number",
    },
    {
      name: "age",
      label: regInput.age,
      type: "number",
    },
    {
      name: "height",
      label: regInput.height,
      type: "number",
    },
    {
      name: "weight",
      label: regInput.currentWeight,
      type: "number",
    },
    {
      name: "highest_weight",
      label: regInput.highestWeight,
      type: "number",
    },
    {
      name: "training_years",
      label: regInput.training,
      type: "number",
    },
    {
      name: "training_frequency",
      label: regInput.weekTraine,
      type: "select",
      options: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6", label: "6" },
        { value: "7", label: "7" },
      ],
    },
    {
      name: "preferred_training_location",
      label: regInput.traineLocation,
      type: "text",
    },
    {
      name: "home_equipment",
      label: regInput.equipement,
      type: "text",
    },
    {
      name: "desired_equipment",
      label: regInput.homeEquipement,
      type: "text",
    },
    {
      name: "strength_training_description",
      label: regInput.currentStrength,
      type: "textarea",
    },
    {
      name: "favorite_cardio",
      label: regInput.favouriteExercises,
      type: "text",
    },
    {
      name: "preferred_focus_areas",
      label: regInput.areaTraining,
      type: "text",
    },
    {
      name: "injuries",
      label: regInput.injuries,
      type: "text",
    },
    {
      name: "favorite_foods",
      label: regInput.favouriteFruite,
      type: "text",
    },
    {
      name: "disliked_foods",
      label: regInput.unfavouriteFruite,
      type: "text",
    },
    {
      name: "food_tracking_method",
      label: regInput.trackingFruite,
      type: "text",
    },
    {
      name: "past_diets",
      label: regInput.diets,
      type: "text",
    },
    {
      name: "current_cardio_routine",
      label: regInput.currentNutrition,
      type: "text",
    },
    {
      name: "daily_nutrition",
      label: regInput.dailyNutrition,
      type: "text",
    },
    {
      name: "weekend_nutrition",
      label: regInput.weekend,
      type: "text",
    },
    {
      name: "favorite_recipes",
      label: regInput.makeRecipe,
      type: "textarea",
    },
    {
      name: "alcohol_consumption",
      label: regInput.drinkAlcohol,
      type: "text",
    },
    {
      name: "medications",
      label: regInput.medication,
      type: "text",
    },
    {
      name: "sleep_hours",
      label: regInput.sleepingTime,
      type: "number",
    },
    {
      name: "current_job",
      label: regInput.currentJob,
      type: "text",
    },
    {
      name: "activity_level",
      label: regInput.activeAvgDay,
      type: "text",
    },
    {
      name: "sports_participation",
      label: regInput.currentSport,
      type: "text",
    },
    {
      name: "mirror_reflection",
      label: regInput.lookMirrorTime,
      type: "text",
    },
    {
      name: "long_term_goals",
      label: regInput.goal,
      type: "text",
    },
    {
      name: "motivation_level",
      label: regInput.motivation,
      type: "text",
    },
    {
      name: "commitment_declaration",
      label: regInput.prohibitedSubstances,
      type: "text",
    },
    {
      name: "additional_notes",
      label: regInput.addToLike,
      type: "text",
    },
    {
      name: "mailing_accepted",
      label: regInput.mailAccepted,
      type: "checkbox",
    },
    {
      name: "terms_accepted",
      label: regInput.termsCondition,
      type: "checkbox",
      linkURL: "Assets/Terms_and_conditions.pdf",
    },
  ];
  const healthDeclarationInputs = [
    {
      name: "place_of_residence",
      label: healthInput.placeOfResidence,
      type: "text",
    },
    {
      name: "id_number",
      label: healthInput.idNmbr,
      type: "number",
    },
    {
      name: "full_name",
      label: healthInput.fullName,
      type: "text",
    },
    {
      name: "phone",
      label: healthInput.phone,
      type: "text",
    },
    {
      name: "email",
      label: healthInput.email,
      type: "text",
    },
    {
      name: "dob",
      label: healthInput.birth,
      type: "date",
    },
    {
      name: "height",
      label: healthInput.height,
      type: "number",
    },
    {
      name: "weight",
      label: healthInput.weight,
      type: "number",
    },
    {
      name: "date",
      label: healthInput.date,
      type: "date",
    },
    {
      name: "regular_medications",
      label: healthInput.medications,
      type: "text",
    },
    {
      name: "physical_activity",
      label: healthInput.physicalActivity,
      type: "text",
    },
    {
      name: "suffered_from",
      label: healthInput.suffer,
      type: "text",
    },
    {
      name: "avoid_physical_activity",
      label: healthInput.recDoctor,
      type: "text",
    },
    {
      name: "home_equipment",
      label: healthInput.equipment,
      type: "text",
    },
    {
      name: "surgery_past_year",
      label: healthInput.surgery,
      type: "text",
    },
    {
      name: "pregnancy_status",
      label: healthInput.pregnant,
      type: "text",
    },
    {
      name: "lung_diseases",
      label: healthInput.lungDiseases,
      type: "text",
    },
    {
      name: "neck_problems",
      label: healthInput.beckNeckPrblm,
      type: "text",
    },
    {
      name: "muscle _problems",
      label: healthInput.musclePain,
      type: "text",
    },
    {
      name: "thyroid_problems",
      label: healthInput.diabetes,
      type: "text",
    },
    {
      name: "smoke_cigarettes",
      label: healthInput.smoke,
      type: "text",
    },
    {
      name: "cholesterol_level",
      label: healthInput.cholesterol,
      type: "text",
    },
    {
      name: "obesity",
      label: healthInput.obesity,
      type: "text",
    },
    {
      name: "family_heart_problems_history",
      label: healthInput.heartPrblm,
      type: "text",
    },
    {
      name: "worsen_lifting_weights",
      label: healthInput.hernia,
      type: "text",
    },
    {
      name: "diet",
      label: healthInput.diet,
      type: "text",
    },
    {
      name: "epilepsy",
      label: healthInput.epilepsy,
      type: "text",
    },
    {
      name: "additional_comments",
      label: healthInput.comments,
      type: "textarea",
    },
    {
      name: "fat_burners",
      label: healthInput.steroids,
      type: "text",
    },
  ];

  const onSubmit: any = async (data: any) => {
    const health_declaration: any = {};
    const user_details: any = {};
    for (const key in data) {
      const [type, name] = key.split("__");
      if (type === "health_declaration" && data[key]) {
        health_declaration[name] = data[key];
      } else if (type === "user_details" && data[key]) {
        user_details[name] = data[key];
      }
    }
    const updatedData: any = {
      file: data?.file[0],
      user_details: JSON.stringify({
        ...user_details,
        user_id: user?.id,
      }),
      health_declaration: JSON.stringify(health_declaration),
    };
    const formData = new FormData();
    for (const key in updatedData) {
      formData.append(key, updatedData[key]);
    }
    await updateUser({ data: formData, id: user?.id });
  };

  useEffect(() => {
    if (imageURL) {
      const file = base64StringToFile(imageURL, "signature.png");
      setValue("file", [file]);
    } else {
      resetField("file");
    }
    setValue("health_declaration__email", user?.email);
    setValue(
      "health_declaration__date",
      new Date().toISOString().split("T")[0]
    );
  }, [imageURL, resetField, setValue, user?.email]);

  useEffect(() => {
    if (isError) {
      toast.error(getError(error));
    } else if (isSuccess) {
      toast.success(common("userUpdSuccessfully"));
      router.push("/");
    }
  }, [isSuccess, isError, router, error]);

  return (
    <form
      className="health-declaration-form grid gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      {tab === 2 ? (
        <>
          {healthDeclarationInputs.map((input, index) => (
            <Input
              key={index}
              {...input}
              name={`health_declaration__${input.name}`}
              register={register}
              errors={errors}
            />
          ))}
          <Input
            type="file"
            name="file"
            label={healthInput.signature}
            register={register}
            errors={errors}
            accept="image/png, image/gif, image/jpeg"
            control={control}
            resetField={resetField}
            hidden
          />
          <SignaturePadWrapper setImageURL={setImageURL} />
        </>
      ) : (
        <>
          {registrationInputs.map((input, index) => (
            <Input
              key={index}
              {...input}
              name={`user_details__${input.name}`}
              register={register}
              errors={errors}
            />
          ))}
        </>
      )}
      {tab === 2 ? (
        <div className="flex items-center gap-4">
          <BasicButton
            onClick={() => setTab(1)}
            hard
            extraClasses="!m-0 !w-full !mt-6"
            disabled={isLoading}
            type="button"
          >
            {healthInput.prevBtn}
          </BasicButton>
          <BasicButton
            type="submit"
            extraClasses="!m-0 !w-full !mt-6 flex gap-1 justify-center items-center"
            disabled={isLoading}
          >
            {isLoading ? <FaSpinner className="animate-spin" /> : null}
            {healthInput.submitBtn}
          </BasicButton>
        </div>
      ) : (
        <BasicButton
          type="button"
          onClick={() => setTab(2)}
          hard
          extraClasses="!m-0 !w-full !mt-6"
          disabled={isLoading}
        >
          {common("nextBtn")}
        </BasicButton>
      )}
    </form>
  );
};

export default HealthDeclarationForm;
