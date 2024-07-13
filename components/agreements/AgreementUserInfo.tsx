import { healthDeclarationInputs } from '@/lib/helper/inputs';
import Image from 'next/image';
import PDFLinkDownload from '../common/PDFLinkDownload';
import HealthDeclarationPDFDownload from '../users/health-declaration/HealthDeclarationPDFDownload';
import UserDetailsPDFDownload from '../users/health-declaration/UserDetailsPDFDownload';

const AgreementUserInfo = ({ userDetails = {} }: { userDetails: any }) => {
	const { UserDetail: { health_declaration = '', ...userDetailsInfo } = {} } =
		userDetails;
	const { signature, ...remaining } = userDetailsInfo;
	const healthDeclaration = health_declaration
		? JSON.parse(health_declaration)
		: {};

	return (
		<div>
			<div className="user-details grid gap-2">
				<h3 className="semi-section-title text-right">Health Declaration</h3>
				{remaining ? (
					<div className="flex justify-end">
						<UserDetailsPDFDownload userDetails={remaining} />
					</div>
				) : null}
				{healthDeclaration ? (
					<div className="flex justify-end">
						<HealthDeclarationPDFDownload
							healthDeclaration={healthDeclaration}
							signature={signature}
						/>
					</div>
				) : null}
				{healthDeclaration &&
					Object.entries(healthDeclaration).map(([key, value]: any) => (
						<div
							className="flex flex-col items-end justify-end gap-1"
							key={key}
						>
							<span className="text-textSecondary text-[12px] sm:text-[16px] xl:text-[20px] text-right font-semibold">
								{healthDeclarationInputs.find((input) => input.name === key)
									?.label ?? key?.split('_').join(' ').toUpperCase()}
							</span>
							<span className="text-textPrimary text-[12px] sm:text-[16px] xl:text-[20px] font-bold">
								{value?.length > 0 ? value : 'N/A'}
							</span>
							<span className="text-textPrimary"></span>
						</div>
					))}
			</div>
			<br />
			<div className="flex justify-end">
				<PDFLinkDownload
					url="Assets/Terms_and_conditions.pdf"
					label="Terms and Conditions"
				/>
			</div>
			<div className="flex flex-col items-end justify-end mt-4">
				<h4 className="text-textPrimary">Signature</h4>
				<Image
					src={signature}
					alt="signature"
					className="bg-card p-2 rounded"
					width={200}
					height={200}
				/>
			</div>
		</div>
	);
};

export default AgreementUserInfo;
