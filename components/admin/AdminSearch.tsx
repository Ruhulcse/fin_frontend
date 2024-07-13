'use client';
import { useRouter } from 'next/navigation';
import { AutoComplete } from '../common/AutoComplete';

const AdminSearch = ({ users }: { users: any }) => {
	const router = useRouter();
	const stateChangeHandler = ({ selectValue }: any) => {
		router.push(`/admin/trainee-details/${selectValue}`);
	};

	const userOptions = users.map((user: any) => ({
		value: user.user_id,
		label: user.name,
	}));

	return (
		<AutoComplete
			options={userOptions}
			placeholder="Search User"
			onValueChange={stateChangeHandler}
		/>
	);
};

export default AdminSearch;
