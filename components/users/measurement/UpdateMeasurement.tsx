import { authOptions } from '@/lib/auth-options';
import { generateDataFromServer } from '@/lib/helper/server-fetch';
import { getServerSession } from 'next-auth';
import MeasurementInput from './MeasurementInput';
import MeasurementWomenVideo from './MeasurementWomenVideo';

const UpdateMeasurement = async ({ taskId }: { taskId?: string }) => {
	const { user = {} }: any = await getServerSession(authOptions());
	const { data: measurement } = await generateDataFromServer(
		`tracking/latest-measurement/${user?.id}`
	);
	return (
		<section>
			<h3 className="section-title text-right">User Measurement</h3>
			{user.gender === 'male' ? (
				<MeasurementWomenVideo src="https://youtu.be/iKJWC6dDjKQ?feature=shared" />
			) : (
				<MeasurementWomenVideo src="https://www.youtube.com/watch?v=uUo9Bw5ytrI" />
			)}
			{user ? (
				<MeasurementInput
					taskId={taskId}
					user={user}
					measurement={measurement}
				/>
			) : null}
		</section>
	);
};

export default UpdateMeasurement;
