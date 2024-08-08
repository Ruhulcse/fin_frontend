"use client";
import BasicCard from "@/components/common/BasicCard";
import NotDataFound from "@/components/common/message/NotDataFound";
import SkeletonGroup from "@/components/common/skeleton/SkeletonGroup";
import { useGetWorkoutsQuery } from "@/store/features/workout/api";
import WorkoutSmallInfo from "./WorkoutSmallInfo";
import { useTranslations } from "next-intl";

const WorkoutManage = ({ traineeId }: { traineeId: string }) => {
  const t = useTranslations("admin");
  const traineInfo = t.raw("traineeDetails");
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
      <h3 className="section-title text-right mb-4 xl:mb-8">Manage Workout</h3>
      <BasicCard link={`/admin/workout/add?trainee_id=${traineeId}`}>
        <strong>Add Workout</strong>
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
};

export default WorkoutManage;
