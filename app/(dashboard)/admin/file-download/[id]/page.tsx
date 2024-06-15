import FileDownloadView from '@/components/admin/file-download/FileDownloadView';

const page = ({ params }: { params: { id: string } }) => {
	return <FileDownloadView id={params?.id} />;
};

export default page;
