import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';
import BasicButton from './BasicButton';

const BackLink = ({ href, title }: { href: string; title: string }) => {
	return (
		<Link
			href={href}
			className="self-end"
		>
			<BasicButton
				extraClasses="!w-full flex items-center justify-center gap-1 text-white"
				hard
			>
				<FaArrowLeft />
				{title}
			</BasicButton>
		</Link>
	);
};

export default BackLink;
