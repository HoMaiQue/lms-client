import Link from "next/link";
import React from "react";
export const navItemsData = [
    { name: "Home", url: "/" },
    { name: "Course", url: "/course" },
    { name: "About", url: "/about" },
    { name: "Policy", url: "/policy" },
    { name: "Faq", url: "/faq" },
];

interface NavItemsProps {
    activeItem: number;
    isMobile: boolean;
}

export const NavItems: React.FC<NavItemsProps> = ({ activeItem, isMobile }) => {
    return (
        <>
            <div className="hidden 800px:flex">
                {navItemsData.map((nav, index) => (
                    <Link href={nav.url} key={nav.url} passHref>
                        <span
                            className={`${
                                activeItem === index
                                    ? "dark:text-[#37a39a] text-[crimson]"
                                    : "dark:text-white text-black"
                            } text-[18px] px-6  font-Poppins  font-normal`}
                        >
                            {nav.name}
                        </span>
                    </Link>
                ))}
            </div>
            {isMobile && (
                <div className="800px:hidden mt-5">
                    <div className="w-full text-center py-6">
                        <Link href="/" passHref>
                            <span className="text-[25px] font-Poppins font-medium text-black dark:text-white ">
                                ELearning
                            </span>
                        </Link>
                    </div>
                    {navItemsData.map((nav, index) => (
                        <Link href={nav.url} key={nav.url} passHref>
                            <span
                                className={`${
                                    activeItem === index
                                        ? "dark:text-[#37a39a] text-[crimson]"
                                        : "dark:text-white text-black"
                                } block py-5  text-[18px] px-6 font-Poppins font-normal`}
                            >
                                {nav.name}
                            </span>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};
