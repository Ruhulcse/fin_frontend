'use client';
import { cn } from '@/lib/utils';
import { ReactNode, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import FileInput from './FileInput';
import Multiselect from './Multiselect';

const Input = ({
	type = 'text',
	extraClasses = '',
	name,
	footer,
	label,
	prefix,
	register,
	control,
	errors = {},
	options = [],
	left = false,
	accept = '',
	resetField,
	onClick,
}: {
	type?: string;
	extraClasses?: string;
	name: string;
	footer?: ReactNode;
	prefix?: ReactNode;
	label: string;
	register?: any;
	control?: any;
	errors?: any;
	options?: { value: string; label: string }[];
	left?: boolean;
	accept?: string;
	resetField?: any;
	onClick?: any;
}) => {
	const [passwordHidden, setPasswordHidden] = useState(true);
	return (
		<div
			className={cn(
				'basic-input text-white',
				extraClasses,
				type === 'checkbox'
					? 'flex flex-row-reverse items-center gap-2'
					: 'grid gap-2'
			)}
		>
			{label ? (
				<label
					className={cn('text-textPrimary', left ? '' : 'text-right')}
					htmlFor={name}
				>
					{label}
				</label>
			) : null}
			<div className="input-area relative text-textPrimary">
				{type === 'password' ? (
					passwordHidden ? (
						<FaEyeSlash
							onClick={() => setPasswordHidden(false)}
							className={cn(
								'fa-solid cursor-pointer absolute top-1/2 -translate-y-1/2',
								left ? 'right-3' : 'left-3'
							)}
						/>
					) : (
						<FaEye
							onClick={() => setPasswordHidden(true)}
							className={cn(
								'fa-solid cursor-pointer absolute top-1/2 -translate-y-1/2',
								left ? 'right-3' : 'left-3'
							)}
						/>
					)
				) : null}
				{!left ? <>{prefix ?? null}</> : null}
				{type === 'select' ? (
					<select
						className={cn(
							'w-full text-textPrimary rounded px-3 py-2 outline-none',
							left ? 'bg-primary text-left' : 'bg-card text-end'
						)}
						id={name}
						name={name}
						{...register(name)}
					>
						{options.map((option) => (
							<option
								key={option.value}
								value={option.value}
							>
								{option.label}
							</option>
						))}
					</select>
				) : type === 'textarea' ? (
					<textarea
						className={cn(
							`w-full text-textPrimary rounded px-3 py-2 outline-none text-end`,
							left ? 'bg-primary text-left' : 'bg-card text-end'
						)}
						id={name}
						name={name}
						{...register(name)}
					></textarea>
				) : type === 'file' ? (
					<FileInput
						register={register}
						name={name}
						accept={accept}
						resetField={resetField}
						control={control}
						onClick={onClick}
					/>
				) : type === 'multi-select' ? (
					<Multiselect
						options={options}
						control={control}
						name={name}
					/>
				) : (
					<input
						className={cn(
							`w-full  test-textPrimary rounded px-3 py-2 outline-none text-end`,
							left ? 'bg-primary text-left' : 'bg-card text-end'
						)}
						id={name}
						name={name}
						{...register(name)}
						type={!passwordHidden && type === 'password' ? 'text' : type}
					/>
				)}
				{left ? <>{prefix ?? null}</> : null}
			</div>
			{errors[name] ? (
				<p className={cn(' text-red-500', left ? 'text-left' : 'text-right')}>
					{errors[name]?.message}
				</p>
			) : null}
			{footer ?? null}
		</div>
	);
};

export default Input;
