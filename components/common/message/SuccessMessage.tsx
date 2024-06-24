import { FaCheckCircle } from 'react-icons/fa';

const SuccessMessage = ({ message = 'Success' }: { message?: string }) => {
	return (
		<>
			<FaCheckCircle />
			{message}
		</>
	);
};

export default SuccessMessage;
