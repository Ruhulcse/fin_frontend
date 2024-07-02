import workoutProgramImg from '@/assets/images/workout.png';
import Image from 'next/image';
import Link from 'next/link';
import BasicButton from '../common/BasicButton';
const WorkingProgram = ({ workoutProgram }: any) => {
	return (
		<div className="workout-program">
			<Image
				src={workoutProgramImg}
				alt="workout program"
			/>
			<div className="workout-info">
				<h4 className="workout-program-title">
					{workoutProgram.workout_name ?? 'The Total Attack'}
				</h4>
				<div className="actions">
					<Link href={`/workout-program/view/${workoutProgram.workout_id}`}>
						<BasicButton extraClasses="!w-full border-[#FAEAEB] text-[#FAEAEB] bg-[#ffffff00]">
							View Workout
						</BasicButton>
					</Link>
					<Link href={`/workout-program/start/${workoutProgram.workout_id}`}>
						<BasicButton extraClasses="!w-full backdrop-blur-sm text-[#FAEAEB] bg-white/20">
							Start Workout
						</BasicButton>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default WorkingProgram;
