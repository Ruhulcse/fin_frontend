import { generateDataFromServer } from "@/lib/helper/server-fetch";
import { getTranslations } from "next-intl/server";
import { FaPersonWalking } from "react-icons/fa6";
import Progress from "./Progress";

const Steps = async ({ homeI18n }: { homeI18n: { stepsTitle: string } }) => {
  const { data: steps = [] } = await generateDataFromServer(
    "tracking/steps-stats"
  );
  const dailyStep = steps?.avarage;
  const t = await getTranslations("steps");
  return (
    <section className="col-span-2 sm:col-span-1 home-card grid gap-4 section-area !bg-cyan-100">
      <h3 className="home-card-title text-center">{homeI18n?.stepsTitle}</h3>
      <FaPersonWalking className="mx-auto h-[24px] w-[24px] lg:h-[42px] lg:w-[42px]" />
      <div className="step-info">
        <div className="done grid">
          <strong>{dailyStep?.step_average}</strong>
          <span className="text-center">{t("done")}</span>
        </div>
        <div className="target grid items-center">
          <strong>
            <span>/</span> {dailyStep?.step_target}
          </strong>
          <span className="text-center">{t("target")}</span>
        </div>
      </div>
      <Progress dailyStep={dailyStep}/>
    </section>
  );
};

export default Steps;
