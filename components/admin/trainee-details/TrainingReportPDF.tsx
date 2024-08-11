import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

const TrainingReportPDF = ({
	data = [],
	traineeDetails,
}: {
	data: any;
	traineeDetails: any;
}) => {
	const styles = StyleSheet.create({
		page: {
			paddingTop: 10,
			paddingBottom: 65,
			paddingHorizontal: 10,
			color: '#000',
		},
		table: {
			width: '100%',
			marginBottom: '20',
		},
		row: {
			display: 'flex',
			flexDirection: 'row',
		},
		header: {
			borderTop: 'none',
		},
		colSmall: { width: '10%', padding: '4px', fontSize: '8px' },
		headCol1: {
			backgroundColor: '#fff',
			color: '#000',
			borderBottom: '1px solid #000',
		},
		colMid: { width: '30%', padding: '4px', fontSize: '8px' },
		colLarge: { width: '40%', padding: '4px', fontSize: '8px' },
		bold: {
			fontWeight: 'bold',
		},
		textCenter: {
			textAlign: 'center',
		},
		bg1: {
			backgroundColor: '#fff',
		},
		bg2: {
			backgroundColor: '#000',
			color: '#fff',
		},
		bg3: {
			backgroundColor: '#FF9300',
			color: '#fff',
		},
		normalCol: {
			border: '1px solid #000',
			overflow: 'hidden',
		},
		pageNumber: {
			position: 'absolute',
			fontSize: 12,
			bottom: 30,
			left: 0,
			right: 0,
			textAlign: 'center',
			color: 'grey',
		},
	});
	return (
		<Document>
			<Page style={styles.page}>
				{data.map(({ name, data }: any, index: number) => (
					<View
						key={index}
						style={styles.table}
					>
						<View style={[styles.row, styles.bold, styles.header]}>
							<Text style={[styles.bg1, styles.colSmall]}>
								{traineeDetails.weight}
							</Text>
							<Text style={[styles.bg1, styles.colSmall]}>
								{traineeDetails.set}
							</Text>
							<Text style={[styles.bg1, styles.colSmall]}>
								{traineeDetails.reps}
							</Text>
							<Text style={[styles.bg1, styles.colLarge]}>
								{traineeDetails.exercise}
							</Text>
							<Text style={[styles.bg1, styles.colSmall]}>{name}</Text>
						</View>
						<View style={[styles.row, styles.bold, styles.header]}>
							<Text style={[styles.bg2, styles.textCenter, styles.colMid]}>
								מעקב מתוכנן
							</Text>
							<Text style={[styles.bg3, styles.colLarge]}></Text>
							<Text style={[styles.bg2, styles.textCenter, styles.colMid]}>
								{name}
							</Text>
						</View>
						<View style={[styles.row, styles.bold, styles.header]}>
							<Text style={[styles.bg2, styles.textCenter, styles.colSmall]}>
								זמני מנוחה
							</Text>
							<Text style={[styles.bg2, styles.textCenter, styles.colSmall]}>
								סטים
							</Text>
							<Text style={[styles.bg2, styles.textCenter, styles.colSmall]}>
								חזרות
							</Text>
							<Text style={[styles.bg2, styles.textCenter, styles.colLarge]}>
								תרגיל
							</Text>
							<Text style={[styles.bg2, styles.textCenter, styles.colMid]}>
								מניפולציה
							</Text>
						</View>
						{data?.map((item: any, index: number) => (
							<View
								key={index}
								style={[styles.row]}
							>
								<Text style={[styles.normalCol, styles.colSmall]}>
									{item['Goal Weight']}
								</Text>
								<Text style={[styles.normalCol, styles.colSmall]}>
									{item['Sets Target']}
								</Text>
								<Text style={[styles.normalCol, styles.colSmall]}>
									{item['Reps Target']}
								</Text>
								<Text style={[styles.normalCol, styles.colLarge]}>
									{item['Exercise']}
								</Text>
								<Text style={[styles.normalCol, styles.colMid]}>
									{item['Video Url']}
								</Text>
							</View>
						))}
					</View>
				))}
				<Text
					style={styles.pageNumber}
					render={({ pageNumber, totalPages }) =>
						`${pageNumber} / ${totalPages}`
					}
					fixed
				/>
			</Page>
		</Document>
	);
};

export default TrainingReportPDF;
