'use client';
import BasicCard from '@/components/common/BasicCard';
import { axiosInstance } from '@/lib/helper/axios-api';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';
import FoodReportPdf from './FoodReportPdf';

const FoodReport = ({ trainee }: { trainee: any }) => {
	const [foodReports, setFoodReports] = useState([]);
	useEffect(() => {
		const getFoodReport = async () => {
			try {
				const { data } = await axiosInstance.get(
					`api/tracking/food-entry?user_id=${trainee?.user_id}`
				);
				console.log('data.data', data.data);
				setFoodReports(data?.data ?? []);
			} catch (error) {}
		};
		trainee?.user_id && getFoodReport();
	}, [trainee?.user_id]);

	return (
		<>
			<PDFDownloadLink
				document={<FoodReportPdf reports={foodReports} />}
				fileName={`${trainee?.name} food report.pdf`}
			>
				<div className="grid gap-2 xl:gap-4">
					<h4 className="semi-section-title text-right">Food Entries</h4>
					<BasicCard>
						<strong>User food entries</strong>
					</BasicCard>
				</div>
			</PDFDownloadLink>
		</>
	);
};

export default FoodReport;
