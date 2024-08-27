"use client";
import { PDFDownloadLink } from "@react-pdf/renderer";
import HealthDeclarationPDF from "./HealthDeclarationPDF";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const HealthDeclarationPDFDownload = ({
  healthDeclaration,
  signature,
  children,
}: {
  healthDeclaration: any;
  signature: any;
  children?: React.ReactNode;
}) => {
  const t = useTranslations("agreement");
  const healthDec = t("agreementInfo");
  return (
    <PDFDownloadLink
      document={
        <HealthDeclarationPDF
          healthDeclaration={healthDeclaration}
          signature={signature}
          healthDec={healthDec}
        />
      }
      fileName={t("healthDeclarationPdf")}
      className={cn(children ? "" : "text-secondary underline w-max h-max")}
    >
      {children ?? t("agreementInfo")}
    </PDFDownloadLink>
  );
};

export default HealthDeclarationPDFDownload;
