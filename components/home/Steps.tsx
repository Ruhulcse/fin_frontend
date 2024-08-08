import {
  generateDataFromServer,
  nextProperties,
} from "@/lib/helper/server-fetch";
import { getTranslations } from "next-intl/server";
import { FaPersonWalking } from "react-icons/fa6";

const staticData = { done: 10000, target: 28000 };

const Steps = async ({ homeI18n }: { homeI18n: { stepsTitle: string } }) => {
  const step = await generateDataFromServer("/", nextProperties());
  const t = await getTranslations("steps");
  return (
    <section className="col-span-2 sm:col-span-1 home-card grid gap-4 section-area">
      <h3 className="home-card-title text-center">{homeI18n?.stepsTitle}</h3>
      <FaPersonWalking className="mx-auto h-[24px] w-[24px] lg:h-[42px] lg:w-[42px]" />
      <div className="step-info">
        <div className="done grid">
          <strong>{staticData?.done}</strong>
          <span className="text-center">{t("done")}</span>
        </div>
        <div className="target grid items-center">
          <strong>
            <span>/</span> {staticData?.target}
          </strong>
          <span className="text-center">{t("target")}</span>
        </div>
      </div>
    </section>
  );
};

export default Steps;
