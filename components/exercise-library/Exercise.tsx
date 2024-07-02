'use client';
import exerciseImg from '@/assets/images/exercise.png';
import { useGetExerciseQuery } from '@/store/features/exercise/api';
import Image from 'next/image';
import { useState } from 'react';
import ModalVideo from '../common/ModalVideo';
import PlayButton from '../common/PlayButton';
import Skeleton from '../common/skeleton/Skeleton';

const Exercise = ({ exerciseId }: { exerciseId: string }) => {
	const { data: { data: exercise = {} } = {}, isLoading } = useGetExerciseQuery(
		exerciseId,
		{
			skip: !exerciseId,
		}
	);
	const [open, setOpen] = useState(false);
	const closeModal = () => {
		setOpen(false);
	};
	return isLoading ? (
		<Skeleton />
	) : (
		<section className="exercise grid grid-cols-2 xl:grid-cols-3 gap-4 bg-card rounded-lg p-4 xl:p-6">
			<div className="relative col-span-1">
				<Image
					className="w-full h-full col-span-1 object-cover rounded"
					src={exerciseImg}
					alt="pdf"
				/>
				<div className="abs-center">
					<PlayButton onClick={() => setOpen(true)} />
				</div>
			</div>
			<div className="grid col-span-1 xl:col-span-2 gap-1 xl:gap-2">
				<h3 className="semi-section-title text-right">
					{exercise?.name ?? ''}
				</h3>
				<div className="">
					<p className="exercise-info text-right text-textPrimary text-[12px] sm:text-[16px] xl:text-[20px]">
						Area : {exercise?.area ?? ''}
					</p>
					<p className="exercise-info text-right text-textPrimary text-[12px] sm:text-[16px] xl:text-[20px]">
						Equipment : {exercise?.equipment ?? ''}
					</p>
				</div>
				<p className="exercise-info text-right text-textSecondary text-[12px] sm:text-[16px] xl:text-[20px]">
					{exercise?.description ?? ''}
				</p>
			</div>
			<ModalVideo
				closeModal={closeModal}
				open={open}
				url={exercise?.video_url ?? ''}
			/>
		</section>
	);
};

export default Exercise;
