'use client';
import { ChangeEvent } from 'react';
import SearchInput from '../common/input/SearchInput';

const AdminSearch = () => {
	const stateChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {};

	return <SearchInput changeHandler={stateChangeHandler} />;
};

export default AdminSearch;
