const TraineeDetailsInfo = ({ trainee }: { trainee: any }) => {
	console.log('trainee', trainee);
	return (
		<div>
			<h3 className="section-title text-right">Trainee Details</h3>
			<h3 className="section-title text-right">
				{trainee?.first_name ?? ''} {trainee?.last_name ?? ''}
			</h3>
			<p className="text-textSecondary text-[12px] sm:text-[16px] xl:text-[20px] text-right">{`Age: ${
				trainee?.UserDetail?.age ?? 'N/A'
			}, Height: ${trainee?.UserDetail?.height ?? `N/A`}, Weight: ${
				trainee?.UserDetail?.weight ?? 'N/A'
			}`}</p>
		</div>
	);
};

export default TraineeDetailsInfo;
