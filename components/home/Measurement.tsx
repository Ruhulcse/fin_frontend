const Measurement = ({ measurement = {}, label }: any) => {
	return (
		<div className="measurement">
			<h4>{label?.label ?? ''}</h4>
			<div className="size">
				<h4>{measurement[label?.name] ?? 0}</h4>
				
			</div>
			<span>{label?.unit ?? ''}</span>
		</div>
	);
};

export default Measurement;
