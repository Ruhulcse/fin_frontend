'use client';

import { cn } from '@/lib/utils';
import { useGetUserAssetsMutation } from '@/store/features/user/api';
import { useEffect } from 'react';

const PDFLinkDownload = ({
	url = '',
	label = 'Download',
	children,
}: {
	url?: string;
	label?: string;
	children?: React.ReactNode;
}) => {
	const [asset, { data: { data: pdf = '' } = {} }]: any =
		useGetUserAssetsMutation();
	useEffect(() => {
		url &&
			asset({
				path: url,
			});
	}, [asset, url]);
	return pdf ? (
		<a
			href={pdf}
			className={cn(children ? '' : 'underline text-secondary')}
			target="_blank"
			download={`${label}.pdf`}
		>
			{children ?? label}
		</a>
	) : (
		<a
			href="#"
			className={cn(children ? '' : 'underline text-secondary')}
			target="_blank"
			download={`${label}.pdf`}
		>
			{children ?? label}
		</a>
	);
};

export default PDFLinkDownload;
