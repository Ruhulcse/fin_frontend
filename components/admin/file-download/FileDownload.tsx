import pdfImage from "@/assets/images/pdf.png";
import BasicButton from "@/components/common/BasicButton";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const FileDownload = ({ file }: { file: any }) => {
  const t = useTranslations("fileDownload");
  return (
    <section className="nutrition-plan grid grid-cols-3 xl:grid-cols-2 gap-4 bg-[#33393F] rounded-lg p-4 xl:p-6">
      <Image className="col-span-1" src={pdfImage} alt="pdf" />
      <div className="grid grid-rows-[auto_auto_1fr] col-span-2 xl:col-span-1 gap-1 xl:gap-2">
        <h3 className="semi-section-title text-right">
          {file?.name ?? t("agreement")}
        </h3>
        <p className="nutrition-guide-info text-right text-[#F1D7B5] text-[12px] sm:text-[16px] xl:text-[20px]">
          {file?.description ?? t("guide")}
        </p>
        <Link href="/admin/file-download/232" className="ml-auto block mt-auto">
          <BasicButton extraClasses="border-[#333333] bg-[#333333]">
            {t("click")}
          </BasicButton>
        </Link>
      </div>
    </section>
  );
};

export default FileDownload;
