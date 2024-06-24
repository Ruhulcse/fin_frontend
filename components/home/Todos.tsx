import { generateDataFromServer, nextProperties } from '@/lib/helper/fetch';
import BasicCard from '../common/BasicCard';

const Todos = async () => {
	const todos = await generateDataFromServer('todos', nextProperties(0));
	return (
		<section className="col-span-2">
			<h3 className="section-title text-right mb-4">Todo</h3>
			<div className="todos grid gap-4">
				{[{}, {}, {}, {}].map((todo: any, index: number) => (
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
