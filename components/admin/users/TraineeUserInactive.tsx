'use client';
import { getError } from '@/lib/helper/common';
import { useUpdateUserStatusInfoMutation } from '@/store/features/user/api';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';
const TraineeUserStatus = ({ user }: any) => {
	const { role, status } = user;
	const t = useTranslations('admin');
	const manageUsers = t.raw('mngUsers');
	const router = useRouter();
	const [update, { isLoading, isSuccess, isError }] =
		useUpdateUserStatusInfoMutation();
	const updateUser = (event: any, type: string) => {
		event.preventDefault();
		if (type === 'role') {
			update({
				id: user.user_id,
				data: {
					role: role === 'trainer' ? manageUsers.user : manageUsers.trainer,
				},
			});
		} else if (type === 'status') {
			update({
				id: user.user_id,
				data: {
					status:
						status === 'active' ? manageUsers.inactive : manageUsers.active,
				},
			});
		}
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success(manageUsers.userUpdSuccessfully);
			router.refresh();
		} else if (isError) {
			toast.error(getError(isError));
		}
	}, [isSuccess, isError, router, manageUsers.userUpdSuccessfully]);

	return (
		<div className="flex gap-3">
			<button
				disabled={isLoading}
				onClick={(e) => updateUser(e, 'status')}
				className="text-bold text-xs border text-textPrimary border-textPrimary rounded p-[2px_6px]"
			>
				{status === 'active'
					? manageUsers.makeUserInactivate
					: status === 'inactive'
					? manageUsers.makeUserActivate
					: null}
			</button>
			<button
				disabled={isLoading}
				onClick={(e) => updateUser(e, 'role')}
				className="text-bold text-xs border text-textPrimary border-textPrimary rounded p-[2px_6px]"
			>
				Make{' '}
				{role === 'trainer'
					? manageUsers.trainee
					: role === 'user'
					? manageUsers.trainerr
					: null}
			</button>
		</div>
	);
};

export default TraineeUserStatus;
