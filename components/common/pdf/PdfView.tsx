const PdfView = ({ pdf }: { pdf: string }) => {
	return pdf ? (
		<iframe
			src={pdf + '#toolbar=0'}
			className="rounded-lg h-dvh w-full"
		/>
	) : null;
};

export default PdfView;
