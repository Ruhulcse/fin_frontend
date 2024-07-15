import { ChangeEvent, useEffect, useRef } from 'react';
import { GoSearch } from 'react-icons/go';

const SearchInput = ({
	changeHandler,
	name = 'search',
	defaultValue = '',
}: {
	changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	name?: string;
	defaultValue?: string;
}) => {
	const inputRef: any = useRef();

	useEffect(() => {
		if (inputRef?.current) {
			inputRef.current.value = defaultValue;
		}
	}, [defaultValue]);
	return (
		<div className="search-item relative w-full bg-card text-textPrimary p-2 xl:p-4 rounded">
			<input
				className="w-full bg-[#00000000] outline-none"
				type="text"
				name={name}
				onChange={changeHandler}
				defaultValue={defaultValue}
				ref={inputRef}
			/>
			<GoSearch
				size={18}
				className="absolute top-1/2 -translate-y-1/2 right-4"
			/>
		</div>
	);
};

export default SearchInput;
