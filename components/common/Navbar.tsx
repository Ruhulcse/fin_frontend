'use client';
import logo from '@/assets/images/logo.png';
import { logoutHandler } from '@/lib/helper/common';
import {
	menus,
	menusForAdmin,
	menusForNewUser,
	menusForOldUser,
} from '@/lib/menu';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosLogOut } from 'react-icons/io';
import MobileCenterMenu from './MobileCenterMenu';
import NavLink from './NavLink';
import Sidebar from './Sidebar';
const Navbar = () => {
	const session: any = useSession();
	const userRole = session?.data?.user?.role;
	const newUser = session?.data?.user?.new_user;
	const menuFilter = (filterBY: string[]) =>
		menus.filter((item) => filterBY?.includes(item.path));
	const userWiseMenu =
		userRole === 'admin'
			? menuFilter(menusForAdmin)
			: newUser
			? menuFilter(menusForNewUser)
			: menuFilter(menusForOldUser);
	return (
		<nav className="container py-[10px] xl:py-[20px] flex items-center justify-between gap-8 text-[15px] font-[400]">
			<Link href="/">
				<Image
					src={logo}
					alt="logo"
				/>
			</Link>
			<ul className="links ml-auto gap-4 hidden xl:flex items-center">
				{userWiseMenu.map((menu) => (
					<li key={menu.path}>
						<NavLink href={menu.path}>{menu.name}</NavLink>
					</li>
				))}
			</ul>
			<MobileCenterMenu />
			<button
				onClick={logoutHandler}
				className="hidden xl:flex logout rounded-[64px] bg-card text-secondary p-[6px_18px] items-center justify-center gap-2"
			>
				<span>Log Out</span> <IoIosLogOut size={20} />
			</button>
			<Sidebar userWiseMenu={userWiseMenu} />
		</nav>
	);
};

export default Navbar;
