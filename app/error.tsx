'use client';

import RootError from '@/components/common/RootError';

const ErrorArea = ({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) => {
	return (
		<RootError
			error={error}
			reset={reset}
		/>
	);
};

export default ErrorArea;
