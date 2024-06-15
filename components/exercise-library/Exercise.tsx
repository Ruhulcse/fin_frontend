'use client';
import exerciseImg from '@/assets/images/exercise.png';
import Image from 'next/image';
import { useState } from 'react';
import ModalVideo from '../common/ModalVideo';
import PlayButton from '../common/PlayButton';

const Exercise = ({ exercise }: any) => {
	const [open, setOpen] = useState(false);
	const closeModal = () => {
		setOpen(false);
	};
	return (
		<section className="exercise grid grid-cols-2 xl:grid-cols-3 gap-4 bg-[#33393F] rounded-lg p-4 xl:p-6">
			<div className="relative">
				<Image
					className="w-full h-full col-span-1 object-cover rounded"
					src={exerciseImg}
					alt="pdf"
				/>
				<div className="abs-center">
					<PlayButton onClick={() => setOpen(true)} />
				</div>
			</div>
			<div className="grid col-span-1 xl:col-span-2 place-content-between gap-1 xl:gap-2">
				<h3 className="semi-section-title text-right">
					{exercise?.name ?? 'How to do push up'}
				</h3>
				<p className="exercise-info text-right text-[#F1D7B5] text-[12px] sm:text-[16px] xl:text-[20px]">
					{exercise?.description ??
						`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.`}
				</p>
				<p className="exercise-time text-right text-[#F1D7B5] text-[12px] sm:text-[16px] xl:text-[20px]">
					{exercise?.time ?? '2m 18s'}
				</p>
			</div>
			<ModalVideo
				closeModal={closeModal}
				open={open}
			/>
		</section>
	);
};

export default Exercise;
