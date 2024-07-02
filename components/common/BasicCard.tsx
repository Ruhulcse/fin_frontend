'use client';
import styled from '@emotion/styled';
import Link from 'next/link';
import { ReactNode } from 'react';
import { TbSquareArrowLeft } from 'react-icons/tb';

const CardDiv = styled.button`
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
	link = '',
}: {
	children: React.ReactNode;
	link?: string;
	icon?: ReactNode;
}) => {
	return link ? (
		<Link href={link}>
			<CardDiv className="bg-card border border-card text-textPrimary">
				{icon ?? <TbSquareArrowLeft size={24} />}
				<div className="info">{children}</div>
			</CardDiv>
		</Link>
	) : (
		<CardDiv className="bg-card border border-card text-textPrimary">
			{icon ?? <TbSquareArrowLeft size={24} />}
			<div className="info">{children}</div>
		</CardDiv>
	);
};

export default BasicCard;
