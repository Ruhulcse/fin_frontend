'use client';

import RootError from '@/components/core/RootError';

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<RootError
			error={error}
			reset={reset}
		/>
	);
}
