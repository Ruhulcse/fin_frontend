import {
	generateDataFromServer,
	nextProperties,
	serverAuthFetch,
} from '@/lib/helper/fetch';
import Agreement from './Agreement';

const Agreements = async () => {
	const agreements = await generateDataFromServer(
		'agreements',
		nextProperties(0)
	);
	return (
		<section className="agreements">
			{[{}, {}, {}, {}, {}, {}].map((agreement: any, index: number) => (
				<Agreement
					agreement={agreement}
					key={index}
				/>
			))}
		</section>
	);
};

export default Agreements;
