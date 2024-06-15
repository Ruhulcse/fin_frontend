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
	description: string;
	exercises: any[];
};

const schema = yup.object({
	name: yup
		.string()
		.required('Please enter name')
		.min(3, 'Name must be at least 3 characters.'),
	description: yup
		.string()
		.required('Please enter description')
		.min(3, 'Description must be at least 3 characters.'),
	exercises: yup
		.array()
		.min(1, 'Please enter exercises')
		.required('Please enter exercises'),
});
const WorkoutForm = ({ workout }: { workout?: any }) => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		setValue,
		control,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		router.push('/workout-program');
	};

	useEffect(() => {
		if (workout?.id) {
			setValue('name', workout.name);
			setValue('description', workout.description);
		}
	}, [workout, setValue]);
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
				type="multi-select"
				name="exercises"
				label="Exercises"
				control={control}
				options={[
					{
						label: 'E1',
						value: 'e1',
					},
					{
						label: 'E2',
						value: 'e2',
					},
				]}
				errors={errors}
			/>
			<BasicButton
				type="submit"
				extraClasses="!m-0 !w-full !mt-6"
			>
				{workout?.id ? 'Update' : 'Save'} Workout
			</BasicButton>
		</form>
	);
};

export default WorkoutForm;
