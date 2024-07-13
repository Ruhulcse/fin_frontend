import { ChangeEvent } from 'react';

const SelectInput = ({
	changeHandler,
	options = [],
	name,
	placeholder = 'Select',
	defaultValue = '',
}: {
	changeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
	options?: {
		label: string;
		value: string;
	}[];
	name?: string;
	placeholder?: string;
	defaultValue?: string;
}) => {
	return (
		<select
			className="bg-card text-textPrimary rounded-full px-3 py-1 outline-none"
			name={name}
			onChange={changeHandler}
			defaultValue={defaultValue}
		>
			<option
				value=""
				disabled
				selected
			>
				{placeholder}
			</option>
			{options.map((option, index) => (
				<option
					key={index}
					value={option.value}
				>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default SelectInput;
