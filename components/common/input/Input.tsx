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
}) => {
	const [passwordHidden, setPasswordHidden] = useState(true);
	return (
		<div className={cn('basic-input grid gap-2 text-white', extraClasses)}>
			{label ? (
				<label
					className="text-right"
					htmlFor={name}
				>
					{label}
				</label>
			) : null}
			<div className="input-area relative text-[#33393F]">
				{type === 'password' ? (
					passwordHidden ? (
						<FaEyeSlash
							onClick={() => setPasswordHidden(false)}
							className="fa-solid cursor-pointer absolute left-3 top-1/2 -translate-y-1/2"
						/>
					) : (
						<FaEye
							onClick={() => setPasswordHidden(true)}
							className="fa-solid cursor-pointer absolute left-3 top-1/2 -translate-y-1/2"
						/>
					)
				) : null}
				{prefix ?? null}
				{type === 'select' ? (
					<select
						className="w-full bg-[#33393F] text-[#ececec] rounded px-3 py-2 outline-none text-end"
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
							`w-full bg-[#33393F] text-[#ececec] rounded px-3 py-2 outline-none text-end`
						)}
						id={name}
						name={name}
						{...register(name)}
					></textarea>
				) : type === 'file' ? (
					<FileInput
						register={register}
						name={name}
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
							`w-full bg-[#33393F] text-[#ececec] rounded px-3 py-2 outline-none text-end`
						)}
						id={name}
						name={name}
						{...register(name)}
						type={!passwordHidden && type === 'password' ? 'text' : type}
					/>
				)}
			</div>
			{errors[name] ? (
				<p className="text-right text-red-500">{errors[name]?.message}</p>
			) : null}
			{footer ?? null}
		</div>
	);
};

export default Input;
