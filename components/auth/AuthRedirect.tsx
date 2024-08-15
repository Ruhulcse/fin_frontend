import Link from 'next/link';

const AuthRedirect = ({
	data,
	type,
}: {
	type: string;
	data: {
		title: string;
		message: string;
		redirect: string;
		btnLabel: string;
	};
}) => {
	return (
		<span className="text-[12px] text-textPrimary flex items-center gap-1 justify-end">
			{data?.message}
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
				{data?.redirect}
			</Link>
		</span>
	);
};

export default AuthRedirect;
