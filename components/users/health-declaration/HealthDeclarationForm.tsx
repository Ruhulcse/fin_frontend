'use client';
import BasicButton from '@/components/common/BasicButton';
import Modal from '@/components/common/Modal';
import SignaturePadWrapper from '@/components/common/SignaturePad';
import Input from '@/components/common/input/Input';
import { base64StringToFile, getError } from '@/lib/helper/common';
import {
	healthDeclarationInputs,
	registrationInputs,
} from '@/lib/helper/inputs';
import { useUpdateUserMutation } from '@/store/features/user/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as yup from 'yup';

const schema = yup.object({});

const HealthDeclarationForm = ({ user }: { user: any }) => {
	const router = useRouter();
	const [imageURL, setImageURL] = useState<string>();
	const [open, setOpen] = useState(false);
	const [tab, setTab] = useState(1);
	const closeModal = () => setOpen(false);
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

	const [updateUser, { isLoading, isSuccess, isError, error }] =
		useUpdateUserMutation();

	const onSubmit: any = async (data: any) => {
		const health_declaration: any = {};
		const user_details: any = {};
		for (const key in data) {
			const [type, name] = key.split('__');
			if (type === 'health_declaration' && data[key]) {
				health_declaration[name] = data[key];
			} else if (type === 'user_details' && data[key]) {
				user_details[name] = data[key];
			}
		}
		const updatedData: any = {
			file: data?.file[0],
			user_details: JSON.stringify({
				...user_details,
				user_id: user?.id,
			}),
			health_declaration: JSON.stringify(health_declaration),
		};
		const formData = new FormData();
		for (const key in updatedData) {
			formData.append(key, updatedData[key]);
		}
		await updateUser({ data: formData, id: user?.id });
	};

	useEffect(() => {
		if (imageURL) {
			const file = base64StringToFile(imageURL, 'signature.png');
			setValue('file', [file]);
			closeModal();
		} else {
			resetField('file');
		}
		setValue('health_declaration__email', user?.email);
		setValue(
			'health_declaration__date',
			new Date().toISOString().split('T')[0]
		);
	}, [imageURL, resetField, setValue, user?.email]);

	useEffect(() => {
		if (isError) {
			toast.error(getError(error));
		} else if (isSuccess) {
			toast.success('User updated successfully');
			router.push('/');
		}
	}, [isSuccess, isError, router, error]);

	return (
		<form
			className="health-declaration-form grid gap-2"
			onSubmit={handleSubmit(onSubmit)}
		>
			{tab === 2 ? (
				<>
					{healthDeclarationInputs.map((input, index) => (
						<Input
							key={index}
							{...input}
							name={`health_declaration__${input.name}`}
							register={register}
							errors={errors}
						/>
					))}
					<Input
						type="file"
						name="file"
						label="Signature"
						register={register}
						errors={errors}
						accept="image/png, image/gif, image/jpeg"
						control={control}
						resetField={resetField}
						onClick={() => setOpen(true)}
					/>
					<Modal
						open={open}
						closeModal={closeModal}
					>
						<SignaturePadWrapper setImageURL={setImageURL} />
					</Modal>
				</>
			) : (
				<>
					{registrationInputs.map((input, index) => (
						<Input
							key={index}
							{...input}
							name={`user_details__${input.name}`}
							register={register}
							errors={errors}
						/>
					))}
				</>
			)}
			{tab === 2 ? (
				<div className="flex items-center gap-4">
					<BasicButton
						onClick={() => setTab(1)}
						hard
						extraClasses="!m-0 !w-full !mt-6"
						disabled={isLoading}
						type="button"
					>
						Prev
					</BasicButton>
					<BasicButton
						type="submit"
						extraClasses="!m-0 !w-full !mt-6"
						disabled={isLoading}
					>
						Submit
					</BasicButton>
				</div>
			) : (
				<BasicButton
					type="button"
					onClick={() => setTab(2)}
					hard
					extraClasses="!m-0 !w-full !mt-6"
					disabled={isLoading}
				>
					Next
				</BasicButton>
			)}
		</form>
	);
};

export default HealthDeclarationForm;
