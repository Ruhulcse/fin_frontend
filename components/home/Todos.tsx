import { serverAuthFetch } from '@/lib/helper/fetch';
import BasicCard from '../common/BasicCard';

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
		return [{}, {}, {}, {}];
	}
};

const Todos = async () => {
	const todos = await getInfo();
	return (
		<section className="col-span-2">
			<h3 className="section-title text-right mb-4">Todo</h3>
			<div className="todos grid gap-4">
				{todos.map((todo: any, index: number) => (
					<div key={index}>
						<BasicCard link="/">
							<strong>Food Diary</strong>
							<small>Log your meals</small>
						</BasicCard>
					</div>
				))}
			</div>
		</section>
	);
};

export default Todos;
