import TrainingAdd from "@/components/admin/tarining/TrainingAdd";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";

const page = ({ searchParams }: { searchParams: any }) => {
  return (
    <BackLinkWrapper
      href={`/admin/training/manage?trainee_id=${searchParams?.trainee_id}`}
      title="חזרה לניהול הדרכה"
      // title="Back To Training Manage"
    >
      <TrainingAdd traineeId={searchParams?.trainee_id} />;
    </BackLinkWrapper>
  );
};

export default page;
