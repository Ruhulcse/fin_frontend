import pdfImage from "@/assets/images/pdf.png";
import Image from "next/image";
import Link from "next/link";
import BasicButton from "../common/BasicButton";
import { useTranslations } from "next-intl";
const NutritionGuide = ({ guide }: any) => {
  const t = useTranslations("nutritionForm");
  const click = t.raw("formLabel");
  return (
    <section className="nutrition-plan grid grid-cols-3 xl:grid-cols-2 gap-4 bg-card rounded-lg p-4 xl:p-6">
      <Image className="col-span-1" src={pdfImage} alt="pdf" />
      <div className="grid grid-rows-[auto_auto_1fr] col-span-2 xl:col-span-1 gap-1 xl:gap-2">
        <h3 className="semi-section-title text-right">{guide?.title ?? ""}</h3>
        <p className="nutrition-guide-info text-right text-textSecondary text-[12px] sm:text-[16px] xl:text-[20px]">
          {guide?.description ?? ``}
        </p>
        <Link
          href={`/nutrition-guides/${guide?.id}`}
          className="ml-auto block mt-auto"
        >
          <BasicButton extraClasses="border-[#D12B2820] bg-[#D12B2820]">
            {click.clickView}
          </BasicButton>
        </Link>
      </div>
    </section>
  );
};

export default NutritionGuide;
