'use client';
import BasicCard from '@/components/common/BasicCard';
import { axiosInstance } from '@/lib/helper/axios-api';
import { xlsxDownload } from '@/lib/helper/common';

const TrainingReport = ({ trainee }: { trainee: any }) => {
	const getReport = async () => {
		try {
			const { data } = await axiosInstance.post(
				`api/tracking/training-report?user_id=${trainee?.user_id}`
			);
			await xlsxDownload(data.data, 'training.xlsx');
		} catch (error) {}
	};

	return (
		<div
			onClick={getReport}
			className="grid gap-2 xl:gap-4"
		>
			<h4 className="semi-section-title text-right">File Download</h4>
			<BasicCard>
				<strong>Training Programs</strong>
			</BasicCard>
		</div>
	);
};

export default TrainingReport;
