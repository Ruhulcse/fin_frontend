const PdfView = ({ pdf }: { pdf: string }) => {
	return (
		<>
			<object
				data={pdf ?? '/pdf/sample.pdf'}
				type="application/pdf"
				width="100%"
				height="100%"
				className="rounded-lg h-dvh"
			/>
		</>
	);
};

export default PdfView;
