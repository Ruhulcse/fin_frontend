'use client';
import BasicButton from '@/components/common/BasicButton';
import Input from '@/components/common/input/Input';
import { getError } from '@/lib/helper/common';
import {
	useAddExerciseMutation,
	useEditExerciseMutation,
} from '@/store/features/exercise/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa6';
import { toast } from 'sonner';
import * as yup from 'yup';
type Inputs = {
	name: string;
	area: string;
	equipment: string;
	description: string;
};

const schema = (edit: boolean) =>
	yup.object({
		name: yup
			.string()
			.required('Please enter name')
			.min(3, 'Name must be at least 3 characters.'),
		area: yup
			.string()
			.required('Please enter area')
			.min(3, 'Area must be at least 3 characters.'),
		equipment: yup
			.string()
			.required('Please enter equipment')
			.min(3, 'Equipment must be at least 3 characters.'),
		description: yup
			.string()
			.required('Please enter description')
			.min(3, 'Description must be at least 3 characters.'),
		file: edit
			? yup.mixed().nullable().notRequired()
			: yup
					.mixed()
					.test('required', 'Please upload your video', (value: any) => {
						return value && value.length > 0;
					}),
	});
const ExerciseForm = ({ exercise }: { exercise?: any }) => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		setValue,
		control,
		resetField,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: yupResolver(schema(!!exercise?.exercise_id)),
	});
	const [
		addExercise,
		{
			isLoading: addExerciseLoading,
			error: addExerciseError,
			isError: addExerciseIsError,
			isSuccess: addExerciseIsSuccess,
		},
	] = useAddExerciseMutation();
	const [
		updateExercise,
		{
			isLoading: updateExerciseLoading,
			error: updateExerciseError,
			isError: updateExerciseIsError,
			isSuccess: updateExerciseIsSuccess,
		},
	] = useEditExerciseMutation();

	const onSubmit: any = async (data: any) => {
		const updatedData = { ...data, file: data?.file[0] };
		const formData = new FormData();
		for (const key in updatedData) {
			formData.append(key, updatedData[key]);
		}
		if (exercise?.exercise_id) {
			await updateExercise({ data: formData, id: exercise?.exercise_id });
		} else {
			await addExercise(formData);
		}
	};

	useEffect(() => {
		if (exercise?.exercise_id) {
			setValue('name', exercise.name);
			setValue('area', exercise.area);
			setValue('equipment', exercise.equipment);
			setValue('description', exercise.description);
		}
	}, [exercise, setValue]);

	useEffect(() => {
		if (updateExerciseIsError || addExerciseIsError) {
			toast.error(getError(updateExerciseError || addExerciseError));
		} else if (updateExerciseIsSuccess || addExerciseIsSuccess) {
			toast.success(
				`Exercise ${exercise?.exercise_id ? 'updated' : 'added'} successfully`
			);
			router.refresh();
			router.push('/admin/exercise/manage');
		}
	}, [
		addExerciseError,
		addExerciseIsError,
		addExerciseIsSuccess,
		exercise?.exercise_id,
		router,
		updateExerciseError,
		updateExerciseIsError,
		updateExerciseIsSuccess,
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
				type="text"
				name="area"
				label="Area"
				register={register}
				errors={errors}
			/>
			<Input
				type="text"
				name="equipment"
				label="Equipment"
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
				label="Upload Video"
				register={register}
				errors={errors}
				control={control}
				resetField={resetField}
				accept="video/mp4,video/x-m4v,video/*"
			/>

			<BasicButton
				type="submit"
				extraClasses="!m-0 !w-full !mt-6 flex items-center justify-center gap-1"
				disabled={addExerciseLoading || updateExerciseLoading}
			>
				{addExerciseLoading || updateExerciseLoading ? (
					<FaSpinner
						className="animate-spin"
						size={16}
					/>
				) : null}
				{exercise?.exercise_id ? 'Update' : 'Save'} Exercise
			</BasicButton>
		</form>
	);
};

export default ExerciseForm;
