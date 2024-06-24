'use client';
import logo from '@/assets/images/logo.png';
import { menus } from '@/lib/menu';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosLogOut } from 'react-icons/io';
import MobileCenterMenu from './MobileCenterMenu';
import NavLink from './NavLink';
import Sidebar from './Sidebar';
import { logoutHandler } from '@/lib/helper/common';
const Navbar = () => {
	return (
		<nav className="container text-white py-[10px] xl:py-[20px] flex items-center justify-between gap-8 text-[15px] font-[400]">
			<Link href="/">
				<Image
					src={logo}
					alt="logo"
				/>
			</Link>
			<ul className="links ml-auto gap-4 hidden xl:flex items-center">
				{menus.map((menu) => (
					<li key={menu.path}>
						<NavLink href={menu.path}>{menu.name}</NavLink>
					</li>
				))}
			</ul>
			<MobileCenterMenu />
			<button
				onClick={logoutHandler}
				className="hidden xl:flex logout rounded-[64px] bg-[#F1D7B51A] text-[#F1D7B5] p-[6px_18px] items-center justify-center gap-2"
			>
				<span>Log Out</span> <IoIosLogOut size={20} />
			</button>
			<Sidebar />
		</nav>
	);
};

export default Navbar;
