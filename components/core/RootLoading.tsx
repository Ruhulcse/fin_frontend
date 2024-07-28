import { FaSpinner } from 'react-icons/fa6';

const RootLoading = () => {
	return (
		<main className="grid place-items-center h-screen bg-primary text-textPrimary">
			<FaSpinner
				className="animate-spin"
				size={20}
			/>
		</main>
	);
};

export default RootLoading;
