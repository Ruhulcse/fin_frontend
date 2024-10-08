'use client';

import { sortArray, toQueryString } from '@/lib/helper/common';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import SearchInput from '../common/input/SearchInput';
import SelectInput from '../common/input/SelectInput';

const WorkoutSearch = ({
	searchParams,
	trainings,
}: {
	searchParams: any;
	trainings: any;
}) => {
	const t = useTranslations('common');
	const router = useRouter();
	const [searchValues, setSearchValues] = useState({});
	let timeout: any;
	const stateChangeHandler = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			const { name, value } = e.target;
			setSearchValues((prev: any) => ({ ...prev, [name]: value }));
			router.push(
				`/workout-program${toQueryString({ ...searchValues, [name]: value })}`
			);
		}, 500);
	};

	return (
		<div className="grid grid-cols-2 gap-2 mb-4">
			<SearchInput
				changeHandler={stateChangeHandler}
				defaultValue={searchParams.search}
			/>
			<SelectInput
				changeHandler={stateChangeHandler}
				name="training_id"
				options={[
					{ label: t('selectAll'), value: '' },
					...sortArray(trainings, 'training_id').map((training: any) => ({
						label: training.training_name,
						value: training.training_id,
					})),
				]}
				defaultValue={searchParams?.training_id ?? ''}
				placeholder={t('selectTrainig')}
				extraClassName="rounded"
			/>
		</div>
	);
};

export default WorkoutSearch;
