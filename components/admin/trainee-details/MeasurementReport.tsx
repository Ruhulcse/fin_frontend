'use client';
import BasicCard from '@/components/common/BasicCard';
import { axiosInstance } from '@/lib/helper/axios-api';
import { xlsxDownload } from '@/lib/helper/common';

const MeasurementReport = ({ trainee }: { trainee: any }) => {
	const getReport = async () => {
		try {
			const { data } = await axiosInstance.post(
				`api/tracking/measurement-report?user_id=${trainee?.user_id}`
			);
			await xlsxDownload(data.data, 'measurement.xlsx');
		} catch (error) {}
	};

	return (
		<div
			onClick={getReport}
			className="grid gap-2 xl:gap-4"
		>
			<h4 className="semi-section-title text-right">Reports</h4>
			<BasicCard>
				<strong>Measurements & Exercise</strong>
				<small className="text-textSecondary">Progress</small>
			</BasicCard>
		</div>
	);
};

export default MeasurementReport;
