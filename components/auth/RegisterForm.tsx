"use client";
import { axiosInstance } from "@/lib/helper/axios-api";
import { genderOptions } from "@/lib/helper/options";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "sonner";
import * as yup from "yup";
import BasicButton from "../common/BasicButton";
import Input from "../common/input/Input";
import AuthRedirect from "./AuthRedirect";
import { useTranslations } from "next-intl";

type Inputs = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  gender: string;
};

const RegisterForm = () => {
  const t = useTranslations("auth");
  const regData = t.raw("registration");
  const [loading, setLoading] = useState(false);
  const genderOptions = [
    { value: "male", label: regData.male },
    {
      value: "female",
      label: regData.female,
    },
  ];
  const schema = yup.object({
    email: yup.string().email().required(regData.emailErr),
    password: yup.string().required(regData.passErr).min(6, regData.passChrErr),
    first_name: yup
      .string()
      .required(regData.fNameErr)
      .min(3, regData.fNameChrErr),
    last_name: yup
      .string()
      .required(regData.lNameErr)
      .min(3, regData.lNameChrErr),
    gender: yup.string().required(regData.setGenderErr),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true);
      const payload = {
        ...data,
        role: "user",
        name: `${data.first_name} ${data.last_name}`,
      };
      const response: any = await axiosInstance.post("/signup", payload);
      toast.success(response.data.message ?? regData.signUpSuccess);
      await signIn("signup", {
        ...response.data.data,
        redirect: true,
        callbackUrl: `/get-intro?gender=${payload.gender}`,
      });
    } catch (error: any) {
      const message = error?.response?.data?.message ?? regData.errFound;
      toast.error(String(message));
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2 xl:gap-4">
      <Input
        name="first_name"
        label={regData.firstName}
        register={register}
        errors={errors}
        left
      />
      <Input
        name="last_name"
        label={regData.lastName}
        register={register}
        left
        errors={errors}
      />
      <Input
        type="email"
        name="email"
        label={regData.email}
        register={register}
        left
        errors={errors}
      />
      <Input
        type="select"
        name="gender"
        left
        label={regData.gender}
        options={genderOptions}
        register={register}
        errors={errors}
      />
      <Input
        type="password"
        name="password"
        register={register}
        left
        label={regData.password}
        errors={errors}
        footer={
          <Link className="text-right text-textPrimary" href="/forgot-password">
            {regData.forgotPass}
          </Link>
        }
      />
      <div className="action flex flex-col xl:flex-row justify-center xl:justify-start items-center gap-2 xl:gap-4 mt-4 xl:mt-0">
        <BasicButton
          disabled={loading}
          type="submit"
          extraClasses="flex items-center justify-center gap-1 !m-0 !w-full xl:!w-max bg-secondary text-primary"
        >
          {loading ? <FaSpinner className="animate-spin" size={16} /> : null}
          {regData.createAccount}
        </BasicButton>
        <AuthRedirect data={regData} type="registration" />
      </div>
    </form>
  );
};

export default RegisterForm;
