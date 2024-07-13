import Link from 'next/link';
import AuthHeader from './AuthHeader';
import AuthRedirect from './AuthRedirect';

const Register = () => {
	return (
		<>
			<AuthHeader title="Easy to Start!" />
			{/* <RegisterForm /> */}
			<AuthRedirect type="registration" />
		</>
	);
};

export default Register;
