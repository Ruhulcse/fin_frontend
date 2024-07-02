import WorkingProgramInfoHeader from './WorkingProgramInfoHeader';

const WorkingProgramInfo = ({ workProgramDetails }: any) => {
	return (
		<section className="workout-program-info">
			<h3 className="section-title text-center">Bicep Curl</h3>
			<WorkingProgramInfoHeader img={workProgramDetails?.img} />
			<div className="workout-description">
				{workProgramDetails?.workout_description ??
					`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam cumque
				porro minima quam, qui reprehenderit veniam voluptas officiis animi sunt
				corrupti vitae iure nisi tempora placeat exercitationem quae at cum
				recusandae voluptates tempore, quasi nihil eveniet! Vero blanditiis
				nobis laborum repellat sit minima consequatur ipsam consequuntur magni
				quaerat eos, repudiandae hic autem sapiente incidunt accusantium? At
				temporibus amet ad quaerat?`}
			</div>
			<h3 className="section-title text-right">Instruction</h3>
			<div>
				<h4 className="semi-section-title text-right">Starting Position</h4>
				<div className="workout-description">
					<p>1.Sit on a bench with your feel flat on the floor.</p>
					<p>2.Hold a dumbbell in each hand, arms fully extended.</p>
				</div>
			</div>
			<div>
				<h4 className="semi-section-title text-right">The Move</h4>
				<div className="workout-description">
					<p>
						3.Slowly curt the dumbbell up to your shoulder, then slowly lower it
						back down.
					</p>
					<p>4.Do 8-12 reps.</p>
				</div>
			</div>
		</section>
	);
};

export default WorkingProgramInfo;
