import { serverAuthFetch } from '@/lib/helper/fetch';
import WorkingProgramInfo from './WorkingProgramInfo';

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

const WorkingProgramView = async ({ id }: { id: string }) => {
	const workProgramDetails = await getDetailsInfo(id);
	return <WorkingProgramInfo workProgramDetails={workProgramDetails} />;
};

export default WorkingProgramView;
