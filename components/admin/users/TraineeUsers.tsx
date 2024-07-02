'use client';

import BasicCard from '@/components/common/BasicCard';
import NotDataFound from '@/components/common/message/NotDataFound';
import SkeletonGroup from '@/components/common/skeleton/SkeletonGroup';
import { useGetUsersQuery } from '@/store/features/user/api';

const TraineeUsers = () => {
	const { data = {}, isLoading } = useGetUsersQuery(
		{},
		{
			refetchOnMountOrArgChange: true,
		}
	);
	const { data: users = [] } = data || {};
	return (
		<section className="exercise-list-area">
			<h3 className="section-title text-right mb-4 xl:mb-8">Manage Users</h3>
			<br />
			<div className="grid grid-cols-1 gap-4">
				{isLoading ? (
					<SkeletonGroup count={5} />
				) : users?.length > 0 ? (
					users?.map((user: any, index: number) => (
						<BasicCard
							key={index}
							link={`/admin/trainee-details/${user.user_id}`}
						>
							{user.name}
						</BasicCard>
					))
				) : (
					<NotDataFound />
				)}
			</div>
		</section>
	);
};

export default TraineeUsers;
