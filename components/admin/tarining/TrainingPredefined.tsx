import { AutoComplete } from '@/components/common/AutoComplete';
import { axiosInstance } from '@/lib/helper/axios-api';
import { sortArray } from '@/lib/helper/common';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

const TrainingPredefined = ({
	userTrainings,
	setValue,
}: {
	userTrainings: any;
	setValue: any;
}) => {
	const stateChangeHandler = async ({ selectValue, inputValue }: any) => {
		try {
			if (selectValue) {
				const {
					data: { data: training },
				} = await axiosInstance(`api/trainings/${selectValue}`);
				if (training?.training_id) {
					setValue('training_name', training.training_name);
					setValue('training_description', training.training_description);
				}
			} else {
				setValue('training_name', inputValue);
			}
		} catch (error) {}
	};

	const userOptions = sortArray(userTrainings, 'training_id')?.map(
		(training: any) => ({
			value: training?.training_id,
			label: training?.training_name,
		})
	);
	const t = useTranslations('nutritionForm');
	const title = t.raw('formLabel');
	return (
		<>
			<label className={cn('text-textPrimary text-right')}>{title.name}</label>
			<AutoComplete
				options={userOptions}
				onValueChange={stateChangeHandler}
			/>
		</>
	);
};

export default TrainingPredefined;
