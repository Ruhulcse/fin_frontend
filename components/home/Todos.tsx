import { authOptions } from '@/lib/auth-options';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import { getServerSession } from 'next-auth';
import BasicCard from '../common/BasicCard';
import NotDataFound from '../common/message/NotDataFound';
import { sortArray } from '@/lib/helper/common';

const Todos = async ({ homeI18n }: { homeI18n: { todoTitle: string } }) => {
	const session = await getServerSession(authOptions());
	const { data: todos = [] } = await generateDataFromServer(
		`tasks/${session?.user?.id}?task_status=Pending`,
		nextProperties()
	);
	return (
		<section className="col-span-2">
			<h3 className="section-title text-right mb-4">{homeI18n.todoTitle}</h3>
			{todos?.length > 0 ? (
				<div className="todos grid gap-4">
					{sortArray(todos, 'task_id')?.map((task: any, index: number) => (
						<div key={index}>
							<BasicCard
								link={
									task?.task_type === 'measure'
										? `/measurement?task_id=${task?.task_id}`
										: task?.task_type === 'workout'
										? `/workout-program/start/${task?.workout_id}?task_id=${task?.task_id}`
										: `/food-entry/add?task_id=${task?.task_id}`
								}
							>
								<strong>{task?.task_name}</strong>
								<strong className="text-secondary">
									{task?.task_status}({task?.task_type})
								</strong>
								<small>{task?.task_description}</small>
							</BasicCard>
						</div>
					))}
				</div>
			) : (
				<NotDataFound />
			)}
		</section>
	);
};

export default Todos;
