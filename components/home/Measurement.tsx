const Measurement = ({ measurement }: any) => {
	return (
		<div className="measurement">
			<h4>{measurement.name}</h4>
			<div className="size">
				<h4>{measurement.value}</h4>
				<div dangerouslySetInnerHTML={{ __html: measurement.icon }} />
			</div>
			<span>{measurement.unit}</span>
		</div>
	);
};

export default Measurement;
