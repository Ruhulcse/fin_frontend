import Link from 'next/link';

const RootNotFound = () => {
	return (
		<main className="grid place-items-center h-screen bg-primary text-textPrimary">
			<div className="text-center">
				<h2>Page Not Found!!!</h2>
				<Link
					className="text-blue-500 underline"
					href="/"
				>
					Return Home
				</Link>
			</div>
		</main>
	);
};

export default RootNotFound;
