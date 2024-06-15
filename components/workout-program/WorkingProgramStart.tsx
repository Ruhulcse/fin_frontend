import { serverAuthFetch } from '@/lib/helper/fetch';
import Link from 'next/link';
import BasicButton from '../common/BasicButton';
import WorkingProgramInfo from './WorkingProgramInfo';
import WorkingProgramStartInput from './WorkingProgramStartInput';

export const getDetailsInfo = async (id: string) => {
	try {
		const res = await serverAuthFetch(`/${id}`, {
			next: { revalidate: 0 },
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		console.log('error', error);
	}
};
const WorkingProgramStart = async ({ id }: { id: string }) => {
	const workProgramDetails = await getDetailsInfo(id);
	return (
		<section className="grid gap-2 xl:gap-4">
			<WorkingProgramInfo workProgramDetails={workProgramDetails} />
			<WorkingProgramStartInput workProgramDetails={workProgramDetails} />
			<div className="actions flex justify-center xl:justify-end gap-2 xl:gap-4 mt-2">
				<Link
					href="/workout-program/start/232"
					className="w-full xl:w-max"
				>
					<BasicButton extraClasses="!w-full border-[#333333] bg-[#333333]">
						Previous Exercise
					</BasicButton>
				</Link>
				<Link
					href="/workout-program/start/232"
					className="w-full xl:w-max"
				>
					<BasicButton extraClasses="!w-full backdrop-blur-sm bg-white/20">
						Next Exercise
					</BasicButton>
				</Link>
			</div>
		</section>
	);
};

export default WorkingProgramStart;
