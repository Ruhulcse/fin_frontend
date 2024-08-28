'use client';
import { useEffect, useState } from 'react';

const PdfView = ({ pdf }: { pdf: string }) => {
	const [url, setUrl] = useState<string>('');

	useEffect(() => {
		if (pdf) {
			const pdfUrl =
				pdf + `#toolbar=0${window.innerWidth < 991 ? '&zoom=28' : ''}`;
			setUrl(pdfUrl);
		}
	}, [pdf]);

	return url ? (
		<iframe
			src={url}
			className="rounded-lg h-dvh w-full"
		/>
	) : null;
};

export default PdfView;
