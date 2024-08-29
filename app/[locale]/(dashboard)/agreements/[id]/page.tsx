import AgreementView from "@/components/agreements/AgreementView";

const page = ({ params }: { params: { id: string } }) => {
  return <AgreementView id={params?.id} />;
};

export default page;
