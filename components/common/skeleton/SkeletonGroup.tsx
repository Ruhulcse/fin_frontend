import Skeleton from './Skeleton';

const SkeletonGroup = ({
	count,
	extraClass = '',
}: {
	count: number;
	extraClass?: string;
}) => {
	const skeletons = Array.from(Array(count).keys());
	return skeletons.map((_, index) => <Skeleton extraClass={extraClass} key={index} />);
};

export default SkeletonGroup;
