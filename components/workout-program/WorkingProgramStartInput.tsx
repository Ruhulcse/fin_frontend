'use client';

import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { ChangeEvent } from 'react';

const WorkingProgramStartInput = ({
	workProgramDetails,
	setUpdatedData,
}: any) => {
	const t = useTranslations('workoutProgramm');
	const details = t.raw('workoutDetails');
	const stateChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUpdatedData((prev: any) => ({
			...prev,
			exercises: prev.exercises.map((item: any) => {
				if (
					item.training_record_id === workProgramDetails?.training_record_id
				) {
					return {
						...item,
						[name]: value,
					};
				} else {
					return item;
				}
			}),
		}));
	};

	return (
		<section className={cn('work-start-input')}>
			<div className="flex-center-between work-input-header">
				<h3 className="section-title">{details.done}</h3>
				<h3 className="section-title">{details.target}</h3>
			</div>
			<div className="start-input-area">
				<div className="flex-center-between input">
					<input
						type="number"
						name="sets_done"
						min={0}
						onChange={stateChangeHandler}
						defaultValue={workProgramDetails?.sets_done ?? 0}
					/>
					<div className="start-info">
						<strong>{details.sets}</strong>
						<small>{workProgramDetails?.sets_to_do ?? 0}</small>
					</div>
				</div>
				<div className="flex-center-between input">
					<input
						type="number"
						name="reps_done"
						min={0}
						onChange={stateChangeHandler}
						defaultValue={workProgramDetails?.reps_done ?? 0}
					/>
					<div className="start-info">
						<strong>{details.reps}</strong>
						<small>{workProgramDetails?.reps_to_do ?? 0}</small>
					</div>
				</div>
				<div className="flex-center-between input">
					<input
						type="number"
						name="last_set_weight"
						min={0}
						defaultValue={workProgramDetails?.last_set_weight ?? 0}
						onChange={stateChangeHandler}
					/>
					<div className="start-info">
						<strong>{details.weight}</strong>
						<small>{workProgramDetails?.goal_weight ?? 0}</small>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkingProgramStartInput;
