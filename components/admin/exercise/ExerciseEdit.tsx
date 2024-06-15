import { serverAuthFetch } from '@/lib/helper/fetch';
import ExerciseForm from './ExerciseForm';

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
const ExerciseEdit = async ({ id }: { id: string }) => {
	const exercise = await getDetailsInfo(id);

	return (
		<section className="edit-exercise grid gap-4 xl:gap-8">
			<h3 className="section-title text-right">Edit Exercise</h3>
			<ExerciseForm exercise={exercise} />
		</section>
	);
};

export default ExerciseEdit;
