import { serverAuthFetch } from '@/lib/helper/fetch';
import Exercise from './Exercise';
export const getInfo = async (searchParams: any) => {
	try {
		const queryParams = new URLSearchParams(searchParams);
		const res = await serverAuthFetch(`?${queryParams}`, {
			next: { revalidate: 0 },
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		return [{}, {}, {}];
	}
};
const ExerciseList = async ({ searchParams }: { searchParams: any }) => {
	const exercises = await getInfo(searchParams);
	return (
		<section className="exercise-list-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">Exercise List</h3>
			<div className="grid grid-cols-1 gap-4">
				{exercises.map((exercise: any, index: number) => (
					<Exercise
						exercise={exercise}
						key={index}
					/>
				))}
			</div>
		</section>
	);
};

export default ExerciseList;
