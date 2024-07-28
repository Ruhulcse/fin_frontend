import ExerciseLibrary from '@/components/exercise-library/ExerciseLibrary';

const Page = ({ searchParams }: { searchParams: any }) => {
	return <ExerciseLibrary searchParams={searchParams} />;
};

export default Page;
