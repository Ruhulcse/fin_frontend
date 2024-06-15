import { serverAuthFetch } from '@/lib/helper/fetch';
import { FaPersonWalking } from 'react-icons/fa6';

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
		return { done: 10000, target: 28000 };
	}
};

const Steps = async () => {
	const step = await getDetailsInfo();
	return (
		<section className="home-card grid gap-2 section-area">
			<h3 className="home-card-title text-center">Steps</h3>
			<FaPersonWalking className="mx-auto h-[24px] w-[24px] lg:h-[42px] lg:w-[42px]" />
			<div className="step-info">
				<div className="done grid">
					<strong>{step?.done}</strong>
					<span className="text-center">Done</span>
				</div>
				<div className="target grid items-center">
					<strong>
						<span>/</span> {step?.target}
					</strong>
					<span className="text-center">Target</span>
				</div>
			</div>
		</section>
	);
};

export default Steps;
