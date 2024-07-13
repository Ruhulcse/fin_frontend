'use client';
import { cn } from '@/lib/utils';
import { PDFDownloadLink } from '@react-pdf/renderer';
import UserDetailsPDF from './UserDetailsPDF';

const UserDetailsPDFDownload = ({
	userDetails,
	children,
}: {
	userDetails: any;
	children?: React.ReactNode;
}) => {
	return (
		<PDFDownloadLink
			document={<UserDetailsPDF userDetails={userDetails} />}
			fileName="user-details.pdf"
			className={cn(children ? '' : 'text-secondary underline w-max h-max')}
		>
			{children ?? 'User Details'}
		</PDFDownloadLink>
	);
};

export default UserDetailsPDFDownload;
