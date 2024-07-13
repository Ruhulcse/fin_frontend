import Link from 'next/link';

const AuthRedirect = ({ type }: { type: string }) => {
	return (
		<span className="text-[12px] text-textPrimary flex items-center gap-1">
			{type === 'login'
				? `Don't have an account?`
				: type === 'registration'
				? `Already have an account?`
				: ''}
			<Link
				className="text-secondary cursor-pointer font-bold"
				href={
					type === 'login'
						? '/registration'
						: type === 'registration'
						? '/login'
						: ''
				}
			>
				Sign Up
			</Link>
		</span>
	);
};

export default AuthRedirect;
