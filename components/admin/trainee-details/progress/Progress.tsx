import progressImg from "@/assets/images/progress.png";
import {
  generateDataFromServer,
  nextProperties,
} from "@/lib/helper/server-fetch";
import Image from "next/image";
import ProgressChart from "./ProgressChartArea";
import { getTranslations } from "next-intl/server";

const staticData = {
  bodyStats: [
    { name: "waist", value: "-1.3" },
    { name: "chest", value: "-1.3" },
    { name: "hips", value: "-1.3" },
    { name: "thigh", value: "-1.3" },
  ],
  charts: [
    {
      name: "legs",
      overall: "+15",
      typwWise: "+20",
    },
    {
      name: "arms",
      overall: "+17",
      typwWise: "+8",
    },
    {
      name: "chest",
      overall: "+10",
      typwWise: "+5",
    },
  ],
};
const Progress = async ({ id }: { id: string }) => {
  const progress = await generateDataFromServer(`/${id}`, nextProperties(0));
  const t = await getTranslations("admin");
  const progressData = t.raw("progress");
  return (
    <section className="progress grid gap-4 xl:gap-8">
      <h3 className="section-title text-right">{progressData.title}</h3>
      <div className="body-stats grid grid-cols-2 gap-4">
        {progress?.bodyStats?.map((item: any, index: number) => (
          <div
            key={index}
            className="home-card grid place-content-center gap-1 xl:gap-2 py-[20px] xl:py-[40px]"
          >
            <p className="text-[#F1D7B5] text-[16px] xl:text-[20px] capitalize text-center">
              {item?.name}
            </p>
            <strong className="text-4xl">{item?.value}%</strong>
          </div>
        ))}
      </div>
      <Image src={progressImg} alt="progress" className="w-full rounded-lg" />
      <ProgressChart charts={progress.charts} />
    </section>
  );
};

export default Progress;
