import pdfImage from '@/assets/images/pdf.png';
import Image from 'next/image';

const Agreement = ({
	agreement,
	title = '',
}: {
	agreement: any;
	title: string;
}) => {
	return (
		<div className="agreement">
			<h4>{title}</h4>
			<div className="agreement-pdf">
				<Image
					src={agreement?.img ?? pdfImage}
					alt="pdf"
				/>

				<strong>{agreement?.name ?? 'N/A'}</strong>
				<span>Last Update on 08/06/2024</span>
			</div>
		</div>
	);
};

export default Agreement;
