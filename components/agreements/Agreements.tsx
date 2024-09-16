import { authOptions } from "@/lib/auth-options";
import {
  generateDataFromServer,
  nextProperties,
} from "@/lib/helper/server-fetch";
import { getServerSession } from "next-auth";
import { getTranslations } from "next-intl/server";
import PDFLinkDownload from "../common/pdf/PDFLinkDownload";
import HealthDeclarationPDFDownload from "../users/health-declaration/HealthDeclarationPDFDownload";
import UserDetailsPDFDownload from "../users/health-declaration/UserDetailsPDFDownload";
import Agreement from "./Agreement";
import BackLinkWrapper from "../common/backlink/BackLinkWrapper";

const Agreements = async () => {
  const session = await getServerSession(authOptions());
  const t = await getTranslations("agreement");
  const admin = await getTranslations("admin");
  const { backToDashboard } = admin.raw("dashboard");
  const { data: agreements = [] } = await generateDataFromServer(
    "users/agreements?user_id=" + session?.user?.id,
    nextProperties(0)
  );
  const agreementDetails = agreements[0] || {};
  const { UserDetail }: any = agreementDetails || {};
  const { health_declaration = "", ...userDetailsInfo } = UserDetail || {};
  const { signature, ...remaining } = userDetailsInfo;
  const healthDeclaration = health_declaration
    ? JSON.parse(health_declaration)
    : {};
  const userRole = session?.user?.role;
  return (
    <section className="agreements">
      {Object.keys(agreementDetails).length > 0 ? (
        <PDFLinkDownload url="Assets/Terms_and_conditions.pdf">
          <Agreement
            agreement={{
              ...agreementDetails,
              date: healthDeclaration?.date,
            }}
            title={t("terms")}
            update={t("lastUpdate")}
          />
        </PDFLinkDownload>
      ) : null}
      {Object.keys(remaining).length > 0 ? (
        <UserDetailsPDFDownload userDetails={remaining}>
          <Agreement
            agreement={{
              ...agreementDetails,
              date: healthDeclaration?.date,
            }}
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
            agreement={{
              ...agreementDetails,
              date: healthDeclaration?.date,
            }}
            title={t("health")}
            update={t("lastUpdate")}
          />
        </HealthDeclarationPDFDownload>
      ) : null}
    </section>
  );
};

export default Agreements;
