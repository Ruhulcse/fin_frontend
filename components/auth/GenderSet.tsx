'use client';

import { axiosInstance } from '@/lib/helper/axios-api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
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

const GenderSet = ({ userId }: { userId: string }) => {
	const t = useTranslations('auth');
	const gender = t.raw('genderSet');
	const router = useRouter();
	const schema = yup.object({
		gender: yup.string().required(gender.setGenderErr),
	});
	const genderOptions = [
		{ value: 'male', label: gender.male },
		{
			value: 'female',
			label: gender.female,
		},
	];
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
			toast.success(response.data.message ?? gender.genderSetSuccessfully);
			router.push(`/get-intro?gender=${payload.gender}`);
			router.refresh();
		} catch (error: any) {
			const message = error?.response?.data?.message ?? gender.errFound;
			toast.error(String(message));
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className="bg-white h-dvh grid place-items-center">
			<form
				className="bg-card w-[300px] grid gap-4 rounded p-4"
				onSubmit={handleSubmit(onSubmit)}
				autoComplete="off"
			>
				<Input
					type="select"
					name="gender"
					left
					label={gender.setGender}
					options={genderOptions}
					register={register}
					errors={errors}
				/>

				<BasicButton
					disabled={loading}
					type="submit"
					extraClasses="flex items-center justify-center gap-1 !m-0 !w-full bg-secondary text-primary"
				>
					{loading ? (
						<FaSpinner
							className="animate-spin"
							size={16}
						/>
					) : null}
					{gender.genderBtn}
				</BasicButton>
			</form>
		</main>
	);
};

export default GenderSet;
