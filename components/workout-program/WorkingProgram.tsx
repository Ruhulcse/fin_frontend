import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import BasicButton from '../common/BasicButton';
const WorkingProgram = async ({ workoutProgram, userRole }: any) => {
	const t = await getTranslations('workoutProgramm');
	const details = t.raw('workoutDetails');
	return (
		<div className="workout-program">
			<div className="workout-info">
				<h4 className="workout-program-title">{workoutProgram.workout_name}</h4>
				<div className="actions">
					<Link
						className="w-full"
						href={`/workout-program/view/${workoutProgram.workout_id}`}
					>
						<BasicButton extraClasses="!w-full border-[#FAEAEB] text-[#FAEAEB] bg-[#ffffff00]">
							{details?.viewWorkout}
						</BasicButton>
					</Link>
					{userRole === 'admin' ? null : (
						<Link
							className="w-full"
							href={`/workout-program/start/${workoutProgram.workout_id}`}
						>
							<BasicButton extraClasses="!w-full backdrop-blur-sm text-[#FAEAEB] bg-white/20">
								{details?.startWorkout}
							</BasicButton>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default WorkingProgram;
