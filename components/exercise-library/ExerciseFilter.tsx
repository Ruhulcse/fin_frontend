'use client';
import { toQueryString } from '@/lib/helper/common';
import { areaOptions, equipmentOptions } from '@/lib/helper/options';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import SearchInput from '../common/input/SearchInput';
import SelectInput from '../common/input/SelectInput';

const ExerciseFilter = ({ searchParams }: { searchParams: any }) => {
	const [inputs, setInputs] = useState<any>({});
	const router = useRouter();

	let timeout: any;
	const stateChangeHandler = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			const { name, value } = e.target;
			setInputs((prev: any) => ({ ...prev, [name]: value }));
			router.push(
				`/exercise-library${toQueryString({ ...inputs, [name]: value })}`
			);
		}, 500);
	};

	const findAll = () => {
		setInputs({ search: searchParams?.search ?? '' });
		router.push(
			`/exercise-library${toQueryString({
				search: searchParams?.search ?? '',
			})}`
		);
	};

	return (
		<section className="grid gap-2 xl:gap-4 place-items-end mb-4 xl:mb-6">
			<SearchInput
				changeHandler={stateChangeHandler}
				name="search"
				defaultValue={searchParams?.search}
			/>
			<div className="w-full select-exercise grid grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(3,max-content)] place-content-end gap-2 xl:gap-4">
				<button
					className={cn(
						'bg-card text-textPrimary rounded-full px-6 py-1 outline-none'
					)}
					onClick={findAll}
				>
					All
				</button>
				<SelectInput
					changeHandler={stateChangeHandler}
					name="equipment"
					options={equipmentOptions}
					placeholder="Select Equipment"
					defaultValue={searchParams?.equipment}
				/>
				<SelectInput
					changeHandler={stateChangeHandler}
					name="area"
					options={areaOptions}
					placeholder="Select Area"
					defaultValue={searchParams?.area}
				/>
			</div>
		</section>
	);
};

export default ExerciseFilter;
