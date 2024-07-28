import PdfView from '@/components/common/pdf/PdfView';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';

const FileDownloadView = async ({ id }: { id: string }) => {
	const file = await generateDataFromServer(id, nextProperties());
	return <PdfView pdf={file?.pdf} />;
};

export default FileDownloadView;
