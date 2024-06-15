import ImageUpload from '@/assets/images/image-upload.png';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const FileInput = ({ register, name }: { register: any; name: string }) => {
	return (
		<label htmlFor={name}>
			<input
				className={cn(
					`w-full bg-[#33393F] text-[#ececec] rounded px-3 py-2 outline-none text-end hidden`
				)}
				id={name}
				name={name}
				{...register(name)}
				type={'file'}
			/>
			<div className="attachment grid gap-2 xl:gap-4 place-items-center cursor-pointer rounded-[10px] w-full bg-[#33393F] p-[40px_10px]">
				<Image
					src={ImageUpload}
					alt="image-upload"
				/>
				<p className="text-center text-[#F1D7B5] text-[12px] sm:text-[16px] xl:text-[20px]">{`Click here to upload your ${name}`}</p>
			</div>
		</label>
	);
};

export default FileInput;
