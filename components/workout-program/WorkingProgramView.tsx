import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import WorkingProgramInfo from './WorkingProgramInfo';

const WorkingProgramView = async ({ id }: { id: string }) => {
	const { data: workout = {} } = await generateDataFromServer(
		`workouts/${id}`,
		nextProperties(0)
	);
	return <WorkingProgramInfo workProgramDetails={workout} />;
};

export default WorkingProgramView;
