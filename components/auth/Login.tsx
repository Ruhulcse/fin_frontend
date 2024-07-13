import AuthHeader from './AuthHeader';
import AuthRedirect from './AuthRedirect';

const Login = () => {
	return (
		<>
			<AuthHeader title="Welcome Back" />
			{/* <LoginForm /> */}
			<AuthRedirect type="login" />
		</>
	);
};

export default Login;
