'use client';
import { useRouter } from 'next/navigation';
import { AutoComplete } from '../common/AutoComplete';
import { useTranslations } from 'next-intl';
import { sortArray } from '@/lib/helper/common';

const AdminSearch = ({ users }: { users: any }) => {
	const router = useRouter();
	const stateChangeHandler = ({ selectValue }: any) => {
		selectValue && router.push(`/admin/trainee-details/${selectValue}`);
	};

	const userOptions = sortArray(users, 'user_id').map((user: any) => ({
		value: user.user_id,
		label: user.name,
	}));
	const t = useTranslations('admin');
	const search = t.raw('mngUsers');
	return (
		<AutoComplete
			options={userOptions}
			placeholder={search.searchUser}
			onValueChange={stateChangeHandler}
		/>
	);
};

export default AdminSearch;
