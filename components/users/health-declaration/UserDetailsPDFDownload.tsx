"use client";
import { cn } from "@/lib/utils";
import { PDFDownloadLink } from "@react-pdf/renderer";
import UserDetailsPDF from "./UserDetailsPDF";
import { useTranslations } from "next-intl";

const UserDetailsPDFDownload = ({
  userDetails,
  children,
}: {
  userDetails: any;
  children?: React.ReactNode;
}) => {
  const t = useTranslations("agreement");
  const userDetl = t("userDetails");
  return (
    <PDFDownloadLink
      document={
        <UserDetailsPDF userDetails={userDetails} userDetl={userDetl} />
      }
      fileName="user-details.pdf"
      className={cn(children ? "" : "text-secondary underline w-max h-max")}
    >
      {children ?? userDetl}
    </PDFDownloadLink>
  );
};

export default UserDetailsPDFDownload;
