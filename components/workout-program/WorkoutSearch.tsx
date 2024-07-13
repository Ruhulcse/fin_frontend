'use client';

import { toQueryString } from '@/lib/helper/common';
import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';
import SearchInput from '../common/input/SearchInput';

const WorkoutSearch = ({ searchParams }: { searchParams: any }) => {
	const router = useRouter();
	let timeout: any;
	const stateChangeHandler = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			const { name, value } = e.target;
			router.push(`/workout-program${toQueryString({ [name]: value })}`);
		}, 500);
	};

	return (
		<>
			<SearchInput
				changeHandler={stateChangeHandler}
				defaultValue={searchParams.search}
			/>
			<br />
		</>
	);
};

export default WorkoutSearch;
