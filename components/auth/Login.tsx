import AuthHeader from './AuthHeader';
import LoginForm from './LoginForm';

const Login = () => {
	return (
		<>
			<AuthHeader
				title="Let's Sign In"
				subTitle="Login to your account to continue!"
			/>
			<LoginForm />
		</>
	);
};

export default Login;
