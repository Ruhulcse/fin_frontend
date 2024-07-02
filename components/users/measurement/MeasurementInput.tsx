'use client';
import BasicButton from '@/components/common/BasicButton';
import Input from '@/components/common/input/Input';
import { getError } from '@/lib/helper/common';
import { useUserMeasurementMutation } from '@/store/features/user/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa6';
import { toast } from 'sonner';
import * as yup from 'yup';

const schema = yup.object({
	date: yup.string().required('Please enter date'),
	weight: yup.string().required('Please enter weight'),
	chest: yup.string().required('Please enter chest'),
	thighr: yup.string().required('Please enter thigh'),
	thighl: yup.string().required('Please enter thigh'),
	waist: yup.string().required('Please enter waist'),
	arml: yup.string().required('Please enter arm'),
	armr: yup.string().required('Please enter arm'),
	body_fat_percentage: yup
		.string()
		.required('Please enter body fat percentage'),
});

const MeasurementInput = ({
	measurement,
	user,
}: {
	measurement: any;
	user: any;
}) => {
	const [files, setFiles] = useState([{}]);
	const router = useRouter();
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
	const [addExercise, { isLoading, error, isError, isSuccess }] =
		useUserMeasurementMutation();

	const onSubmit: any = async (data: any) => {
		const staticData: any = {};
		const fileData: any = {};

		for (const key in data) {
			if (key.includes('file')) {
				fileData[key] = data[key][0];
			} else {
				staticData[key] = data[key];
			}
		}
		const formData = new FormData();
		formData.append('user_id', user?.id);
		for (const key in staticData) {
			formData.append(key, staticData[key]);
		}
		for (const key in fileData) {
			formData.append('file', fileData[key]);
		}
		await addExercise(formData);
	};

	useEffect(() => {
		if (isError) {
			toast.error(getError(error));
		} else if (isSuccess) {
			toast.success(`Tracked successfully`);
			router.refresh();
			router.push('/');
		}
	}, [error, isError, isSuccess, router]);

	useEffect(() => {
		if (measurement?.date) {
			setValue('thighr', measurement?.thighr ?? null);
			setValue('thighl', measurement?.thighl ?? null);
			setValue('armr', measurement?.armr ?? null);
			setValue('arml', measurement?.arml ?? null);
			setValue('chest', measurement?.chest ?? null);
			setValue('waist', measurement?.waist ?? null);
			setValue('body_fat_percentage', measurement?.body_fat_percentage ?? null);
			setValue('weight', measurement?.weight ?? null);
			setValue(
				'date',
				measurement?.date
					? new Date(measurement?.date).toISOString().split('T')[0]
					: null
			);
		}
	}, [measurement, setValue]);

	return (
		<form
			className="grid gap-2 xl:gap-4"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				type="date"
				name="date"
				label="Date"
				register={register}
				errors={errors}
			/>
			<Input
				type="number"
				name="weight"
				label="Weight"
				register={register}
				errors={errors}
			/>
			<Input
				type="number"
				name="body_fat_percentage"
				label="Body Fat Percentage"
				register={register}
				errors={errors}
			/>
			<Input
				type="number"
				name="chest"
				label="Chest"
				register={register}
				errors={errors}
			/>
			<Input
				type="number"
				name="waist"
				label="Waist"
				register={register}
				errors={errors}
			/>
			<Input
				type="number"
				name="thighr"
				label="Thigh Right"
				register={register}
				errors={errors}
			/>
			<Input
				type="number"
				name="thighl"
				label="Thigh Left"
				register={register}
				errors={errors}
			/>
			<Input
				type="number"
				name="armr"
				label="Arm Right"
				register={register}
				errors={errors}
			/>
			<Input
				type="number"
				name="arml"
				label="Arm Left"
				register={register}
				errors={errors}
			/>

			{files?.map((file, index) => (
				<Input
					key={index}
					type="file"
					name={`file__${index}`}
					label="Upload File"
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
						Add More File
					</BasicButton>
				) : null}
				<BasicButton
					type="submit"
					extraClasses="!m-0 !w-full !mt-6 flex items-center justify-center gap-1"
					disabled={isLoading}
				>
					{isLoading ? (
						<FaSpinner
							className="animate-spin"
							size={16}
						/>
					) : null}
					Tacking
				</BasicButton>
			</div>
		</form>
	);
};

export default MeasurementInput;
