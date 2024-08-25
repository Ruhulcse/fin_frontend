'use client';
import { getError } from '@/lib/helper/common';
import { useEditTrainingMutation } from '@/store/features/training/api';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';
const TrainingStatus = ({ training }: any) => {
	const { status, training_id, ...rest } = training;
	const t = useTranslations('common');
	const router = useRouter();
	const success = t('updateSuccess');
	const [update, { isLoading, error, isError, isSuccess }] =
		useEditTrainingMutation();

	const updateTraining = (event: any) => {
		event.preventDefault();
		update({
			data: {
				...rest,
				status: status === 'active' ? 'inactive' : 'active',
			},
			id: training_id,
		});
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success(success);
			router.refresh();
		} else if (isError) {
			toast.error(getError(isError));
		}
	}, [isSuccess, isError, router, error, success]);

	return (
		<button
			disabled={isLoading}
			onClick={updateTraining}
			className="text-bold text-xs border text-textPrimary border-textPrimary rounded p-[2px_6px]"
		>
			{status === 'active'
				? t('inactive')
				: status === 'inactive'
				? t('active')
				: null}
		</button>
	);
};

export default TrainingStatus;