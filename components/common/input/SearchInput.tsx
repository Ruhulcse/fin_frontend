import { cn } from '@/lib/utils';
import { ChangeEvent, useEffect, useRef } from 'react';
import { GoSearch } from 'react-icons/go';

const SearchInput = ({
	changeHandler,
	name = 'search',
	defaultValue = '',
	placeholder = '',
	searchIconOff = false,
}: {
	changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	name?: string;
	defaultValue?: string;
	placeholder?: string;
	searchIconOff?: boolean;
}) => {
	const inputRef: any = useRef();

	useEffect(() => {
		if (inputRef?.current) {
			inputRef.current.value = defaultValue;
		}
	}, [defaultValue]);
	return (
		<div
			className={cn(
				'search-item relative w-full bg-card text-textPrimary p-2 xl:p-4',
				searchIconOff ? 'rounded-full' : 'rounded'
			)}
		>
			<input
				className="w-full bg-[#00000000] outline-none"
				type="text"
				name={name}
				onChange={changeHandler}
				defaultValue={defaultValue}
				ref={inputRef}
				placeholder={placeholder}
			/>
			{!searchIconOff && (
				<GoSearch
					size={18}
					className="absolute top-1/2 -translate-y-1/2 right-4"
				/>
			)}
		</div>
	);
};

export default SearchInput;
