import {
  generateDataFromServer,
  nextProperties,
} from "@/lib/helper/server-fetch";
import AgreementUserInfo from "./AgreementUserInfo";
import { getTranslations } from "next-intl/server";

const AgreementView = async ({ id }: { id: string }) => {
  const { data: agreement = [] } = await generateDataFromServer(
    `users/agreements?user_id=${id}`,
    nextProperties(0)
  );
  const agreementDetails = agreement[0] || {};
  const t = await getTranslations("agreement");
  return (
    <section className="nutrition-plan grid gap-2 xl:gap-4 grid-cols_[auto_auto_1fr] min-h-full">
      <h3 className="section-title text-right">{t("userAgreementInfo")}</h3>
      <h4 className="semi-section-title text-right">
        {agreementDetails?.name ?? ""}
      </h4>
      {agreementDetails ? (
        <AgreementUserInfo userDetails={agreementDetails} />
      ) : null}
    </section>
  );
};

export default AgreementView;
