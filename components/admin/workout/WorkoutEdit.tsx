import { serverAuthFetch } from '@/lib/helper/fetch';
import WorkoutForm from './WorkoutForm';

export const getDetailsInfo = async (id: string) => {
	try {
		const res = await serverAuthFetch(`/${id}`, {
			next: { revalidate: 0 },
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		console.log('error', error);
	}
};

const WorkoutEdit = async ({ id }: { id: string }) => {
	const workout = await getDetailsInfo(id);
	return <section className="edit-workout grid gap-4 xl:gap-8">
		<h3 className="section-title text-right">Edit Workout</h3>
		<WorkoutForm  workout={workout} />
	</section>;
};

export default WorkoutEdit;
