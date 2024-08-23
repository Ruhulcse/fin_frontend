"use client";
import logo from "@/assets/images/logo.png";
import { clearCookie } from "@/lib/helper/server-func";
import { menusForAdmin, menusForNewUser, menusForOldUser } from "@/lib/menu";
import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";
import LanguageSwitcher from "../LanguageSwitcher";
import MobileCenterMenu from "./MobileCenterMenu";
import NavLink from "./NavLink";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const t = useTranslations("auth");
  const nt = useTranslations("navbar");
  const nav = nt.raw("menus");
  const loginBtn = t.raw("logout");
  const session: any = useSession();
  const userRole = session?.data?.user?.role;
  const newUser = session?.data?.user?.new_user;
  const menus = [
    {
      name: "",
      path: "/",
    },
    {
      name: nav.home,
      path: "/admin",
    },
    {
      name: nav.recipes,
      path: "/recipes",
    },
    {
      name: nav.courses,
      path: "/courses",
    },
    {
      name: nav.agreements,
      path: "/agreements",
    },
    {
      name: nav.workout,
      path: "/workout-program",
    },
    {
      name: nav.exercise,
      path: "/exercise-library",
    },
    {
      name: nav.nutrition,
      path: "/nutrition-plan",
    },
    {
      name: nav.nutritionGuide,
      path: "/nutrition-guides",
    },
  ];
  const menuFilter = (filterBY: string[]) =>
    menus.filter((item) => filterBY?.includes(item.path));
  const userWiseMenu =
    userRole === "admin"
      ? menuFilter(menusForAdmin)
      : newUser
      ? menuFilter(menusForNewUser)
      : menuFilter(menusForOldUser);

  const logoutHandler = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/login",
    });
    await clearCookie();
  };
  return (
    <nav className="container py-[10px] xl:py-[20px] flex items-center justify-between gap-8 text-[15px] font-[400]">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <ul className="links ml-auto gap-4 hidden xl:flex items-center">
        {userWiseMenu.map((menu) => (
          <li key={menu.path}>
            <NavLink href={menu.path}>{menu.name}</NavLink>
          </li>
        ))}
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
      <MobileCenterMenu />
      <button
        onClick={logoutHandler}
        className="hidden xl:flex logout rounded-[64px] bg-card text-secondary p-[6px_18px] items-center justify-center gap-2"
      >
        <span>{loginBtn.btnTitle}</span> <IoIosLogOut size={20} />
      </button>
      <Sidebar userWiseMenu={userWiseMenu} />
    </nav>
  );
};

export default Navbar;
