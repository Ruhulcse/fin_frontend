import Link from 'next/link';

const RootNotFound = () => {
	return (
		<main className="grid place-items-center h-screen bg-primary text-textPrimary">
			<div className="text-center">
				<h2>Not Found</h2>
				<Link href="/">Return Home</Link>
			</div>
		</main>
	);
};

export default RootNotFound;
