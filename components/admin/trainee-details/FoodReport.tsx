'use client';
import BasicCard from '@/components/common/BasicCard';
import Skeleton from '@/components/common/skeleton/Skeleton';
import { axiosInstance } from '@/lib/helper/axios-api';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';
import FoodReportPdf from './FoodReportPdf';

const FoodReport = ({ trainee }: { trainee: any }) => {
	const [foodReports, setFoodReports] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const getFoodReport = async () => {
			try {
				const { data } = await axiosInstance.get(
					`api/tracking/food-entry?user_id=${trainee?.user_id}`
				);
				setFoodReports(data?.data ?? []);
			} catch (error) {
			} finally {
				setLoading(false);
			}
		};
		trainee?.user_id && getFoodReport();
	}, [trainee?.user_id]);

	return (
		<div className="grid gap-2 xl:gap-4">
			<h4 className="semi-section-title text-right">Food Entries</h4>
			{!loading ? (
				<PDFDownloadLink
					document={<FoodReportPdf reports={foodReports} />}
					fileName={`${trainee?.name} food report.pdf`}
				>
					<BasicCard>
						<strong>User food entries</strong>
					</BasicCard>
				</PDFDownloadLink>
			) : (
				<Skeleton />
			)}
		</div>
	);
};

export default FoodReport;
