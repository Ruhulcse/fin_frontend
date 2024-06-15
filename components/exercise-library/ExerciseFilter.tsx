'use client';
import { toQueryString } from '@/lib/helper/common';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import SearchInput from '../common/input/SearchInput';
import SelectInput from '../common/input/SelectInput';

const ExerciseFilter = () => {
	const [inputs, setInputs] = useState({});
	const router = useRouter();

	let timeout: any;
	const stateChangeHandler = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			const { name, value } = e.target;
			setInputs((prev) => ({ ...prev, [name]: value }));
			router.push(
				`/exercise-library${toQueryString({ ...inputs, [name]: value })}`
			);
		}, 500);
	};
	return (
		<section className="grid gap-2 xl:gap-4 place-items-end mb-4 xl:mb-6">
			<SearchInput changeHandler={stateChangeHandler} />
			<div className="w-full select-exercise grid grid-cols-[repeat(4,1fr)] xl:grid-cols-[repeat(4,max-content)] place-content-end gap-2 xl:gap-4">
				<SelectInput
					changeHandler={stateChangeHandler}
					options={[{ name: 'All', value: 'all' }]}
				/>
				<SelectInput
					changeHandler={stateChangeHandler}
					options={[{ name: 'chest', value: 'chest' }]}
				/>
				<SelectInput
					changeHandler={stateChangeHandler}
					options={[{ name: 'back', value: 'back' }]}
				/>
				<SelectInput
					changeHandler={stateChangeHandler}
					options={[{ name: 'legs', value: 'legs' }]}
				/>
			</div>
		</section>
	);
};

export default ExerciseFilter;
