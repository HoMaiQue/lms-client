"use client";
import { Login } from "@/app/(home)/_component/login";
import { useDimensions } from "@/hooks/useDimensions";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useLockedBody, useToggle } from "usehooks-ts";
import { MenuToggle } from "./menu-toggle";
import { Modal } from "./modal";
import { NavItems } from "./nav-item";
import { Navigation } from "./navigation";
import { ThemeSwitcher } from "./theme-switcher";
import { SignUp } from "@/app/(home)/_component/sign-up";
import { Verification } from "@/app/(home)/_component/verification";
import { ROUTE } from "@/constants/route";
interface HeaderProps {
    activeItem: number;
}
const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(20px at 258px 38px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};
export const Header: React.FC<HeaderProps> = ({ activeItem }) => {
    const [open, onToggle, setOpen] = useToggle();

    const containerRef = useRef(null);

    const [isOpen, toggleOpen] = useCycle(false, true);
    const { height } = useDimensions(containerRef);

    const [route, setRoute] = useState<string>(ROUTE.logIn);

    useLockedBody(isOpen, "root");

    const handleClickUser = () => {
        if (isOpen) {
            toggleOpen();
        }
        setOpen(true);
    };

    return (
        <div className=" bg-gradient-to-r dark:from-blue-400  dark:via-blue-300 dark:to-blue-200 from-orange-500 via-orange-400 to-orange-300 ">
            <div className="container">
                <div className="h-[80px] flex items-center justify-between ">
                    <div className="">
                        <Link
                            className="text-[25px] font-Poppins font-500 text-white"
                            href="/"
                        >
                            ELeaning
                        </Link>
                    </div>
                    <div className="flex items-center ">
                        <NavItems activeItem={activeItem} isMobile={false} />
                        <ThemeSwitcher />
                        {/* mobile */}

                        <div className="md:hidden">
                            {isOpen && (
                                <div
                                    onClick={() => toggleOpen()}
                                    className="absolute inset-0 bg-opacity-10 bg-slate-900 z-20"
                                ></div>
                            )}
                            <motion.nav
                                initial={false}
                                animate={isOpen ? "open" : "closed"}
                                custom={height}
                                ref={containerRef}
                            >
                                <motion.div
                                    variants={sidebar}
                                    className=" absolute bottom-0 w-[300px] z-20  bg-gradient-to-r dark:from-purple dark:via-blue-100 dark:to-pink  top-0 right-0  from-orange-200 via-orange-100 to-pink-100"
                                />
                                <Navigation
                                    activeItem={activeItem}
                                    onClick={handleClickUser}
                                />
                                <MenuToggle onToggle={() => toggleOpen()} />
                            </motion.nav>
                        </div>

                        <HiOutlineUserCircle
                            size={30}
                            className="cursor-pointer hidden md:block text-white "
                            onClick={handleClickUser}
                        />
                    </div>
                </div>
            </div>

            {open && route === ROUTE.logIn && (
                <Modal
                    open={open}
                    onToggle={onToggle}
                    title="Login With ELeaning"
                    setRoute={setRoute}
                >
                    <Login setRoute={setRoute} />
                </Modal>
            )}
            {open && route === ROUTE.signUp && (
                <Modal
                    open={open}
                    onToggle={onToggle}
                    title="Join To ELeaning"
                    setRoute={setRoute}
                >
                    <SignUp setRoute={setRoute} />
                </Modal>
            )}
            {open && route === ROUTE.verification && (
                <Modal
                    open={open}
                    onToggle={onToggle}
                    title="Verify Your Account"
                    setRoute={setRoute}
                >
                    <Verification setRoute={setRoute} />
                </Modal>
            )}
        </div>
    );
};
