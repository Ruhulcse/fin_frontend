import { getTranslations } from "next-intl/server";
import PDFLinkDownload from "../common/pdf/PDFLinkDownload";
import HealthDeclarationPDFDownload from "../users/health-declaration/HealthDeclarationPDFDownload";
import UserDetailsPDFDownload from "../users/health-declaration/UserDetailsPDFDownload";
import Agreement from "./Agreement";
import BackLinkWrapper from "../common/backlink/BackLinkWrapper";

const AgreementUserInfo = async ({ userDetails = {} }: { userDetails: any }) => {
  const t = await getTranslations("agreement");
  const admin = await getTranslations("admin");
  const { backToDashboard } = admin.raw("dashboard");

  const agreementDetails = userDetails || {};
  const { health_declaration = "", ...userDetailsInfo } = userDetails || {};
  const { signature, ...remaining } = userDetailsInfo;
  const healthDeclaration = health_declaration
    ? JSON.parse(health_declaration)
    : {};
  return (
    <BackLinkWrapper href="/" title={backToDashboard}>
      <section className="agreements">
        {Object.keys(agreementDetails).length > 0 ? (
          <PDFLinkDownload url="Assets/Terms_and_conditions.pdf">
            <Agreement
              agreement={{ ...agreementDetails, date: healthDeclaration?.date }}
              title={t("terms")}
              update={t("lastUpdate")}
            />
          </PDFLinkDownload>
        ) : null}
        {Object.keys(remaining).length > 0 ? (
          <UserDetailsPDFDownload userDetails={remaining}>
            <Agreement
              agreement={{ ...agreementDetails, date: healthDeclaration?.date }}
              title={t("userDetails")}
              update={t("lastUpdate")}
            />
          </UserDetailsPDFDownload>
        ) : null}
        {Object.keys(healthDeclaration).length > 0 ? (
          <HealthDeclarationPDFDownload
            healthDeclaration={healthDeclaration}
            signature={signature}
          >
            <Agreement
              agreement={{ ...agreementDetails, date: healthDeclaration?.date }}
              title={t("health")}
              update={t("lastUpdate")}
            />
          </HealthDeclarationPDFDownload>
        ) : null}
      </section>
    </BackLinkWrapper>
  );
};

export default AgreementUserInfo;
