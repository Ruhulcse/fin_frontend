import pdfImage from '@/assets/images/pdf.png';
import Image from 'next/image';
import Link from 'next/link';

const Agreement = ({ agreement }: { agreement: any }) => {
	return (
		<Link
			href={`/agreements/${agreement?.user_id}`}
			className="agreement"
		>
			<h4>{agreement.title ?? 'Terms and Conditions'}</h4>
			<div className="agreement-pdf">
				<Image
					src={agreement?.img ?? pdfImage}
					alt="pdf"
				/>
				<strong>{agreement?.name ?? 'N/A'}</strong>
				<span>Last Update on 08/06/2024</span>
			</div>
		</Link>
	);
};

export default Agreement;
