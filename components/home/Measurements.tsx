import { generateDataFromServer } from "@/lib/helper/server-fetch";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import Measurement from "./Measurement";

const Measurements = async ({
  userId,
  homeI18n,
}: {
  userId: string;
  homeI18n: { measurementTitle: string };
}) => {
  const t = await getTranslations("measurmentPreData");
  const preData = [
    {
      name: t("chest.title"),
      label: t("chest.label"),
      unit: t("chest.unit"),
    },
    {
      name: t("armr.title"),
      label: t("armr.label"),
      unit: t("armr.unit"),
    },
    {
      name: t("thighr.title"),
      label: t("thighr.label"),
      unit: t("thighr.unit"),
    },
    {
      name: t("waist.title"),
      label: t("waist.label"),
      unit: t("waist.unit"),
    },
    {
      name: t("arml.title"),
      label: t("arml.label"),
      unit: t("arml.unit"),
    },
    {
      name: t("chest.title"),
      label: t("chest.label"),
      unit: t("chest.unit"),
    },
  ];
  const { data: measurement } = await generateDataFromServer(
    `tracking/latest-measurement/${userId}`
  );
  return (
    <section className="home-card col-span-2 sm:col-span-1 measurement-area">
      <h3 className="home-card-title text-center flex items-center justify-center gap-2 mb-2">
        {homeI18n?.measurementTitle}
        <Link href={`/measurement`}>
          <FaEdit size={14} />
        </Link>
      </h3>
      <div className="measurements">
        {preData.map((label: any, index: number) => (
          <Measurement measurement={measurement} label={label} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Measurements;
