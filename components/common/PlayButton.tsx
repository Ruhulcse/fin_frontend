'use client';
import styled from '@emotion/styled';
import { FaPlay } from 'react-icons/fa';

const Div = styled.div`
	background: #33393f70;
	border-radius: 100%;
	cursor: pointer;
`;

const PlayButton = ({
	size = 'sm',
	onClick,
}: {
	size?: string;
	onClick?: () => void;
}) => {
	return (
		<Div
			className={size === 'sm' ? `p-4` : `p-6 xl:p-8`}
			onClick={onClick}
		>
			<FaPlay size={size === 'sm' ? 24 : 48} />
		</Div>
	);
};

export default PlayButton;
