import Modal from './Modal';
import Player from './Player';

const ModalVideo = ({
	url,
	open,
	closeModal,
}: {
	url?: string;
	open: boolean;
	closeModal: () => void;
}) => {
	return (
		<Modal
			open={open}
			closeModal={closeModal}
		>
			{url ? (
				<Player
					src={url}
					extraClasses="rounded-lg overflow-hidden w-[320px] md:w-[720px] h-[200px] md:h-[400px]"
				/>
			) : (
				<iframe
					src={`https://www.youtube.com/embed/${url ?? '5kozt0uDa4c'}`}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title="Embedded youtube"
					className="rounded-lg overflow-hidden w-[320px] md:w-[720px] h-[200px] md:h-[400px]"
				/>
			)}
		</Modal>
	);
};

export default ModalVideo;
