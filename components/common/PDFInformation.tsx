'use client';

import { useGetUserAssetsMutation } from '@/store/features/user/api';
import { useEffect } from 'react';
import PdfView from './PdfView';
import Skeleton from './skeleton/Skeleton';

const PDFInformation = ({ url = '' }: { url?: string }) => {
	const [asset, { isLoading, data: { data: pdf = '' } = {} }]: any =
		useGetUserAssetsMutation();
	useEffect(() => {
		url &&
			asset({
				path: url,
			});
	}, [asset, url]);
	return isLoading ? (
		<div className="flex justify-end underline text-textPrimary">
			<Skeleton />
		</div>
	) : (
		<PdfView pdf={pdf} />
	);
};

export default PDFInformation;
