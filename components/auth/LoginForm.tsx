'use client';
import { getError } from '@/lib/helper/common';
import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa6';
import { toast } from 'sonner';
import * as yup from 'yup';
import BasicButton from '../common/BasicButton';
import Input from '../common/input/Input';

type Inputs = {
	email: string;
	password: string;
};

const schema = yup.object({
	email: yup.string().email().required('Please enter your email'),
	password: yup
		.string()
		.required('Please enter your password')
		.min(6, 'Password must be at least 6 characters.'),
});

const LoginForm = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

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
			const res = await signIn('login', { ...data, redirect: false });
			if (res?.error) throw new Error();
			if (res?.status === 200) {
				router.push('/');
				toast.success('Login Successful');
			}
		} catch (error) {
			toast.error(getError(error));
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			className="grid gap-2 xl:gap-4"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				type="email"
				name="email"
				label="Email"
				register={register}
				errors={errors}
			/>
			<Input
				type="password"
				name="password"
				label="Password"
				register={register}
				errors={errors}
				footer={
					<Link
						className="text-right text-[#F1D7B5]"
						href="/forgot-password"
					>
						Forgot Password
					</Link>
				}
			/>
			<div className="action flex flex-col xl:flex-row justify-center xl:justify-start items-center gap-2 xl:gap-4 mt-4 xl:mt-0">
				<BasicButton
					type="submit"
					disabled={loading}
					extraClasses="flex items-center justify-center gap-1 !m-0 !w-full xl:!w-max"
				>
					{loading ? (
						<FaSpinner
							className="animate-spin"
							size={16}
						/>
					) : null}
					Login
				</BasicButton>
				<span className="text-[12px] text-white flex items-center gap-1">
					Don&apos;t have an account?
					<Link
						className="text-[#F1D7B5] cursor-pointer"
						href="/registration"
					>
						Sign Up
					</Link>
				</span>
			</div>
		</form>
	);
};

export default LoginForm;
