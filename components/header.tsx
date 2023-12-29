"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NavItems } from "./nav-item";
import { ThemeSwitcher } from "./theme-switcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
interface HeaderProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: number;
}
export const Header: React.FC<HeaderProps> = ({
    open,
    setOpen,
    activeItem,
}) => {
    const [active, setActive] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

    // useEffect(() => {
    //     const scrollEvent = () => {
    //         if (window.scrollY > 80) {
    //             setActive(true);
    //         } else {
    //             setActive(false);
    //         }
    //     };
    //     if (typeof window !== "undefined") {
    //         window.addEventListener("scroll", scrollEvent);
    //     }

    //     return () => {
    //         window.removeEventListener("scroll", scrollEvent);
    //     };
    // }, []);
    const handleClose = (e: any) => {
        if (e.target.id === "screen") {
            setOpenSidebar(false);
        }
    };
    return (
        <div className="w-full relative">
            <div
                className={
                    active
                        ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 h-[80px] w-full border-b dark:border-[#ffffff1c] shadow-xl transition duration-500 "
                        : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
                }
            >
                <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full ">
                    <div className="w-full h-[80px] flex items-center justify-between p-3">
                        <div className="">
                            <Link
                                className="text-[25px] font-Poppins font-500 text-black dark:text-white"
                                href="/"
                            >
                                ELeaning
                            </Link>
                        </div>
                        <div className="flex items-center ">
                            <NavItems
                                activeItem={activeItem}
                                isMobile={false}
                            />
                            <ThemeSwitcher />
                            {/* mobile */}
                            <div className="800px:hidden">
                                <HiOutlineMenuAlt3
                                    className="cursor-pointer dark:text-white text-black "
                                    size={25}
                                    onClick={() => setOpenSidebar(true)}
                                />
                            </div>
                            <HiOutlineUserCircle
                                size={30}
                                className="cursor-pointer hidden 800px:block dark:text-white text-black"
                                onClick={() => setOpen(true)}
                            />
                        </div>
                    </div>
                </div>

                {/* mobile sidebar */}
                {openSidebar && (
                    <div
                        id="screen"
                        className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
                        onClick={handleClose}
                    >
                        <div className="fixed w-[60%] z-[9999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
                            <NavItems activeItem={activeItem} isMobile={true} />
                            <HiOutlineUserCircle
                                size={30}
                                className="cursor-pointer dark:text-white text-black ml-5 my-2"
                                onClick={() => setOpen(true)}
                            />
                            <br />
                            <br />
                            <p className="text-base px-2 pl-5 text-black dark:text-white">
                                Copyright 2023
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
