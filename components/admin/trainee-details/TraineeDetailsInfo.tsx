import { useTranslations } from "next-intl";

const TraineeDetailsInfo = ({ trainee }: { trainee: any }) => {
  const t = useTranslations("admin");
  const traineDet = t.raw("traineeDetails");
  return (
    <div>
      <h3 className="section-title text-right">{traineDet.title}</h3>
      <h3 className="section-title text-right">
        {trainee?.first_name ?? ""} {trainee?.last_name ?? ""}
      </h3>
      <p className="text-textSecondary text-[12px] sm:text-[16px] xl:text-[20px] text-right">{`${
        traineDet.age
      }: ${trainee?.UserDetail?.age ?? "N/A"}, ${traineDet.height}: ${
        trainee?.UserDetail?.height ?? `N/A`
      }, ${traineDet.weight}: ${trainee?.UserDetail?.weight ?? "N/A"}`}</p>
    </div>
  );
};

export default TraineeDetailsInfo;
