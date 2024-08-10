import BasicCard from '@/components/common/BasicCard';
import NotDataFound from '@/components/common/message/NotDataFound';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import WorkoutSmallInfo from './WorkoutSmallInfo';

<<<<<<< HEAD
const WorkoutManage = ({ traineeId }: { traineeId: string }) => {
  const t = useTranslations("admin");
  const traineInfo = t.raw("workout");
  const { data = {}, isLoading } = useGetWorkoutsQuery(
    {
      query: `user_id=${traineeId}`,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const { data: workouts = [] } = data || {};
  return (
    <section className="exercise-list-area">
      <h3 className="section-title text-right mb-4 xl:mb-8">
        {traineInfo.manageWorkout}
      </h3>
      <BasicCard link={`/admin/workout/add?trainee_id=${traineeId}`}>
        <strong>{traineInfo.addWorkout}</strong>
      </BasicCard>
      <br />
      <div className="grid grid-cols-1 gap-4">
        {isLoading ? (
          <SkeletonGroup count={3} />
        ) : workouts?.length > 0 ? (
          workouts?.map((workout: any, index: number) => (
            <WorkoutSmallInfo
              workout={workout}
              traineeId={traineeId}
              key={index}
            />
          ))
        ) : (
          <NotDataFound />
        )}
      </div>
    </section>
  );
=======
const WorkoutManage = async ({
	traineeId,
	trainingId,
}: {
	traineeId: string;
	trainingId: string;
}) => {
	const { data: workouts = [] } = await generateDataFromServer(
		`workouts?user_id=${traineeId}&training_id=${trainingId}`,
		nextProperties()
	);
	return (
		<section className="exercise-list-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">Manage Workout</h3>
			<BasicCard
				link={`/admin/workout/add?trainee_id=${traineeId}&training_id=${trainingId}`}
			>
				<strong>Add Workout</strong>
			</BasicCard>
			<br />
			<div className="grid grid-cols-1 gap-4">
				{workouts?.length > 0 ? (
					workouts?.map((workout: any, index: number) => (
						<WorkoutSmallInfo
							workout={workout}
							traineeId={traineeId}
							trainingId={trainingId}
							key={index}
						/>
					))
				) : (
					<NotDataFound />
				)}
			</div>
		</section>
	);
>>>>>>> 45f219952233fc7e34414a73014023d720f46644
};

export default WorkoutManage;
