import { useRef, useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import SignaturePad from 'react-signature-canvas';
import BasicButton from './BasicButton';
const SignaturePadWrapper = ({ setImageURL }: { setImageURL: any }) => {
	const sigCanvas = useRef<any>();
	const [isEmpty, setIsEmpty] = useState(true);

	const clear = () => {
		if (sigCanvas?.current) {
			sigCanvas.current.clear();
			setImageURL('');
			setIsEmpty(true);
		}
	};
	const save = () => {
		if (sigCanvas?.current) {
			setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));
			setIsEmpty(false);
		}
	};
	return (
		<>
			<label className="text-textPrimary text-right">Signature</label>
			<div className="bg-primary rounded-lg ml-auto relative overflow-hidden max-w-[300px] max-h-[300px]">
				<SignaturePad
					ref={sigCanvas}
					canvasProps={{
						className: 'signatureCanvas',
					}}
					backgroundColor="#FAEAEB"
					onEnd={() => save()}
				/>
				{isEmpty ? null : (
					<BasicButton
						extraClasses="!w-max !p-0 absolute top-1 right-1"
						onClick={clear}
					>
						<FaTimesCircle />
					</BasicButton>
				)}
			</div>
		</>
	);
};

export default SignaturePadWrapper;
