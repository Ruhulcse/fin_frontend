'use client';

import { ChangeEvent, useState } from 'react';

const WorkingProgramStartInput = ({ workProgramDetails }: any) => {
	const [inputs, setInputs] = useState({});

	const stateChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputs((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<section className="work-start-input">
			<div className="flex-center-between work-input-header">
				<h3 className="section-title">Target</h3>
				<h3 className="section-title">Done</h3>
			</div>
			<div className="start-input-area">
				<div className="flex-center-between input">
					<input
						type="text"
						name="sets"
						onChange={stateChangeHandler}
						defaultValue={5}
					/>
					<div className="start-info">
						<strong>Steps</strong>
						<small>{workProgramDetails?.sets ?? 5}</small>
					</div>
				</div>
				<div className="flex-center-between input">
					<input
						type="text"
						name="reps"
						onChange={stateChangeHandler}
						defaultValue={8}
					/>
					<div className="start-info">
						<strong>Reps</strong>
						<small>{workProgramDetails?.reps ?? 8}</small>
					</div>
				</div>
				<div className="flex-center-between input">
					<input
						type="text"
						name="weight"
						defaultValue={80}
						onChange={stateChangeHandler}
					/>
					<div className="start-info">
						<strong>Weight (lbs)</strong>
						<small>{workProgramDetails?.weight ?? 80}</small>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkingProgramStartInput;
