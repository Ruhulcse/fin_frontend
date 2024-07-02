import { Controller } from 'react-hook-form';
import Select from 'react-select';
const Multiselect = ({ options, control, name }: any) => {
	const colorStyles = {
		option: (styles: any) => ({
			...styles,
			background: '#33393F',
			cursor: 'pointer',
		}),
	};
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }: any) => (
				<Select
					className="w-full bg-card text-textPrimary rounded py-1 outline-none text-end react-multi-select"
					{...field}
					isMulti
					options={options}
					styles={colorStyles}
				/>
			)}
		/>
	);
};

export default Multiselect;
