'use client';
import BasicButton from '@/components/common/BasicButton';
import Input from '@/components/common/input/Input';
import { getError } from '@/lib/helper/common';
import {
	useAddNutritionGuideMutation,
	useEditNutritionGuideMutation,
} from '@/store/features/nutrition-guides/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa6';
import { toast } from 'sonner';
import * as yup from 'yup';
type Inputs = {
	title: string;
	description: string;
};

const NutritionGuidesForm = ({
	guide,
	userId,
	nutritionForm,
}: {
	guide?: any;
	userId?: string;
	nutritionForm?: any;
}) => {
	const router = useRouter();
	const schema = (edit: boolean) =>
		yup.object({
			title: yup
				.string()
				.required(nutritionForm.nameErr)
				.min(3, nutritionForm.nameChrErr),
			description: yup
				.string()
				.required(nutritionForm.desErr)
				.min(3, nutritionForm.desChrErr),
			file: edit
				? yup.mixed().nullable().notRequired()
				: yup.mixed().test(nutritionForm.upPdfErr, (value: any) => {
						return value && value.length > 0;
				  }),
		});
	const {
		register,
		handleSubmit,
		setValue,
		control,
		resetField,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: yupResolver(schema(!!guide?.id)),
	});
	const [
		addGuides,
		{
			isLoading: addGuidesLoading,
			error: addGuidesError,
			isError: addGuidesIsError,
			isSuccess: addGuidesIsSuccess,
		},
	] = useAddNutritionGuideMutation();
	const [
		updateGuides,
		{
			isLoading: updateGuidesLoading,
			error: updateGuidesError,
			isError: updateGuidesIsError,
			isSuccess: updateGuidesIsSuccess,
		},
	] = useEditNutritionGuideMutation();

	const onSubmit: any = async (data: any) => {
		const updatedData = { ...data, file: data?.file[0] };
		const formData = new FormData();
		for (const key in updatedData) {
			formData.append(key, updatedData[key]);
		}
		if (userId) {
			formData.append('user_id', userId);
		}
		if (guide?.id) {
			await updateGuides({ data: formData, id: guide?.id });
		} else {
			await addGuides(formData);
		}
	};

	useEffect(() => {
		if (guide?.id) {
			setValue('title', guide.title);
			setValue('description', guide.description);
		}
	}, [guide, setValue]);

	useEffect(() => {
		if (updateGuidesIsError || addGuidesIsError) {
			toast.error(getError(updateGuidesError || addGuidesError));
		} else if (updateGuidesIsSuccess || addGuidesIsSuccess) {
			toast.success(
				`${nutritionForm.guides} ${
					guide?.id ? nutritionForm.update : nutritionForm.added
				} ${nutritionForm.successfully}`
			);
			router.refresh();
			router.push(
				userId
					? `/admin/trainee-details/${userId}`
					: '/admin/nutrition-guides/manage'
			);
		}
	}, [
		addGuidesError,
		addGuidesIsError,
		addGuidesIsSuccess,
		guide?.id,
		nutritionForm.added,
		nutritionForm.guides,
		nutritionForm.successfully,
		nutritionForm.update,
		router,
		updateGuidesError,
		updateGuidesIsError,
		updateGuidesIsSuccess,
		userId,
	]);

	return (
		<form
			className="grid gap-2 xl:gap-4"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				type="text"
				name="title"
				label={nutritionForm.title}
				register={register}
				errors={errors}
			/>
			<Input
				type="textarea"
				name="description"
				label={nutritionForm.description}
				register={register}
				errors={errors}
			/>
			<Input
				type="file"
				name="file"
				label={nutritionForm.uploadPdf}
				register={register}
				errors={errors}
				control={control}
				resetField={resetField}
				accept="application/pdf"
			/>

			<BasicButton
				type="submit"
				extraClasses="!m-0 !w-full !mt-6 flex items-center justify-center gap-1"
				disabled={addGuidesLoading || updateGuidesLoading}
			>
				{addGuidesLoading || updateGuidesLoading ? (
					<FaSpinner
						className="animate-spin"
						size={16}
					/>
				) : null}
				{userId
					? nutritionForm.createAssign
					: guide?.id
					? nutritionForm.update
					: nutritionForm.save}{' '}
				{nutritionForm.guide}
			</BasicButton>
		</form>
	);
};

export default NutritionGuidesForm;
