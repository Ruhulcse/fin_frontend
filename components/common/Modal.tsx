'use client';
import { cn } from '@/lib/utils';
import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseCircleSharp } from 'react-icons/io5';

const Modal = ({
	open,
	closeExtraClasses = '',
	children,
	extraIconClasses = '',
	closeModal,
}: {
	open: boolean;
	closeExtraClasses?: string;
	children: ReactNode;
	extraIconClasses?: string;
	closeModal?: () => void;
}) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	return mounted && open
		? createPortal(
				<div className="modal-container">
					<div
						onClick={closeModal}
						className="modal-backdrop"
					></div>
					<div className="modal-content">
						<button
							className={cn(
								'modal-close text-primary z-[1000]',
								closeExtraClasses
							)}
							onClick={closeModal}
						>
							<IoCloseCircleSharp
								className={cn(extraIconClasses)}
								size={32}
							/>
						</button>
						{children}
					</div>
				</div>,
				document.body
		  )
		: null;
};

export default Modal;
