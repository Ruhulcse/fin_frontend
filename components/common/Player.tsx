'use client';
import ReactPlayer from 'react-player';

const Player = ({ src = '' }: { src: string }) => {
	return (
		<div className="rounded-lg overflow-hidden">
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
