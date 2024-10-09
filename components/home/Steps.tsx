
import { generateDataFromServer } from "@/lib/helper/server-fetch";
import { getTranslations } from "next-intl/server";

import { FaPersonWalking } from "react-icons/fa6";
import Progress from "./Progress";



const Steps = async ({ homeI18n }: { homeI18n: { stepsTitle: string } }) => {
 
 

  const { data: steps = [] } = await generateDataFromServer(
    "tracking/steps-stats"
  );
  const dailyStep = steps?.avarage;
  const t = await getTranslations("steps");
  return (
    <section className="col-span-2 sm:col-span-1 bg-sky-100 text-black grid gap-4 section-area">
      <div className="py-10 flex flex-col justify-center items-center gap-4">
        <h1 className="text-xl font-bold text-gray-800">Date</h1>
        <p>07/10/2024</p>
      </div>
      <div className=" container">
        <Progress/>
      </div>
    </section>
  );
};

export default Steps;
