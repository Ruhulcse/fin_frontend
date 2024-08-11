"use client";
import BasicCard from "@/components/common/BasicCard";
import Skeleton from "@/components/common/skeleton/Skeleton";
import { axiosInstance } from "@/lib/helper/axios-api";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import MeasurementReportPdf from "./MeasurementReportPdf";

const MeasurementReport = ({ trainee }: { trainee: any }) => {
  const [measurements, setMeasurements] = useState([]);
  const [loading, setLoading] = useState(false);
  const t = useTranslations("traineeDetails");
  const measurement = t.raw("measurementReports");
  useEffect(() => {
    const getReport = async () => {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get(
          `api/tracking/measurement-report?user_id=${trainee?.user_id}`
        );
        setMeasurements(data.data ?? []);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    trainee?.user_id && getReport();
  }, [trainee]);

  return (
    <div className="grid gap-2 xl:gap-4">
      <h4 className="semi-section-title text-right">{measurement.reports}</h4>
      {!loading ? (
        <PDFDownloadLink
          document={<MeasurementReportPdf data={measurements} measurement={measurement} />}
          fileName={`${trainee?.name} measurement report.pdf`}
        >
          <BasicCard>
            <strong>{measurement.measurementsExe}</strong>
            <small className="text-textSecondary">{measurement.progress}</small>
          </BasicCard>
        </PDFDownloadLink>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default MeasurementReport;
