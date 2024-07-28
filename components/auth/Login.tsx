import { useTranslations } from 'next-intl';
import AuthHeader from './AuthHeader';
import AuthRedirect from './AuthRedirect';

const Login = () => {
	const t = useTranslations('auth');
	const loginData = t.raw('login');
	return (
		<>
			<AuthHeader title={loginData?.title} />
			{/* <LoginForm /> */}
			<AuthRedirect
				data={loginData}
				type="login"
			/>
		</>
	);
};

export default Login;
