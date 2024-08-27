"use client";
import { cn } from "@/lib/utils";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useTranslations } from "next-intl";
import UserDetailsPDF from "./UserDetailsPDF";
import { useAppSelector } from "@/store/hooks";

const UserDetailsPDFDownload = ({
  userDetails,
  children,
}: {
  userDetails: any;
  children?: React.ReactNode;
}) => {
  const t = useTranslations("agreement");
  const userDetl = t("userDetails");
  const { locale } = useAppSelector((state) => state.theme);
  return (
    <PDFDownloadLink
      document={
        <UserDetailsPDF
          userDetails={userDetails}
          userDetl={userDetl}
          locale={locale}
        />
      }
      fileName={t("userDetailsPdf")}
      className={cn(children ? "" : "text-secondary underline w-max h-max")}
    >
      {children ?? t("userDetails")}
    </PDFDownloadLink>
  );
};

export default UserDetailsPDFDownload;
