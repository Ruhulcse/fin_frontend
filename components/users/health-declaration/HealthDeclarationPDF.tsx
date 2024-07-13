/* eslint-disable jsx-a11y/alt-text */
'use client';
import { healthDeclarationInputs } from '@/lib/helper/inputs';
import {
	Document,
	Image,
	Page,
	StyleSheet,
	Text,
	View,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35,
		color: '#000000',
	},
	title: {
		fontSize: 24,
		textAlign: 'center',
	},
	answer: {
		fontSize: 18,
		marginTop: 4,
		alignSelf: 'flex-end',
	},
	text: {
		fontSize: 14,
		textAlign: 'justify',
		alignSelf: 'flex-end',
	},
	view: {
		marginTop: 10,
	},
	imageView: {
		marginTop: 10,
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
	image: {
		width: 200,
		height: 200,
		padding: 10,
		marginTop: 10,
		backgroundColor: '#FAEAEB',
		alignSelf: 'flex-end',
	},
});

const HealthDeclarationPDF = ({
	healthDeclaration,
	signature,
}: {
	healthDeclaration: any;
	signature: any;
}) => (
	<Document>
		<Page
			size="A4"
			style={styles.page}
		>
			<Text
				style={styles.title}
				fixed
			>
				Health Declaration
			</Text>
			{healthDeclaration &&
				Object.entries(healthDeclaration).map(([key, value]: any) => (
					<View
						key={key}
						style={styles.view}
					>
						<Text style={styles.text}>
							{
								healthDeclarationInputs.find((input) => input.name === key)
									?.label
							}
						</Text>
						<Text style={styles.answer}>
							{value?.length > 0 ? value : 'N/A'}
						</Text>
					</View>
				))}
			<View style={styles.view}>
				<Text style={styles.text}>Signature</Text>
				<Image
					style={styles.image}
					src={signature}
				/>
			</View>
			<Text
				style={styles.pageNumber}
				render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
				fixed
			/>
		</Page>
	</Document>
);

export default HealthDeclarationPDF;
