import AuthHeader from './AuthHeader';
import RegisterForm from './RegisterForm';

const Register = () => {
	return (
		<>
			<AuthHeader
				title="Getting Started"
				subTitle="Create an account to continue!"
			/>
			<RegisterForm />
		</>
	);
};

export default Register;
