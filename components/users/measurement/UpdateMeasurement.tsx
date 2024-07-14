import PDFLinkDownload from '@/components/common/PDFLinkDownload';
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
				<div className="flex justify-end">
					<PDFLinkDownload
						url="Assets/Male_photo_tracking.pdf"
						label="Measurement PDF"
					/>
				</div>
			) : (
				<MeasurementWomenVideo />
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
