'use client';
import courseImg from '@/assets/images/course-gym.png';
import Image from 'next/image';
import { useState } from 'react';
import ModalVideo from '../common/ModalVideo';
import PlayButton from '../common/PlayButton';
const Course = ({ course }: { course: any }) => {
	const [open, setOpen] = useState(false);
	const closeModal = () => {
		setOpen(false);
	};
	return (
		<div className="course">
			<h4 className="semi-section-title text-right">
				{course?.title ?? 'Gym For Beginners'}
			</h4>
			<p className="course-info">
				{course?.description ??
					'Lorem Ipsumis simply dummy text of the printing and typesetting industry.'}
			</p>
			<div className="course-img">
				<div className="abs-center">
					<PlayButton onClick={() => setOpen(true)} />
				</div>
				<Image
					src={courseImg}
					alt="course"
					className="w-full rounded"
				/>
			</div>
			<ModalVideo
				closeModal={closeModal}
				open={open}
			/>
		</div>
	);
};

export default Course;
