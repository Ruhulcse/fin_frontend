const WorkingProgramSinglePrevData = ({
	label,
	value,
}: {
	label: string;
	value: string;
}) => {
	return (
		<div className="flex items-center gap-2">
			<strong>{label} :</strong>
			<span>{value}</span>
		</div>
	);
};

export default WorkingProgramSinglePrevData;
