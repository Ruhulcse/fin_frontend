"use client";
import { PDFDownloadLink } from "@react-pdf/renderer";
import HealthDeclarationPDF from "./HealthDeclarationPDF";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/store/hooks";

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
  const healthDec = t("health");
  const healthSignature = t("signature");
  const { locale } = useAppSelector((state) => state.theme);
  return (
    <PDFDownloadLink
      document={
        <HealthDeclarationPDF
          healthDeclaration={healthDeclaration}
          signature={signature}
          healthDec={healthDec}
          locale={locale}
          healthSignature={healthSignature}
        />
      }
      fileName={t("healthDeclarationPdf")}
      className={cn(children ? "" : "text-secondary underline w-max h-max")}
    >
      {children ?? healthDec}
    </PDFDownloadLink>
  );
};

export default HealthDeclarationPDFDownload;
