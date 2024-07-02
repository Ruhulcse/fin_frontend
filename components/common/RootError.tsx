const RootError = ({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) => {
	return (
		<main className="grid place-content-center h-screen bg-primary text-textPrimary">
			<div className="text-center">
				<h2>{error?.message ?? 'Error Found'}</h2>
				<button
					className="underline"
					onClick={() => reset()}
				>
					Try again
				</button>
			</div>
		</main>
	);
};

export default RootError;
