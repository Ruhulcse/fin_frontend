"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ProgressChart from "./ProgressChart";
import { useTranslations } from "next-intl";

const ProgressChartArea = ({ charts }: any) => {
  const [tab, setTab] = useState("week");
  const t = useTranslations("admin");
  const progressData = t.raw("progressChart");
  return (
    <div className="grid gap-2 xl:gap-4">
      <h3 className="section-title text-right">{progressData.exercise}</h3>
      <div className="button-group ml-auto w-max bg-[#33393F] p-[4px] rounded-full">
        <button
          onClick={() => setTab("week")}
          className={cn(
            `p-[6px] rounded-full`,
            tab === "week" && "p-[6px_18px] bg-[#F1D7B520] text-[#F1D7B5]"
          )}
        >
          {progressData.lastWeek}
        </button>
        <button
          className={cn(
            `p-[6px] rounded-full`,
            tab === "monthly" && "p-[6px_18px] bg-[#F1D7B520] text-[#F1D7B5]"
          )}
          onClick={() => setTab("monthly")}
        >
          {progressData.monthly}
        </button>
        <button
          className={cn(
            `p-[6px] rounded-full`,
            tab === "yearly" && "p-[6px_18px] bg-[#F1D7B520] text-[#F1D7B5]"
          )}
          onClick={() => setTab("yearly")}
        >
          {progressData.yearly}
        </button>
      </div>
      <div className="charts grid grid-cols-1 xl:grid-cols-3 gap-4">
        {charts?.map((chart: any, index: number) => (
          <ProgressChart key={index} chart={chart} tab={tab} />
        ))}
      </div>
    </div>
  );
};

export default ProgressChartArea;
