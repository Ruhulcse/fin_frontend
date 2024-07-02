'use client';

import { axiosInstance } from '@/lib/helper/axios-api';
import { genderOptions } from '@/lib/helper/options';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa6';
import { toast } from 'sonner';
import * as yup from 'yup';
import BasicButton from '../common/BasicButton';
import Input from '../common/input/Input';

type Inputs = {
	gender: string;
};

const schema = yup.object({
	gender: yup.string().required('Please select your gender'),
});

const GenderSet = ({ userId }: { userId: string }) => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
	});
	const [loading, setLoading] = useState(false);
	const { update } = useSession();
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			setLoading(true);
			const payload = {
				...data,
			};
			const response: any = await axiosInstance.put(
				`/api/users/update-status/${userId}`,
				payload
			);
			await update({ gender: data.gender });
			toast.success(response.data.message ?? 'Gender set Successfully');
			router.push(`/get-intro?gender=${payload.gender}`);
			router.refresh();
		} catch (error: any) {
			const message = error?.response?.data?.message ?? 'Error Found';
			toast.error(String(message));
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className="bg-[#cecece] h-dvh grid place-items-center">
			<form
				className="bg-card w-[300px] grid gap-4 rounded p-4"
				onSubmit={handleSubmit(onSubmit)}
				autoComplete="off"
			>
				<Input
					type="select"
					name="gender"
					left
					label="Set Gender"
					options={genderOptions}
					register={register}
					errors={errors}
				/>

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
					Set Gender
				</BasicButton>
			</form>
		</main>
	);
};

export default GenderSet;
