import Modal from './Modal';

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
			<iframe
				src={`https://www.youtube.com/embed/${url ?? '5kozt0uDa4c'}`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title="Embedded youtube"
				className="rounded-lg overflow-hidden w-[320px] md:w-[720px] h-[200px] md:h-[400px]"
			/>
		</Modal>
	);
};

export default ModalVideo;
