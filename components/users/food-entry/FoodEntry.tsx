import { authOptions } from '@/lib/auth-options';
import { generateDataFromServer } from '@/lib/helper/server-fetch';
import { getServerSession } from 'next-auth';

const FoodEntry = async ({ id }: { id: string }) => {
	const session = await getServerSession(authOptions());
	const { data: tasks = {} } = await generateDataFromServer(
		`tasks/${session?.user?.id}?task_id=${id}`
	);
	const task = tasks[0];
	return (
		<section className="health-declaration grid gap-2 xl:gap-4">
			<h3 className="section-title text-right">{task?.task_name ?? 'N/A'}</h3>
			<p className="text-textPrimary text-[12px] sm:text-[16px] xl:text-[20px] text-right">
				Status : {task?.task_status ?? 'N/A'}
			</p>
			<p className="text-textPrimary text-[12px] sm:text-[16px] xl:text-[20px] text-right">
				{task?.task_description ?? 'N/A'}
			</p>
		</section>
	);
};

export default FoodEntry;
