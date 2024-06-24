import { IoCloseCircle } from 'react-icons/io5';

const ErrorMessage = ({ message = 'Error' }: { message?: string }) => {
	return (
		<>
			<IoCloseCircle />
			{message}
		</>
	);
};

export default ErrorMessage;
