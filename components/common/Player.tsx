'use client';
import { cn } from '@/lib/utils';
import ReactPlayer from 'react-player';

const Player = ({
	src = '',
	extraClasses = '',
}: {
	src: string;
	extraClasses?: string;
}) => {
	return (
		<div className={cn('rounded-lg overflow-hidden', extraClasses)}>
			<ReactPlayer
				url={src}
				width={'100%'}
				height={'100%'}
				controls
				playing
			/>
		</div>
	);
};

export default Player;
