import { cn } from '@/lib/utils';

const Skeleton = ({ extraClass = '' }: { extraClass?: string }) => {
	return (
		<div
			className={cn(
				'rounded shadow animate-pulse bg-card h-20 xl:h-30',
				extraClass
			)}
		></div>
	);
};

export default Skeleton;
