'use client';
import BasicButton from '@/components/common/BasicButton';
import Input from '@/components/common/input/Input';
import { getError } from '@/lib/helper/common';
import {
	useAddNutritionPlanMutation,
	useEditNutritionPlanMutation,
} from '@/store/features/nutrition-plans/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa6';
import { toast } from 'sonner';
import * as yup from 'yup';
type Inputs = {
	name: string;
	description: string;
};

const schema = (edit: boolean) =>
	yup.object({
		name: yup
			.string()
			.required('Please enter name')
			.min(3, 'Name must be at least 3 characters.'),
		description: yup
			.string()
			.required('Please enter description')
			.min(3, 'Description must be at least 3 characters.'),
		file: edit
			? yup.mixed().nullable().notRequired()
			: yup.mixed().test('required', 'Please upload your PDF', (value: any) => {
					return value && value.length > 0;
			  }),
	});
const NutritionPlanForm = ({ plan }: { plan?: any }) => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		setValue,
		control,
		resetField,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: yupResolver(schema(!!plan?.id)),
	});
	const [
		addPlan,
		{
			isLoading: addPlanLoading,
			error: addPlanError,
			isError: addPlanIsError,
			isSuccess: addPlanIsSuccess,
		},
	] = useAddNutritionPlanMutation();
	const [
		updatePlan,
		{
			isLoading: updatePlanLoading,
			error: updatePlanError,
			isError: updatePlanIsError,
			isSuccess: updatePlanIsSuccess,
		},
	] = useEditNutritionPlanMutation();

	const onSubmit: any = async (data: any) => {
		const updatedData = { ...data, file: data?.file[0] };
		const formData = new FormData();
		for (const key in updatedData) {
			formData.append(key, updatedData[key]);
		}
		if (plan?.id) {
			await updatePlan({ data: formData, id: plan?.id });
		} else {
			await addPlan(formData);
		}
	};

	useEffect(() => {
		if (plan?.id) {
			setValue('name', plan.name);
			setValue('description', plan.description);
		}
	}, [plan, setValue]);

	useEffect(() => {
		if (updatePlanIsError || addPlanIsError) {
			toast.error(getError(updatePlanError || addPlanError));
		} else if (updatePlanIsSuccess || addPlanIsSuccess) {
			toast.success(`Plan ${plan?.id ? 'updated' : 'added'} successfully`);
			router.refresh();
			router.push('/admin/nutrition-plan/manage');
		}
	}, [
		addPlanError,
		addPlanIsError,
		addPlanIsSuccess,
		plan?.id,
		router,
		updatePlanError,
		updatePlanIsError,
		updatePlanIsSuccess,
	]);

	return (
		<form
			className="grid gap-2 xl:gap-4"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				type="text"
				name="name"
				label="Name"
				register={register}
				errors={errors}
			/>
			<Input
				type="textarea"
				name="description"
				label="Description"
				register={register}
				errors={errors}
			/>
			<Input
				type="file"
				name="file"
				label="Upload PDF"
				register={register}
				errors={errors}
				control={control}
				resetField={resetField}
				accept="application/pdf"
			/>

			<BasicButton
				type="submit"
				extraClasses="!m-0 !w-full !mt-6 flex items-center justify-center gap-1"
				disabled={addPlanLoading || updatePlanLoading}
			>
				{addPlanLoading || updatePlanLoading ? (
					<FaSpinner
						className="animate-spin"
						size={16}
					/>
				) : null}
				{plan?.id ? 'Update' : 'Save'} Plan
			</BasicButton>
		</form>
	);
};

export default NutritionPlanForm;
