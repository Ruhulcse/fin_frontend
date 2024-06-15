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
					{workoutProgram.title ?? 'The Total Attack'}
				</h4>
				<div className="actions">
					<Link href="/workout-program/view/232">
						<BasicButton extraClasses="!w-full border-[#F1D7B5] bg-[#00000000]">
							View Workout
						</BasicButton>
					</Link>
					<Link href="/workout-program/start/232">
						<BasicButton extraClasses="!w-full backdrop-blur-sm bg-white/20">
							Start Workout
						</BasicButton>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default WorkingProgram;
