import { serverAuthFetch } from '@/lib/helper/fetch';
import FileDownload from './FileDownload';

export const getInfo = async () => {
	try {
		const res = await serverAuthFetch(``, {
			next: { revalidate: 0 },
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		return [{}, {}, {}, {}];
	}
};
const FileDownloads = async () => {
	const files = await getInfo();

	return (
		<section className="file-downloads grid grid-cols-1 xl:grid-cols-2 gap-4">
			{files.map((file: any, index: number) => (
				<FileDownload
					file={file}
					key={index}
				/>
			))}
		</section>
	);
};

export default FileDownloads;
