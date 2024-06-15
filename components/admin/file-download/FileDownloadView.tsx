import PdfView from '@/components/common/PdfView';
import { serverAuthFetch } from '@/lib/helper/fetch';

export const getDetailsInfo = async (id: string) => {
	try {
		const res = await serverAuthFetch(`/${id}`, {
			next: { revalidate: 0 },
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		console.log('error', error);
	}
};

const FileDownloadView = async ({ id }: { id: string }) => {
	const file = await getDetailsInfo(id);
	return <PdfView pdf={file?.pdf} />;
};

export default FileDownloadView;
