import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
const ProgressChart = ({ chart, tab }: { chart: any; tab: string }) => {
  const [chartConfig, setChartConfig] = useState<any>({});
  const t = useTranslations("admin");
  const progressData = t.raw("progressChart");
  useEffect(() => {
    if (tab && chart?.name) {
      const categories =
        tab === "yearly"
          ? [
              progressData.jan,
              progressData.feb,
              progressData.mar,
              progressData.apr,
              progressData.may,
              progressData.jun,
              progressData.jul,
              progressData.aug,
              progressData.sep,
              progressData.oct,
              progressData.nov,
              progressData.dec,
            ]
          : tab === "monthly"
          ? ["1", "7", "15", "22", "30"]
          : [
              progressData.sat,
              progressData.sun,
              progressData.mon,
              progressData.tue,
              progressData.wed,
              progressData.thu,
              progressData.fri,
            ];
      const data =
        tab === "yearly"
          ? [10, 40, 45, 60, 30, 65, 70, 90, 100, 110, 100]
          : tab === "monthly"
          ? [80, 110, 90, 120, 80]
          : [90, 100, 120, 110, 90, 80, 70];
      categories.length > 0 &&
        data.length > 0 &&
        setChartConfig({
          type: "area",
          series: [
            {
              name: chart?.name,
              data,
            },
          ],
          options: {
            chart: {
              toolbar: {
                show: false,
              },
            },
            title: {
              show: "",
            },
            dataLabels: {
              enabled: false,
            },
            colors: ["#33393F"],
            stroke: {
              lineCap: "round",
              curve: "smooth",
            },
            markers: {
              size: 0,
            },
            xaxis: {
              labels: {
                style: {
                  colors: "#797979",
                  fontSize: "12px",
                  fontWeight: 400,
                },
              },
              categories,
            },
            yaxis: {
              show: false,
            },
            grid: {
              show: false,
            },
            fill: {
              opacity: 1,
            },
            tooltip: {
              theme: "dark",
            },
          },
        });
    }
  }, [tab, chart?.name]);
  return (
    <div className="progress-chart grid gap-2 border border-[#F1D7B520] rounded-xl p-[10px] xl:p-[16px]">
      <span className="capitalize">{chart?.name}</span>
      <strong className="text-2xl">{chart?.overall}%</strong>
      <small className="flex items-center gap-2">
        <span className="text-[#797979]">
          {tab === "week"
            ? progressData.lastWeek
            : tab === "monthly"
            ? progressData.lastMonth
            : progressData.lastYear}
        </span>
        <span className="text-[#F1D7B5]">{chart?.typwWise}%</span>
      </small>
      {chartConfig?.series && <Chart {...chartConfig} />}
    </div>
  );
};

export default ProgressChart;
