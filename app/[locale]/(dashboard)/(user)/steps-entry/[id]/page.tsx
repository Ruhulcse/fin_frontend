import StepsEntry from "@/components/users/steps-entry/StepsEntry";

const page = ({ params }: { params: { id: string } }) => {
  return <StepsEntry id={params?.id} />;
};

export default page;
