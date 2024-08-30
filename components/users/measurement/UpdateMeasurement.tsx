import { authOptions } from "@/lib/auth-options";
import { generateDataFromServer } from "@/lib/helper/server-fetch";
import { getServerSession } from "next-auth";
import MeasurementInput from "./MeasurementInput";
import MeasurementWomenVideo from "./MeasurementWomenVideo";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

const UpdateMeasurement = async ({ taskId }: { taskId?: string }) => {
  const t = await getTranslations("userMeasurments");
  const formLabel = t.raw("measurmentForm");
  const formErr = t.raw("measurmentErr");
  const { user = {} }: any = await getServerSession(authOptions());
  const { data: measurement } = await generateDataFromServer(
    `tracking/latest-measurement/${user?.id}`
  );
  console.log(user.gender);
  return (
    <section>
      <h3 className="section-title text-right">{formLabel.title}</h3>
      {user.gender === "male" ? (
        <MeasurementWomenVideo src="https://youtu.be/iKJWC6dDjKQ?feature=shared" />
      ) : (
        <MeasurementWomenVideo src="https://www.youtube.com/watch?v=uUo9Bw5ytrI" />
      )}
      {user ? (
        <MeasurementInput
          taskId={taskId}
          user={user}
          measurement={measurement}
          formLabel={formLabel}
          formErr={formErr}
        />
      ) : null}
    </section>
  );
};

export default UpdateMeasurement;
