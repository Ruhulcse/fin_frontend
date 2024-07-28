import WorkingPrograms from '@/components/workout-program/WorkingPrograms';

const Page = ({searchParams}:{searchParams:any}) => {
	return <WorkingPrograms searchParams={searchParams} />;
};

export default Page;
