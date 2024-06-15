const AuthHeader = ({
	title = '',
	subTitle = '',
}: {
	title: string;
	subTitle: string;
}) => {
	return (
		<div className="auth-header text-right">
			<h4 className="text-[18px] font-bold text-white">{title}</h4>
			<h6 className="text-[12px] text-[#F1D7B5]">{subTitle}</h6>
		</div>
	);
};

export default AuthHeader;
