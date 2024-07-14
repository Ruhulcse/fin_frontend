'use client';
import { cn } from '@/lib/utils';
import ReactPlayer from 'react-player';

const Player = ({
	src = '',
	extraClasses = '',
	autoplay = true,
}: {
	src: string;
	extraClasses?: string;
	autoplay?: boolean;
}) => {
	return (
		<div className={cn('rounded-lg overflow-hidden', extraClasses)}>
			<ReactPlayer
				url={src}
				width={'100%'}
				height={'100%'}
				controls
				playing={autoplay}
			/>
		</div>
	);
};

export default Player;
