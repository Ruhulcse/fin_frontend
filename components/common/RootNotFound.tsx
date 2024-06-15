import Link from 'next/link';

const RootNotFound = () => {
	return (
		<div className="grid place-items-center h-screen text-white">
			<div className="text-center">
				<h2>Not Found</h2>
				<Link href="/">Return Home</Link>
			</div>
		</div>
	);
};

export default RootNotFound;
