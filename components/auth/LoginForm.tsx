"use client";
import { getError } from "@/lib/helper/common";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "sonner";
import * as yup from "yup";
import BasicButton from "../common/BasicButton";
import Input from "../common/input/Input";
import AuthRedirect from "./AuthRedirect";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const t = useTranslations("auth");
  const loginData = t.raw("login");
  const schema = yup.object({
    email: yup.string().email().required(loginData.emailErr),
    password: yup
      .string()
      .required(loginData.passErr)
      .min(6, loginData.passChrErr),
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
      await signIn("login", {
        ...data,
        redirect: true,
      });
    } catch (error) {
      toast.error(getError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="grid gap-2 xl:gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        name="email"
        label={loginData.email}
        register={register}
        errors={errors}
        left
      />
      <Input
        type="password"
        name="password"
        label={loginData.password}
        register={register}
        errors={errors}
        left
        footer={
          <Link className="text-right text-textPrimary" href="/forgot-password">
            {loginData.forgotPass}
          </Link>
        }
      />
      <div className="action flex flex-col xl:flex-row justify-center xl:justify-start items-center gap-2 xl:gap-4 mt-4 xl:mt-0">
        <BasicButton
          type="submit"
          disabled={loading}
          extraClasses="flex items-center justify-center gap-1 !m-0 !w-full xl:!w-max bg-secondary text-primary"
        >
          {loading ? <FaSpinner className="animate-spin" size={16} /> : null}
          {loginData.login}
        </BasicButton>
        <AuthRedirect data={loginData} type="login" />
      </div>
    </form>
  );
};

export default LoginForm;
