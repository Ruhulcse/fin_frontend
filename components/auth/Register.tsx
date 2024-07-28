import { useTranslations } from 'next-intl';
import AuthHeader from './AuthHeader';
import AuthRedirect from './AuthRedirect';

const Register = () => {
	const t = useTranslations('auth');
	const regData = t.raw('registration');
	return (
		<>
			<AuthHeader title={regData?.title} />
			{/* <RegisterForm /> */}
			<AuthRedirect
				type="registration"
				data={regData}
			/>
		</>
	);
};

export default Register;
