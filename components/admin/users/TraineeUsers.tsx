import BackLinkWrapper from '@/components/common/backlink/BackLinkWrapper';
import BasicCard from '@/components/common/BasicCard';
import NotDataFound from '@/components/common/message/NotDataFound';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import AdminSearch from '../AdminSearch';
import TraineeUserStatus from './TraineeUserInactive';

const TraineeUsers = async () => {
	const { data: users = [] } = await generateDataFromServer(
		'users',
		nextProperties()
	);
	return (
		<BackLinkWrapper
			href="/admin"
			title="Back To Dashboard"
		>
			<section className="exercise-list-area">
				<h3 className="section-title text-right mb-4 xl:mb-8">Manage Users</h3>

				<AdminSearch users={users} />
				<br />
				<div className="grid grid-cols-1 gap-4">
					{users?.length > 0 ? (
						users?.map((user: any, index: number) => (
							<BasicCard
								key={index}
								link={`/admin/trainee-details/${user.user_id}`}
								icon={
									user?.role === 'admin' ? null : (
										<TraineeUserStatus user={user} />
									)
								}
							>
								{user.name}
							</BasicCard>
						))
					) : (
						<NotDataFound />
					)}
				</div>
			</section>
		</BackLinkWrapper>
	);
};

export default TraineeUsers;
