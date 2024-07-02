import { cn } from '@/lib/utils';

const BasicButton = ({
	extraClasses = '',
	children,
	type = 'button',
	disabled = false,
	hard = false,
	onClick,
}: {
	children: React.ReactNode;
	extraClasses?: string;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	hard?: boolean;
	onClick?: () => void;
}) => {
	return (
		<button
		onClick={onClick}
			disabled={disabled}
			className={cn(
				'rounded-full text-[#F1D7B5] border border-[#F1D7B550] px-6 py-1.5 sm:py-2 sm:px-10 w-full sm:w-max ml-auto',
				hard ? 'bg-secondary text-primary' : 'bg-card text-secondary',
				extraClasses
			)}
			type={type}
		>
			{children}
		</button>
	);
};

export default BasicButton;
