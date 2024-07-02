import { ChangeEvent } from 'react';

const SelectInput = ({
	changeHandler,
	options = [],
}: {
	changeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
	options?: {
		name: string;
		value: string;
	}[];
}) => {
	return (
		<select
			className="bg-card text-textPrimary rounded-full px-3 py-1 outline-none"
			name="type"
			onChange={changeHandler}
		>
			{options.map((option, index) => (
				<option
					key={index}
					value={option.value}
				>
					{option.name}
				</option>
			))}
		</select>
	);
};

export default SelectInput;
