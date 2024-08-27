import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import ExerciseForm from "./ExerciseForm";
import { useTranslations } from "next-intl";

const ExerciseAdd = () => {
  const t = useTranslations("exercise");
  const excForm = t.raw("exerciseForm");
  return (
    <BackLinkWrapper
      href="/admin/exercise/manage"
      title={excForm.backToMngExercise}
    >
      <section className="add-exercise grid gap-4 xl:gap-8">
        <h3 className="section-title text-right">{excForm.addExc}</h3>
        <ExerciseForm excForm={excForm} />
      </section>
    </BackLinkWrapper>
  );
};

export default ExerciseAdd;
