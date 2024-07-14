const WorkingProgramSinglePrevData = ({
	label,
	value,
}: {
	label: string;
	value: string;
}) => {
	return (
		<div className="flex items-start gap-[0_4px] flex-wrap text-xs sm:text-base">
			<strong>{label} :</strong>
			<span>{value}</span>
		</div>
	);
};

export default WorkingProgramSinglePrevData;
