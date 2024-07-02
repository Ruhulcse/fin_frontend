const Measurement = ({ measurement = {}, label }: any) => {
	return (
		<div className="measurement">
			<h4>{label?.label ?? ''}</h4>
			<div className="size">
				<h4>{measurement[label?.name] ?? 0}</h4>
				<div className="icon">
					{['waist', 'chest'].includes(label?.name) ? (
						<svg
							width="12"
							height="14"
							viewBox="0 0 12 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.40002 10.6L5.8 13M5.8 13L8.20002 10.6M5.8 13L5.8 4.59998"
								className="stroke-textPrimary"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M9.54723 8.80005C10.206 7.97829 10.6 6.93519 10.6 5.80005C10.6 3.14908 8.45097 1.00005 5.8 1.00005C3.14903 1.00005 1 3.14908 1 5.80005C1 6.93519 1.39403 7.97829 2.05277 8.80005"
								className="stroke-textPrimary"
								stroke-linecap="round"
							/>
						</svg>
					) : ['armr', 'arml'].includes(label?.name) ? (
						<svg
							width="10"
							height="4"
							viewBox="0 0 10 4"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="0.5"
								y="0.5"
								width="9"
								height="3"
								className="stroke-textPrimary"
							/>
						</svg>
					) : ['thighl', 'thighr'].includes(label?.name) ? (
						<svg
							width="12"
							height="14"
							viewBox="0 0 12 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.40002 3.40002L5.8 1.00002M5.8 1.00002L8.20002 3.40002M5.8 1.00002L5.8 9.40002"
								className="stroke-textPrimary"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M9.54723 5.19995C10.206 6.02171 10.6 7.06481 10.6 8.19995C10.6 10.8509 8.45097 12.9999 5.8 12.9999C3.14903 12.9999 1 10.8509 1 8.19995C1 7.06481 1.39403 6.02171 2.05277 5.19995"
								className="stroke-textPrimary"
								stroke-linecap="round"
							/>
						</svg>
					) : null}
				</div>
			</div>
			<span>{label?.unit ?? ''}</span>
		</div>
	);
};

export default Measurement;
