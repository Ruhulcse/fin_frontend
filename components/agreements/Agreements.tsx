import { serverAuthFetch } from '@/lib/helper/fetch';
import Agreement from './Agreement';

export const getInfo = async () => {
	try {
		const res = await serverAuthFetch(``, {
			next: { revalidate: 0 },
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		return [{}, {}, {}, {}, {}, {}];
	}
};
const Agreements = async () => {
	const agreements = await getInfo();
	return (
		<section className="agreements">
			{agreements.map((agreement: any, index: number) => (
				<Agreement
					agreement={agreement}
					key={index}
				/>
			))}
		</section>
	);
};

export default Agreements;
