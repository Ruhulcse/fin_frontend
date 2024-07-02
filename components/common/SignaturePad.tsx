import { useRef } from 'react';
import SignaturePad from 'react-signature-canvas';
import BasicButton from './BasicButton';
const SignaturePadWrapper = ({ setImageURL }: { setImageURL: any }) => {
	const sigCanvas = useRef<any>();
	const clear = () => {
		if (sigCanvas?.current) {
			sigCanvas.current.clear();
		}
	};
	const save = () => {
		if (sigCanvas?.current) {
			setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));
		}
	};
	return (
		<div className="bg-primary min-w-[300px] w-[50vw] rounded p-3 grid place-content-center gap-4">
			<h3 className="semi-section-title text-center">Add Signature</h3>
			<SignaturePad
				ref={sigCanvas}
				canvasProps={{
					className: 'signatureCanvas',
				}}
				backgroundColor="#FAEAEB"
			/>
			<div className="flex items-center justify-center gap-4">
				<BasicButton
					extraClasses="!w-full"
					onClick={clear}
					hard
				>
					Clear
				</BasicButton>
				<BasicButton
					extraClasses="!w-full"
					onClick={save}
				>
					Save
				</BasicButton>
			</div>
		</div>
	);
};

export default SignaturePadWrapper;
