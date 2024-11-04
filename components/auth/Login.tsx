// import { useTranslations } from 'next-intl';
// import AuthHeader from './AuthHeader';
// import AuthRedirect from './AuthRedirect';

// const Login = () => {
// 	const t = useTranslations('auth');
// 	const loginData = t.raw('login');
// 	return (
// 		<>
// 			<AuthHeader title={loginData?.title} />
// 			{/* <LoginForm /> */}
// 			<AuthRedirect
// 				data={loginData}
// 				type="login"
// 			/>
// 		</>
// 	);
// };

// export default Login;
import { useTranslations } from 'next-intl';
import AuthHeader from './AuthHeader';
import AuthRedirect from './AuthRedirect';

interface LoginProps {
	type: 'normal_user' | 'recipe_user'; // Define accepted types
}

const Login = ({ type }: LoginProps) => {
	const t = useTranslations('auth');
	const loginData = t.raw('login');

	const title = type === 'normal_user' ? loginData.title : loginData.title1;

	return (
		<>
			<AuthHeader title={title} /> 
			<AuthRedirect data={loginData} type="login" />
		</>
	);
};

export default Login;

