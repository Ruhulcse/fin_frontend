import PDFInformation from '@/components/common/PDFInformation';

const Page = ({ searchParams }: any) => {
	return <PDFInformation url={searchParams?.url ?? ''} />;
};

export default Page;
