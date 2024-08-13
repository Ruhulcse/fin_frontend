"use client";
import BasicCard from "@/components/common/BasicCard";
import NotDataFound from "@/components/common/message/NotDataFound";
import SkeletonGroup from "@/components/common/skeleton/SkeletonGroup";
import { useGetExercisesQuery } from "@/store/features/exercise/api";
import ExerciseSmallInfo from "./ExerciseSmallInfo";
import { useTranslations } from "next-intl";

const ExerciseManage = () => {
  const { data = {}, isLoading } = useGetExercisesQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const { data: exercises = [] } = data || {};
  const t = useTranslations("exercise");
  const excData = t.raw("exerciseForm");
  return (
    <section className="exercise-list-area">
      <h3 className="section-title text-right mb-4 xl:mb-8">
        {excData.mngExc}
      </h3>
      <BasicCard link="/admin/exercise/add">
        <strong>{excData.addExc}</strong>
      </BasicCard>
      <br />
      <div className="grid grid-cols-1 gap-4">
        {isLoading ? (
          <SkeletonGroup count={3} />
        ) : exercises?.length > 0 ? (
          exercises?.map((exercise: any, index: number) => (
            <ExerciseSmallInfo exercise={exercise} key={index} />
          ))
        ) : (
          <NotDataFound />
        )}
      </div>
    </section>
  );
};

export default ExerciseManage;
