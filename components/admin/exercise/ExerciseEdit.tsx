"use client";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import { useGetExerciseQuery } from "@/store/features/exercise/api";
import ExerciseForm from "./ExerciseForm";
import { useTranslations } from "next-intl";

const ExerciseEdit = ({ id }: { id: string }) => {
  const { data = {} } = useGetExerciseQuery(id, {
    skip: !id,
    refetchOnMountOrArgChange: true,
  });
  const { data: exercise = {} } = data || {};
  const t = useTranslations("exercise");
  const excForm = t.raw("exerciseForm");
  return (
    <BackLinkWrapper
      href="/admin/exercise/manage"
      title="Back To Manage Exercises"
    >
      <section className="edit-exercise grid gap-4 xl:gap-8">
        <h3 className="section-title text-right">{excForm.edit}</h3>
        <ExerciseForm exercise={exercise} />
      </section>
    </BackLinkWrapper>
  );
};

export default ExerciseEdit;
