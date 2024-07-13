'use client';
import { PDFDownloadLink } from '@react-pdf/renderer';
import HealthDeclarationPDF from './HealthDeclarationPDF';
import { cn } from '@/lib/utils';

const HealthDeclarationPDFDownload = ({
	healthDeclaration,
	signature,
	children,
}: {
	healthDeclaration: any;
	signature: any;
	children?: React.ReactNode;
}) => {
	return (
		<PDFDownloadLink
			document={
				<HealthDeclarationPDF
					healthDeclaration={healthDeclaration}
					signature={signature}
				/>
			}
			fileName="health-declaration.pdf"
			className={cn(children ? '' : 'text-secondary underline w-max h-max')}
		>
			{children ?? 'Health Declaration'}
		</PDFDownloadLink>
	);
};

export default HealthDeclarationPDFDownload;
