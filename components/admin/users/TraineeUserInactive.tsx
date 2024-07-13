'use client';
import { getError } from '@/lib/helper/common';
import { useUpdateUserStatusInfoMutation } from '@/store/features/user/api';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FaUserAlt, FaUserAltSlash } from 'react-icons/fa';
import { toast } from 'sonner';
const TraineeUserStatus = ({ user }: any) => {
	const { role, status } = user;
	const router = useRouter();
	const [update, { isLoading, isSuccess, isError }] =
		useUpdateUserStatusInfoMutation();
	const updateUser = (event: any, type: string) => {
		event.preventDefault();
		if (type === 'role') {
			update({
				id: user.user_id,
				data: {
					role: role === 'trainer' ? 'user' : 'trainer',
				},
			});
		} else if (type === 'status') {
			update({
				id: user.user_id,
				data: {
					status: status === 'active' ? 'inactive' : 'active',
				},
			});
		}
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('User updated successfully');
			router.refresh();
		} else if (isError) {
			toast.error(getError(isError));
		}
	}, [isSuccess, isError, router]);

	return (
		<div className="flex gap-3">
			<button
				disabled={isLoading}
				onClick={(e) => updateUser(e, 'status')}
				className="text-bold text-xs border text-textPrimary border-textPrimary rounded p-[2px_6px]"
			>
				{status === 'active'
					? 'Activated'
					: status === 'inactive'
					? 'Inactivated'
					: null}
			</button>
			<button
				disabled={isLoading}
				onClick={(e) => updateUser(e, 'role')}
				className="text-bold text-xs border text-textPrimary border-textPrimary rounded p-[2px_6px]"
			>
				Make{' '}
				{role === 'trainer' ? 'Trainee' : role === 'user' ? 'Trainer' : null}
			</button>
		</div>
	);
};

export default TraineeUserStatus;
