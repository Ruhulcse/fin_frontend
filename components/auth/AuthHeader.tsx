const AuthHeader = ({ title = '' }: { title: string }) => {
	return (
		<div className="auth-header">
			<h4 className="text-[18px] font-bold section-title">
				{title}
			</h4>
		</div>
	);
};

export default AuthHeader;
