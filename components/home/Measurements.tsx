import { arm, thigh, waist } from '@/assets/svg/measurements';
import { serverAuthFetch } from '@/lib/helper/fetch';
import Measurement from './Measurement';

export const getDetailsInfo = async () => {
	try {
		const res = await serverAuthFetch(`/`, {
			next: { revalidate: 0 },
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		return [
			{
				name: 'Waist',
				value: '15',
				unit: 'cm',
				icon: waist,
			},
			{
				name: 'Arm',
				value: '15',
				unit: 'cm',
				icon: arm,
			},
			{
				name: 'Thigh',
				value: '25',
				unit: 'cm',
				icon: thigh,
			},
		];
	}
};

const Measurements = async () => {
	const measurements = await getDetailsInfo();
	return (
		<section className="home-card measurement-area">
			<h3 className="home-card-title text-center">Measurements</h3>
			<div className="measurements">
				{measurements.map((measurement: any, index: number) => (
					<Measurement
						measurement={measurement}
						key={index}
					/>
				))}
			</div>
		</section>
	);
};

export default Measurements;
