import HealthDeclaration from '@/components/health-declaration/HealthDeclaration';

const page = ({ params }: { params: { id: string } }) => {
	return <HealthDeclaration id={params?.id} />;
};

export default page;
