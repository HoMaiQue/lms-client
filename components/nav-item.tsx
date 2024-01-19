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
        <div className="hidden md:flex">
            {navItemsData.map((nav, index) => (
                <Link href={nav.url} key={nav.url} passHref>
                    <span
                        className={`${
                            activeItem === index
                                ? "text-yellow-100 dark:text-yellow-200 "
                                : "text-white"
                        } text-[18px] px-6  font-Poppins  font-normal`}
                    >
                        {nav.name}
                    </span>
                </Link>
            ))}
        </div>
    );
};
