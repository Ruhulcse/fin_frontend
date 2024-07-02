import { authOptions } from '@/lib/auth-options';
import { generateDataFromServer } from '@/lib/helper/server-fetch';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import MeasurementInput from './MeasurementInput';

const UpdateMeasurement = async () => {
	const { user = {} }: any = await getServerSession(authOptions());
	const { data: measurement } = await generateDataFromServer(
		`tracking/latest-measurement/${user?.id}`
	);
	return (
		<section>
			<h3 className="section-title text-right">User Measurement</h3>
			<Link
				className="text-secondary flex justify-end underline"
				href={`/pdf?url=Assets/Male_photo_tracking.pdf`}
				target="_blank"
			>
				Measurement PDF
			</Link>
			{user ? (
				<MeasurementInput
					user={user}
					measurement={measurement}
				/>
			) : null}
		</section>
	);
};

export default UpdateMeasurement;
