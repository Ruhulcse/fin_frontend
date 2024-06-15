const TraineeDetailsInfo = ({ trainee }: { trainee: any }) => {
	return (
		<div>
			<h3 className="section-title text-right">Trainee Details</h3>
			<h3 className="section-title text-right">
				{trainee?.firstName ?? 'Mary'} {trainee?.lastName ?? 'Jognson'}
			</h3>
			<p className="text-[#F1D7B5] text-[12px] sm:text-[16px] xl:text-[20px] text-right">{`Age: ${
				trainee?.age ?? 35
			}, Height: ${trainee?.height ?? `5'11''`}, Weight: ${
				trainee?.weight ?? '110lbs'
			}`}</p>
		</div>
	);
};

export default TraineeDetailsInfo;
