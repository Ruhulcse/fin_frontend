'use client';
import BasicCard from '@/components/common/BasicCard';
import Skeleton from '@/components/common/skeleton/Skeleton';
import { axiosInstance } from '@/lib/helper/axios-api';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import TrainingReportPDF from './TrainingReportPDF';

const TrainingReport = ({ trainee }: { trainee: any }) => {
	const [trainingData, setTrainingData] = useState([]);
	const [loading, setLoading] = useState(false);
	console.log('trainee', trainee);
	useEffect(() => {
		const getReport = async () => {
			setLoading(true);
			try {
				const { data } = await axiosInstance.get(
					`api/tracking/training-report?user_id=${trainee?.user_id}`
				);
				console.log('data', data);
				const updatedData: any = Object.keys(data.data).map((item) => {
					return {
						name: item,
						data: data.data[item],
					};
				});
				setTrainingData(updatedData ?? []);
			} catch (error) {
				console.log('error', error);
			} finally {
				setLoading(false);
			}
		};
		trainee?.user_id && getReport();
	}, [trainee]);
	const t = useTranslations('admin');
	const traineeDetails = t.raw('traineeDetails');
	return (
		<div className="grid gap-2 xl:gap-4">
			<h4 className="semi-section-title text-right">
				{traineeDetails.fileDwn}
			</h4>
			{!loading ? (
				<PDFDownloadLink
					document={
						<TrainingReportPDF
							data={trainingData}
							traineeDetails={traineeDetails}
						/>
					}
					fileName={`${trainee?.name} measurement report.pdf`}
				>
					<BasicCard>
						<strong>{traineeDetails.trainingPrgm}</strong>
					</BasicCard>
				</PDFDownloadLink>
			) : (
				<Skeleton />
			)}
		</div>
	);
};

export default TrainingReport;
