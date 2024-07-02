import { generateDataFromServer } from '@/lib/helper/server-fetch';
import FileDownload from './FileDownload';

const FileDownloads = async () => {
	const { data: files = [] } = await generateDataFromServer('');

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
