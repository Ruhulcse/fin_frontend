'use client';
import BasicButton from '@/components/common/BasicButton';
import Input from '@/components/common/input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

type Inputs = {
	email: string;
	firstName: string;
	lastName: string;
	phone: string;
	dob: string;
	gender: string;
	address: string;
	city: string;
	state: string;
	zip: string;
	symptomFree: string;
	covid: string;
};

const schema = yup.object({
	email: yup.string().email().required('Please enter your email'),
	firstName: yup
		.string()
		.required('Please enter your first name')
		.min(3, 'First name must be at least 3 characters.'),
	lastName: yup
		.string()
		.required('Please enter your last name')
		.min(3, 'Last name must be at least 3 characters.'),
	phone: yup.string().required('Please enter your phone number'),
	dob: yup.string().required('Please enter your date of birth'),
	gender: yup.string().required('Please enter your gender'),
	address: yup.string().required('Please enter your address'),
	city: yup.string().required('Please enter your city'),
	state: yup.string().required('Please enter your state'),
	zip: yup.string().required('Please enter your zip code'),
	symptomFree: yup.string().required('Please enter your symptom free'),
	covid: yup.string().required('Please enter your covid'),
	signature: yup
		.mixed()
		.test('required', 'Please upload your signature', (value: any) => {
			return value && value.length > 0;
		}),
});

const HealthDeclarationForm = ({ id }: { id: string }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
	};
	return (
		<form
			className="health-declaration-form grid gap-2"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				name="firstName"
				label="First Name"
				register={register}
				errors={errors}
			/>
			<Input
				name="lastName"
				label="Last Name"
				register={register}
				errors={errors}
			/>
			<Input
				type="email"
				name="email"
				label="Email"
				register={register}
				errors={errors}
			/>
			<Input
				type="tel"
				name="phone"
				label="Phone Number"
				register={register}
				errors={errors}
			/>
			<Input
				type="date"
				name="dob"
				label="Date of Birth"
				register={register}
				errors={errors}
			/>
			<Input
				type="select"
				name="gender"
				label="Gender"
				register={register}
				errors={errors}
				options={[
					{
						label: 'Male',
						value: 'male',
					},
					{
						label: 'Female',
						value: 'female',
					},
					{
						label: 'Other',
						value: 'other',
					},
				]}
			/>
			<Input
				type="text"
				name="address"
				label="Address"
				register={register}
				errors={errors}
			/>
			<Input
				type="text"
				name="city"
				label="City"
				register={register}
				errors={errors}
			/>
			<Input
				type="text"
				name="state"
				label="State"
				register={register}
				errors={errors}
			/>
			<Input
				type="text"
				name="zip"
				label="Zip Code"
				register={register}
				errors={errors}
			/>
			<Input
				type="select"
				name="symptomFree"
				label="Symptom Free"
				register={register}
				errors={errors}
				options={[
					{
						label: 'Yes',
						value: 'yes',
					},
					{
						label: 'No',
						value: 'no',
					},
				]}
			/>
			<Input
				type="select"
				name="covid"
				label="Ensure to someone with COVID-19"
				register={register}
				errors={errors}
				options={[
					{
						label: 'Yes',
						value: 'yes',
					},
					{
						label: 'No',
						value: 'no',
					},
				]}
			/>
			<Input
				type="file"
				name="signature"
				label="Signature"
				register={register}
				errors={errors}
			/>

			<BasicButton
				type="submit"
				extraClasses="!m-0 !w-full !mt-6"
			>
				Submit
			</BasicButton>
		</form>
	);
};

export default HealthDeclarationForm;
