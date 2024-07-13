'use client';
import BasicButton from '@/components/common/BasicButton';
import Input from '@/components/common/input/Input';
import { getError } from '@/lib/helper/common';
import { useAddApprovedEmailMutation } from '@/store/features/admin/approved-emails/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa6';
import { toast } from 'sonner';
import * as yup from 'yup';
type Inputs = {
	email: string;
};

const schema = yup.object({
	email: yup.string().email().required('Please enter your email'),
});

const ApproveEmail = () => {
	const router = useRouter();
	const [approve, { isLoading, isError, isSuccess, error }] =
		useAddApprovedEmailMutation();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		await approve(data);
	};

	useEffect(() => {
		if (isError) {
			toast.error(getError(error));
		} else if (isSuccess) {
			toast.success('Email approved successfully');
			router.push('/admin');
		}
	}, [isSuccess, isError, router, error]);

	return (
		<form
			className="flex flex-col gap-2 xl:gap-4"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				type="email"
				name="email"
				label="Email"
				register={register}
				errors={errors}
			/>
			<BasicButton
				type="submit"
				extraClasses="flex justify-center gap-1 items-center !m-0 !w-full"
				disabled={isLoading}
			>
				{isLoading ? (
					<FaSpinner
						size={20}
						className="animate-spin"
					/>
				) : null}
				Approve Email
			</BasicButton>
		</form>
	);
};

export default ApproveEmail;
