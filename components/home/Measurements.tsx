import { generateDataFromServer } from '@/lib/helper/server-fetch';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';
import Measurement from './Measurement';

const preData = [
	// {
	// 	name: 'weight',
	// 	label: 'Weight',
	// 	unit: 'lbs',
	// },
	{
		name: 'chest',
		label: 'Chest',
		unit: 'cm',
	},
	{
		name: 'armr',
		label: 'Arm Right',
		unit: 'cm',
	},
	{
		name: 'thighr',
		label: 'Thigh Right',
		unit: 'cm',
	},
	{
		name: 'waist',
		label: 'Waist',
		unit: 'cm',
	},
	{
		name: 'arml',
		label: 'Arm Left',
		unit: 'cm',
	},

	{
		name: 'thighl',
		label: 'Thigh Left',
		unit: 'cm',
	},
	// {
	// 	name: 'body_fat_percentage',
	// 	label: 'Body Fat',
	// 	unit: '%',
	// },
];

const Measurements = async ({
	userId,
	homeI18n,
}: {
	userId: string;
	homeI18n: { measurementTitle: string };
}) => {
	const { data: measurement } = await generateDataFromServer(
		`tracking/latest-measurement/${userId}`
	);
	return (
		<section className="home-card col-span-2 sm:col-span-1 measurement-area">
			<h3 className="home-card-title text-center flex items-center justify-center gap-2 mb-2">
				{homeI18n?.measurementTitle}
				<Link href={`/measurement`}>
					<FaEdit size={14} />
				</Link>
			</h3>
			<div className="measurements">
				{preData.map((label: any, index: number) => (
					<Measurement
						measurement={measurement}
						label={label}
						key={index}
					/>
				))}
			</div>
		</section>
	);
};

export default Measurements;
