import {
  generateDataFromServer,
  nextProperties,
} from "@/lib/helper/server-fetch";
import WorkoutForm from "./WorkoutForm";
import { getTranslations } from "next-intl/server";

const WorkoutAdd = async ({ traineeId }: { traineeId: string }) => {
  const { data: userWorkouts = [] } = await generateDataFromServer(
    `workouts`,
    nextProperties()
  );
  const t = await getTranslations("admin");
  const execData = t.raw("workout");
  return (
    <section className="add-workout grid gap-4 xl:gap-8">
      <h3 className="section-title text-right">{execData.addWorkout}</h3>
      <WorkoutForm traineeId={traineeId} userWorkouts={userWorkouts} />
    </section>
  );
};

export default WorkoutAdd;
