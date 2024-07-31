/* eslint-disable jsx-a11y/alt-text */
import { dateFormat } from '@/lib/helper/common';
import {
	Document,
	Image,
	Page,
	StyleSheet,
	Text,
	View,
} from '@react-pdf/renderer';

const MeasurementReportPdf = ({ data = [] }: { data: any }) => {
	const styles = StyleSheet.create({
		page: {
			paddingTop: 10,
			paddingBottom: 30,
			paddingHorizontal: 10,
			color: '#000',
		},
		col: { width: '14%', padding: '4px', fontSize: '8px' },
		colExtend: { width: '16%', padding: '4px', fontSize: '8px' },
		headCol1: {
			backgroundColor: '#fff',
			color: '#000',
			borderBottom: '1px solid #000',
		},
		headCol2: {
			backgroundColor: '#FF9900',
			color: '#fff',
			border: '1px solid #000',
		},
		normalCol: {
			border: '1px solid #000',
		},
		table: {
			width: '100%',
		},
		row: {
			display: 'flex',
			flexDirection: 'row',
		},
		header: {
			borderTop: 'none',
		},
		bold: {
			fontWeight: 'bold',
		},
		image: {
			width: '25%',
		},
		imageArea: {
			display: 'flex',
			flexDirection: 'row',
		},
		bottomTopArea: {
			marginTop: '30px',
		},
		topBox: {
			backgroundColor: '#FF9900',
			fontSize: '12px',
			padding: '12px',
			textAlign: 'center',
		},
		footerTopMessage: {
			textAlign: 'center',
			fontSize: '10px',
			padding: '10px',
			backgroundColor: '#D8D8D8',
			width: '25%',
			border: '1px solid #FF9900',
		},
		footerMessage: {
			textAlign: 'center',
			textOverflow: 'ellipsis',
			fontSize: '8px',
			padding: '36px 6px',
			backgroundColor: '#000',
			width: '25%',
			color: '#fff',
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
				<View style={styles.table}>
					<View style={[styles.row, styles.bold, styles.header]}>
						<Text style={[styles.headCol1, styles.col]}>Arm(L)</Text>
						<Text style={[styles.headCol1, styles.col]}>Arm(R)</Text>
						<Text style={[styles.headCol1, styles.col]}>Thigh(L)</Text>
						<Text style={[styles.headCol1, styles.col]}>Thigh(R)</Text>
						<Text style={[styles.headCol1, styles.col]}>Chest</Text>
						<Text style={[styles.headCol1, styles.col]}>Waist</Text>
						<Text style={[styles.headCol1, styles.colExtend]}>Date</Text>
					</View>
					<View style={[styles.row, styles.bold, styles.header]}>
						<Text style={[styles.headCol2, styles.col]}>יד קדמית (שמאל)</Text>
						<Text style={[styles.headCol2, styles.col]}>יד קדמית (ימין)</Text>
						<Text style={[styles.headCol2, styles.col]}>ירך (שמאל)</Text>
						<Text style={[styles.headCol2, styles.col]}>ירך (ימין)</Text>
						<Text style={[styles.headCol2, styles.col]}>חזה</Text>
						<Text style={[styles.headCol2, styles.col]}>מותן</Text>
						<Text style={[styles.headCol2, styles.colExtend]}>תאריך מדידה</Text>
					</View>
					{data.map((row: any, i: number) => (
						<View
							key={i}
							style={styles.row}
							wrap={false}
						>
							<Text style={[styles.normalCol, styles.col]}>
								{row.Arml ?? ''}
							</Text>
							<Text style={[styles.normalCol, styles.col]}>
								{row.Armr ?? ''}
							</Text>
							<Text style={[styles.normalCol, styles.col]}>
								{row.Thighl ?? ''}
							</Text>
							<Text style={[styles.normalCol, styles.col]}>
								{row.Thighr ?? ''}
							</Text>
							<Text style={[styles.normalCol, styles.col]}>
								{row.Chest ?? ''}
							</Text>
							<Text style={[styles.normalCol, styles.col]}>
								{row.Waist ?? ''}
							</Text>
							<Text style={[styles.normalCol, styles.colExtend]}>
								{row.Date ? dateFormat(row.Date) : ''}
							</Text>
						</View>
					))}
				</View>
				<View style={styles.bottomTopArea}>
					<Text style={styles.topBox}>איך למדוד היקפים</Text>
					<View style={styles.imageArea}>
						<Text style={styles.footerTopMessage}>זרוע </Text>
						<Text style={styles.footerTopMessage}>ירך </Text>
						<Text style={styles.footerTopMessage}>חזה </Text>
						<Text style={styles.footerTopMessage}>מותן </Text>
					</View>
					<View style={styles.imageArea}>
						<Image
							style={styles.image}
							src={'/pictures/measurement/1.jpg'}
						/>
						<Image
							style={styles.image}
							src={'/pictures/measurement/2.jpg'}
						/>
						<Image
							style={styles.image}
							src={'/pictures/measurement/3.jpg'}
						/>
						<Image
							style={styles.image}
							src={'/pictures/measurement/4.jpg'}
						/>
					</View>
					<View
						style={styles.imageArea}
						wrap={false}
					>
						<Text style={styles.footerMessage}>
							להפעיל שריר במצב קר - לא אחרי אימון
						</Text>
						<Text style={styles.footerMessage}>
							למדוד 20 ס״מ מעל הפיקה של הברך{' '}
						</Text>
						<Text style={styles.footerMessage}>בקו פטמות </Text>
						<Text style={styles.footerMessage}>
							בחלק הרחב ביותר-בדר״כ מתחת לטבור
						</Text>
					</View>
				</View>
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

export default MeasurementReportPdf;
