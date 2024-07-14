'use client';

import ModalVideo from '@/components/common/ModalVideo';
import { useState } from 'react';

const MeasurementWomenVideo = () => {
	const [open, setOpen] = useState(false);
	const closeModal = () => {
		setOpen(false);
	};
	return (
		<>
			<div className="flex justify-end">
				<span
					onClick={() => setOpen(true)}
					className="underline text-secondary cursor-pointer"
				>
					Measurement Video
				</span>
			</div>
			<ModalVideo
				closeModal={closeModal}
				open={open}
				url={'https://www.youtube.com/embed/uUo9Bw5ytrI'}
			/>
		</>
	);
};

export default MeasurementWomenVideo;
