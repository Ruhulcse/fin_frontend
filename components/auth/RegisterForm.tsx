'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import BasicButton from '../common/BasicButton';
import Input from '../common/input/Input';

type Inputs = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
};

const schema = yup.object({
	email: yup.string().email().required('Please enter your email'),
	password: yup
		.string()
		.required('Please enter your password')
		.min(6, 'Password must be at least 6 characters.'),
	firstName: yup
		.string()
		.required('Please enter your first name')
		.min(3, 'First name must be at least 3 characters.'),
	lastName: yup
		.string()
		.required('Please enter your last name')
		.min(3, 'Last name must be at least 3 characters.'),
});

const RegisterForm = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		router.push('/login');
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="grid gap-2 xl:gap-4"
		>
			<Input
				name="firstName"
				label="First Name"
				register={register}
				errors={errors}
			/>
			<Input
				name="lastName"
				label="Last Name"
				register={register}
				errors={errors}
			/>
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
				register={register}
				label="Password"
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
					extraClasses="!m-0 !w-full xl:!w-max"
				>
					Create Account
				</BasicButton>
				<span className="text-[12px] text-white flex items-center gap-1">
					Already have an account?
					<Link
						className="text-[#F1D7B5]"
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
