import SkeletonGroup from "@/components/common/skeleton/SkeletonGroup";
import { generateDataFromServer } from "@/lib/helper/server-fetch";
import { getTranslations } from "next-intl/server";

const TraineeFiles = async ({ traineeId }: { traineeId: string }) => {
  const { data: user = {} } = await generateDataFromServer(
    `users/${traineeId}`
  );
  const t = await getTranslations("traineeDetails");
  const trainee = t.raw("traineeData");
  return (
    <>
      <div>
        <h3 className="section-title text-right">{trainee.traineeFiles}</h3>
        <h3 className="section-title text-right">
          {user?.first_name ?? ""} {user?.last_name ?? ""}
        </h3>
        <div className="grid gap-4 mt-4">
          <SkeletonGroup count={3} />
        </div>
      </div>
    </>
  );
};

export default TraineeFiles;
