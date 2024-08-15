import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";
import WorkingProgramView from "@/components/workout-program/WorkingProgramView";
import { useTranslations } from "next-intl";

const Page = ({ params }: { params: { id: string } }) => {
  const t = useTranslations("admin");
  const workout = t.raw("workout");
  return (
    <BackLinkWrapper href="/workout-program" title={workout.backToWorkout}>
      <WorkingProgramView id={params.id} />
    </BackLinkWrapper>
  );
};

export default Page;
