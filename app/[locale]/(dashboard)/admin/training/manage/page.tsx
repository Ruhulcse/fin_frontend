import TrainingManage from "@/components/admin/tarining/TrainingManage";
import BackLinkWrapper from "@/components/common/backlink/BackLinkWrapper";

const Page = ({ searchParams }: { searchParams: any }) => {
  return (
    <BackLinkWrapper
      href={`/admin/trainee-details/${searchParams?.trainee_id}`}
      title="חזרה לפרטי החניך"
      // title="Back To Trainee Details"
    >
      <TrainingManage traineeId={searchParams?.trainee_id} />
    </BackLinkWrapper>
  );
};

export default Page;
