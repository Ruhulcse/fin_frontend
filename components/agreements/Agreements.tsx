import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import Agreement from './Agreement';

const Agreements = async () => {
	const { data: agreements = [] } = await generateDataFromServer(
		'users/agreements',
		nextProperties(0)
	);
	return (
		<section className="agreements">
			{agreements?.map((agreement: any, index: number) => (
				<Agreement
					agreement={agreement}
					key={index}
				/>
			))}
		</section>
	);
};

export default Agreements;
