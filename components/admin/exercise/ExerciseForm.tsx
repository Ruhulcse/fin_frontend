'use client';
import BasicButton from '@/components/common/BasicButton';
import Input from '@/components/common/input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
type Inputs = {
	name: string;
	area: string;
	description: string;
};

const schema = yup.object({
	name: yup
		.string()
		.required('Please enter name')
		.min(3, 'Name must be at least 3 characters.'),
	area: yup
		.string()
		.required('Please enter area')
		.min(3, 'Area must be at least 3 characters.'),
	description: yup
		.string()
		.required('Please enter description')
		.min(3, 'Description must be at least 3 characters.'),
	video: yup
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
		formState: { errors },
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		router.push('/exercise-library');
	};

	useEffect(() => {
		if (exercise?.id) {
			setValue('name', exercise.name);
			setValue('area', exercise.area);
			setValue('description', exercise.description);
		}
	}, [exercise, setValue]);
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
				type="textarea"
				name="description"
				label="Description"
				register={register}
				errors={errors}
			/>
			<Input
				type="file"
				name="video"
				label="Upload Video"
				register={register}
				errors={errors}
			/>

			<BasicButton
				type="submit"
				extraClasses="!m-0 !w-full !mt-6"
			>
				{exercise?.id ? 'Update' : 'Save'} Exercise
			</BasicButton>
		</form>
	);
};

export default ExerciseForm;
