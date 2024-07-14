import Player from '@/components/common/Player';

const MeasurementWomenVideo = ({ src }: { src: string }) => {
	return (
		<Player
			extraClasses="my-4 h-[30vh] md:h-[50vh]"
			src={src}
		/>
	);
};

export default MeasurementWomenVideo;
