import WorkingProgramSinglePrevData from './WorkingProgramSinglePrevData';

const WorkingProgramPrevData = ({ prevWorkout }: any) => {
	const prevData = {
		Workout: prevWorkout?.Workout ?? 'N/A',
		Exercise: prevWorkout?.Exercise ?? 'N/A',
		Manipulation: prevWorkout?.Manipulation ?? 'N/A',
		'Goal Weight': prevWorkout['Goal Weight'] ?? 0,
		'Weight Done': prevWorkout['Weight Done'] ?? 0,
		'Reps Target': prevWorkout['Reps Target'] ?? 0,
		'Reps Done': prevWorkout['Reps Done'] ?? 0,
		'Sets Target': prevWorkout['Sets Target'] ?? 0,
		'Sets Done': prevWorkout['Sets Done'] ?? 0,
	};

	if (!prevWorkout) {
		return null;
	}

	return (
		<div>
			<div className="semi-section-title text-right mb-4">
				Last Training Data
			</div>
			<div className="bg-card p-4 rounded-md">
				<div className="grid grid-cols-2 md:grid-cols-3 text-textPrimary">
					{Object.keys(prevData).map((key, index) => (
						<WorkingProgramSinglePrevData
							key={index}
							label={key}
							value={prevWorkout[key] ?? 'N/A'}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default WorkingProgramPrevData;
