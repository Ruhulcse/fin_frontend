'use client';
import { cn } from '@/lib/utils';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useTranslations } from 'next-intl';
import UserDetailsPDF from './UserDetailsPDF';

const UserDetailsPDFDownload = ({
	userDetails,
	children,
}: {
	userDetails: any;
	children?: React.ReactNode;
}) => {
	const t = useTranslations('agreement');
	const userDetl = t('userDetails');
	return (
		<PDFDownloadLink
			document={
				<UserDetailsPDF
					userDetails={userDetails}
					userDetl={userDetl}
				/>
			}
			fileName="user-details.pdf"
			className={cn(children ? '' : 'text-secondary underline w-max h-max')}
		>
			{children ?? t('userDetails')}
		</PDFDownloadLink>
	);
};

export default UserDetailsPDFDownload;
