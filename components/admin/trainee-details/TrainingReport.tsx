'use client';
import BasicCard from '@/components/common/BasicCard';
import Skeleton from '@/components/common/skeleton/Skeleton';
import { axiosInstance } from '@/lib/helper/axios-api';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';
import TrainingReportPDF from './TrainingReportPDF';

const TrainingReport = ({ trainee }: { trainee: any }) => {
	const [trainingData, setTrainingData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getReport = async () => {
			setLoading(true);
			try {
				const { data } = await axiosInstance.get(
					`api/tracking/training-report?user_id=${trainee?.user_id}`
				);
				const updatedData: any = Object.keys(data.data).map((item) => {
					return {
						name: item,
						data: data.data[item],
					};
				});
				setTrainingData(updatedData ?? []);
			} catch (error) {
			} finally {
				setLoading(false);
			}
		};
		trainee?.user_id && getReport();
	}, [trainee]);

	return (
		<div className="grid gap-2 xl:gap-4">
			<h4 className="semi-section-title text-right">File Download</h4>
			{!loading ? (
				<PDFDownloadLink
					document={<TrainingReportPDF data={trainingData} />}
					fileName={`${trainee?.name} measurement report.pdf`}
				>
					<BasicCard>
						<strong>Training Programs</strong>
					</BasicCard>
				</PDFDownloadLink>
			) : (
				<Skeleton />
			)}
		</div>
	);
};

export default TrainingReport;
