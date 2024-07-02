'use client';
import { axiosInstance } from '@/lib/helper/axios-api';
import { genderOptions } from '@/lib/helper/options';
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
	first_name: string;
	last_name: string;
	gender: string;
};

const schema = yup.object({
	email: yup.string().email().required('Please enter your email'),
	password: yup
		.string()
		.required('Please enter your password')
		.min(6, 'Password must be at least 6 characters.'),
	first_name: yup
		.string()
		.required('Please enter your first name')
		.min(3, 'First name must be at least 3 characters.'),
	last_name: yup
		.string()
		.required('Please enter your last name')
		.min(3, 'Last name must be at least 3 characters.'),
	gender: yup.string().required('Please select your gender'),
});

const RegisterForm = () => {
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
			const payload = {
				...data,
				role: 'user',
				name: `${data.first_name} ${data.last_name}`,
			};
			const response: any = await axiosInstance.post('/signup', payload);
			toast.success(response.data.message ?? 'Sign Up Successful');
			await signIn('signup', {
				...response.data.data,
				redirect: true,
				callbackUrl: `/get-intro?gender=${payload.gender}`,
			});
		} catch (error: any) {
			const message = error?.response?.data?.message ?? 'Error Found';
			toast.error(String(message));
		} finally {
			setLoading(false);
		}
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="grid gap-2 xl:gap-4"
		>
			<Input
				name="first_name"
				label="First Name"
				register={register}
				errors={errors}
				left
			/>
			<Input
				name="last_name"
				label="Last Name"
				register={register}
				left
				errors={errors}
			/>
			<Input
				type="email"
				name="email"
				label="Email"
				register={register}
				left
				errors={errors}
			/>
			<Input
				type="select"
				name="gender"
				left
				label="Gender"
				options={genderOptions}
				register={register}
				errors={errors}
			/>
			<Input
				type="password"
				name="password"
				register={register}
				left
				label="Password"
				errors={errors}
				footer={
					<Link
						className="text-right text-textPrimary"
						href="/forgot-password"
					>
						Forgot Password
					</Link>
				}
			/>
			<div className="action flex flex-col xl:flex-row justify-center xl:justify-start items-center gap-2 xl:gap-4 mt-4 xl:mt-0">
				<BasicButton
					disabled={loading}
					type="submit"
					extraClasses="flex items-center justify-center gap-1 !m-0 !w-full xl:!w-max bg-secondary text-primary"
				>
					{loading ? (
						<FaSpinner
							className="animate-spin"
							size={16}
						/>
					) : null}
					Create Account
				</BasicButton>
				<span className="text-[12px] text-textPrimary flex items-center gap-1">
					Already have an account?
					<Link
						className="text-secondary cursor-pointer font-bold"
						href="/login"
					>
						Sign In
					</Link>
				</span>
			</div>
		</form>
	);
};

export default RegisterForm;
