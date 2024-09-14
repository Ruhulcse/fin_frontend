"use client";
import BasicButton from "@/components/common/BasicButton";
import Input from "@/components/common/input/Input";
import PDFLinkDownload from "@/components/common/pdf/PDFLinkDownload";
import { getError } from "@/lib/helper/common";
import { useUserMeasurementMutation } from "@/store/features/user/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDays, format } from "date-fns";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "sonner";
import * as yup from "yup";

const MeasurementInput = ({
  measurement,
  user,
  taskId,
  formLabel,
  formErr,
}: {
  measurement: any;
  user: any;
  taskId?: string;
  formLabel: any;
  formErr: any;
}) => {
  const {
    date,
    weight,
    bodyFat,
    chest,
    waist,
    thighR,
    thighL,
    armR,
    armL,
    uploadFile,
    clickFile,
    fileBtn,
    track,
    Tracking,
    trackSuccess,
  } = formLabel;
  const {
    dateErr,
    weightErr,
    bodyFatErr,
    chestErr,
    waistErr,
    thighRErr,
    thighLErr,
    armRErr,
    armLErr,
    uploadFileErr,
  } = formErr;
  const [files, setFiles] = useState([{}]);
  const router = useRouter();
  const schema = yup.object({
    date: yup.string().required(dateErr),
    weight: yup.string().required(weightErr),
    chest: yup.string().required(chestErr),
    thighr: yup.string().required(thighRErr),
    thighl: yup.string().required(thighLErr),
    waist: yup.string().required(waistErr),
    arml: yup.string().required(armRErr),
    armr: yup.string().required(armLErr),
    body_fat_percentage: yup.string().required(bodyFatErr),
  });
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
  const [tracking, { isLoading, error, isError, isSuccess }] =
    useUserMeasurementMutation();

  const onSubmit: any = async (data: any) => {
    const staticData: any = {};
    const fileData: any = {};

    for (const key in data) {
      if (key.includes("file")) {
        fileData[key] = data[key][0];
      } else {
        staticData[key] = data[key];
      }
    }
    const formData = new FormData();
    formData.append("user_id", user?.id);
    formData.append(
      "renew_date",
      format(addDays(staticData.date, 30), "yyyy-MM-dd")
    );
    if (taskId) {
      formData.append("task_id", taskId);
    }
    for (const key in staticData) {
      formData.append(key, staticData[key]);
    }
    for (const key in fileData) {
      formData.append("file", fileData[key]);
    }
    await tracking(formData);
  };

  useEffect(() => {
    if (isError) {
      toast.error(getError(error));
    } else if (isSuccess) {
      toast.success(trackSuccess);
      router.push("/");
      router.refresh();
    }
  }, [error, isError, isSuccess, router, trackSuccess]);

  useEffect(() => {
    if (measurement?.date) {
      setValue("thighr", measurement?.thighr ?? null);
      setValue("thighl", measurement?.thighl ?? null);
      setValue("armr", measurement?.armr ?? null);
      setValue("arml", measurement?.arml ?? null);
      setValue("chest", measurement?.chest ?? null);
      setValue("waist", measurement?.waist ?? null);
      setValue("body_fat_percentage", measurement?.body_fat_percentage ?? null);
      setValue("weight", measurement?.weight ?? null);
      setValue(
        "date",
        measurement?.date
          ? new Date(measurement?.date).toISOString().split("T")[0]
          : null
      );
    }
  }, [measurement, setValue]);

  return (
    <form className="grid gap-2 xl:gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="date"
        name="date"
        label={date}
        register={register}
        errors={errors}
      />
      <Input
        type="number"
        name="weight"
        label={weight}
        register={register}
        errors={errors}
      />
      <Input
        type="number"
        name="body_fat_percentage"
        label={bodyFat}
        register={register}
        errors={errors}
      />
      <Input
        type="number"
        name="chest"
        label={chest}
        register={register}
        errors={errors}
      />
      <Input
        type="number"
        name="waist"
        label={waist}
        register={register}
        errors={errors}
      />
      <Input
        type="number"
        name="thighr"
        label={thighR}
        register={register}
        errors={errors}
      />
      <Input
        type="number"
        name="thighl"
        label={thighL}
        register={register}
        errors={errors}
      />
      <Input
        type="number"
        name="armr"
        label={armR}
        register={register}
        errors={errors}
      />
      <Input
        type="number"
        name="arml"
        label={armL}
        register={register}
        errors={errors}
      />
      <div>
        <div className="flex justify-end">
          <PDFLinkDownload
            url={
              user.gender === "male"
                ? "Assets/Male_photo_tracking.pdf"
                : "Assets/Female_photo_tracking.pdf"
            }
            label={formLabel.measurementPictureGuide}
          />
        </div>
      </div>

      {files?.map((file, index) => (
        <Input
          key={index}
          type="file"
          name={`file__${index}`}
          label={uploadFile}
          register={register}
          errors={errors}
          control={control}
          resetField={resetField}
          accept="image/png, image/gif, image/jpeg"
        />
      ))}
      <div className="flex items-center gap-2">
        {files?.length < 4 ? (
          <BasicButton
            hard
            extraClasses="!m-0 !w-full !mt-6 flex items-center justify-center gap-1"
            onClick={() => setFiles((prev) => [...prev, {}])}
            disabled={isLoading}
          >
            {fileBtn}
          </BasicButton>
        ) : null}
        <BasicButton
          type="submit"
          extraClasses="!m-0 !w-full !mt-6 flex items-center justify-center gap-1"
          disabled={isLoading}
        >
          {isLoading ? <FaSpinner className="animate-spin" size={16} /> : null}
          {track ?? Tracking}
        </BasicButton>
      </div>
    </form>
  );
};

export default MeasurementInput;
