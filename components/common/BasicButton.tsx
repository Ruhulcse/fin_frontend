import { cn } from '@/lib/utils';

const BasicButton = ({
	extraClasses = '',
	children,
	type = 'button',
	disabled = false,
}: {
	children: React.ReactNode;
	extraClasses?: string;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
}) => {
	return (
		<button
			disabled={disabled}
			className={cn(
				'bg-[#F1D7B550] rounded-full text-[#F1D7B5] border border-[#F1D7B550] px-6 py-1.5 sm:py-2 sm:px-10 w-full sm:w-max ml-auto',
				extraClasses
			)}
			type={type}
		>
			{children}
		</button>
	);
};

export default BasicButton;
