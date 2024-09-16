import {
  generateDataFromServer,
  nextProperties,
} from "@/lib/helper/server-fetch";
import AgreementUserInfo from "./AgreementUserInfo";
import { getTranslations } from "next-intl/server";
import BackLinkWrapper from "../common/backlink/BackLinkWrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

const AgreementView = async ({ id }: { id: string }) => {
  const session = await getServerSession(authOptions());
  const userRole = session?.user?.role;
  const { data: agreement = [] } = await generateDataFromServer(
    `users/agreements?user_id=${id}`,
    nextProperties(0)
  );
  const agreementDetails = agreement[0] || {};
  const t = await getTranslations("agreement");
  const admin = await getTranslations("admin");
  const backToDashboard = admin.raw("dashboard");
  return (
    <section>
      {userRole === "admin" ? (
        <BackLinkWrapper href="/" title={backToDashboard.backToDashboard}>
          <section className="nutrition-plan grid gap-2 xl:gap-4 grid-cols_[auto_auto_1fr] min-h-full">
            <h3 className="section-title text-right">
              {t("userAgreementInfo")}
            </h3>
            <h4 className="semi-section-title text-right">
              {agreementDetails?.name ?? ""}
            </h4>
            {agreementDetails ? (
              <AgreementUserInfo userDetails={agreementDetails} />
            ) : null}
          </section>
        </BackLinkWrapper>
      ) : (
        <section className="nutrition-plan grid gap-2 xl:gap-4 grid-cols_[auto_auto_1fr] min-h-full">
          <h3 className="section-title text-right">{t("userAgreementInfo")}</h3>
          <h4 className="semi-section-title text-right">
            {agreementDetails?.name ?? ""}
          </h4>
          {agreementDetails ? (
            <AgreementUserInfo userDetails={agreementDetails} />
          ) : null}
        </section>
      )}
    </section>
  );
};

export default AgreementView;
