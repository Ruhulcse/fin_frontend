'use client';
import useOutsideClick from '@/hooks/useOutsideClick';
import { logoutHandler } from '@/lib/helper/common';
import { menus } from '@/lib/menu';
import { useRef } from 'react';
import { IoIosLogOut, IoMdCloseCircleOutline } from 'react-icons/io';
import { RiMenu5Fill } from 'react-icons/ri';
import NavLink from './NavLink';

const Sidebar = () => {
	const sidebar: any = useRef();

	const sidebarOpen = () => {
		if (sidebar?.current) {
			sidebar.current.style.right = '0';
		}
	};
	const sidebarClose = () => {
		if (sidebar?.current) {
			sidebar.current.style.right = '-240px';
		}
	};

	useOutsideClick(sidebar, sidebarClose, true);

	return (
		<aside className="xl:hidden z-20">
			<button onClick={sidebarOpen}>
				<RiMenu5Fill size={32} />
			</button>
			<div
				ref={sidebar}
				id="sidebar"
				className="p-4 border border-primary border-r bg-[#292E33] fixed right-[-240px] top-0 bottom-0 w-[240px] grid grid-rows-[auto_1fr_auto] gap-2 transition-all duration-300"
			>
				<button
					onClick={sidebarClose}
					className="ml-auto"
				>
					<IoMdCloseCircleOutline size={32} />
				</button>
				<ul className="sidebar-links flex flex-col gap-2">
					{menus.map((menu) => (
						<li key={menu.path}>
							<NavLink
								extraClasses="font-semibold"
								href={menu.path}
							>
								{menu.name}
							</NavLink>
						</li>
					))}
				</ul>
				<button
					onClick={logoutHandler}
					className="logout rounded bg-[#F1D7B51A] text-[#F1D7B5] p-[6px_18px] flex items-center justify-center gap-2"
				>
					<span>Log Out</span> <IoIosLogOut size={20} />
				</button>
			</div>
		</aside>
	);
};

export default Sidebar;
