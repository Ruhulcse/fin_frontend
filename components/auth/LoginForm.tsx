'use client';
import { setUser } from '@/store/features/user/slice';
import { useAppDispatch } from '@/store/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
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
	const dispatch = useAppDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		dispatch(setUser(data));
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
					extraClasses="!m-0 !w-full xl:!w-max"
				>
					Login
				</BasicButton>
				<span className="text-[12px] text-white flex items-center gap-1">
					Don&apos;t have an account?
					<Link
						className="text-[#F1D7B5]"
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
