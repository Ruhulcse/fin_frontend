import GetIntro from '@/components/users/get-intro/GetIntro';

const Page = ({ searchParams }: { searchParams: any }) => {
	return <GetIntro gender={searchParams?.gender} />;
};

export default Page;
