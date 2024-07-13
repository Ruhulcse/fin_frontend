import BackLink from './BackLink';

const BackLinkWrapper = ({
	children,
	href,
	title,
}: {
	href: string;
	title: string;
	children: React.ReactNode;
}) => {
	return (
		<div className="grid gap-6 h-full">
			{children}
			<BackLink
				href={href}
				title={title}
			/>
		</div>
	);
};

export default BackLinkWrapper;
