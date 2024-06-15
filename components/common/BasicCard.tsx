'use client';
import styled from '@emotion/styled';
import Link from 'next/link';
import { ReactNode } from 'react';
import { TbSquareArrowLeft } from 'react-icons/tb';

const CardDiv = styled.button`
	background: #f1d7b50d;
	border: 1px solid;
	border-image-source: linear-gradient(
		94.01deg,
		rgba(139, 124, 104, 0) -19.21%,
		rgba(241, 215, 181, 0.5) 359.35%
	);
	border-radius: 5px;
	padding: 16px 20px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	svg {
		flex-shrink: 0;
	}
	.info {
		display: grid;
		text-align: right;
		gap: 4px;
	}
`;
const BasicCard = ({
	children,
	icon,
	link = '#',
}: {
	children: React.ReactNode;
	link?: string;
	icon?: ReactNode;
}) => {
	return (
		<Link href={link}>
			<CardDiv>
				{icon ?? <TbSquareArrowLeft size={24} />}
				<div className="info">{children}</div>
			</CardDiv>
		</Link>
	);
};

export default BasicCard;
