import { authOptions } from '@/lib/auth-options';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import { getServerSession } from 'next-auth';
import PDFLinkDownload from '../common/PDFLinkDownload';
import HealthDeclarationPDFDownload from '../users/health-declaration/HealthDeclarationPDFDownload';
import UserDetailsPDFDownload from '../users/health-declaration/UserDetailsPDFDownload';
import Agreement from './Agreement';

const Agreements = async () => {
	const session = await getServerSession(authOptions());
	const { data: agreements = [] } = await generateDataFromServer(
		'users/agreements?user_id=' + session?.user?.id,
		nextProperties(0)
	);
	const agreementDetails = agreements[0] || {};
	const { UserDetail: { health_declaration = '', ...userDetailsInfo } = {} } =
		agreementDetails;
	const { signature, ...remaining } = userDetailsInfo;
	const healthDeclaration = health_declaration
		? JSON.parse(health_declaration)
		: {};

	return (
		<section className="agreements">
			<PDFLinkDownload url="Assets/Terms_and_conditions.pdf">
				<Agreement
					agreement={agreementDetails}
					title="Terms & Conditions"
				/>
			</PDFLinkDownload>
			{remaining ? (
				<UserDetailsPDFDownload userDetails={remaining}>
					<Agreement
						agreement={agreementDetails}
						title="User Details"
					/>
				</UserDetailsPDFDownload>
			) : null}
			{healthDeclaration ? (
				<HealthDeclarationPDFDownload
					healthDeclaration={healthDeclaration}
					signature={signature}
				>
					<Agreement
						agreement={agreementDetails}
						title="Health Declaration"
					/>
				</HealthDeclarationPDFDownload>
			) : null}
		</section>
	);
};

export default Agreements;
