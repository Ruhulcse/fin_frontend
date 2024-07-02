import Image from 'next/image';
import Link from 'next/link';

const AgreementUserInfo = ({ userDetails = {} }: { userDetails: any }) => {
	const { UserDetail: { health_declaration = '', ...rest } = {} } = userDetails;
	const healthDeclaration = health_declaration
		? JSON.parse(health_declaration)
		: {};

	return (
		<div>
			<div className="user-details grid gap-2">
				<h3 className="semi-section-title text-right">Health Declaration</h3>
				{healthDeclaration &&
					Object.entries(healthDeclaration).map(([key, value]: any) => (
						<div
							className="flex items-center  justify-end gap-1"
							key={key}
						>
							<span className="text-textPrimary text-[12px] sm:text-[16px] xl:text-[20px] font-bold">
								{value?.length > 0 ? value : 'N/A'}
							</span>
							<span className="text-textPrimary">:</span>
							<span className="text-textSecondary text-[12px] sm:text-[16px] xl:text-[20px] text-right font-semibold">
								{key?.split('_').join(' ').toUpperCase()}
							</span>
						</div>
					))}
			</div>
			<br />
			<Link
				className="text-secondary flex justify-end underline"
				href={`/pdf?url=Assets/Terms_and_conditions.pdf`}
				target="_blank"
			>
				Terms and Conditions
			</Link>
			<div className="flex flex-col items-end justify-end mt-4">
				<h4 className="text-textPrimary">Signature</h4>
				<Image
					src={rest?.signature}
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
