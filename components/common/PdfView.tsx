const PdfView = ({ pdf }: { pdf: string }) => {
	return pdf ? (
		<object
			data={pdf + '#toolbar=0'}
			type="application/pdf"
			width="100%"
			height="100%"
			className="rounded-lg h-dvh"
		/>
	) : null;
};

export default PdfView;
