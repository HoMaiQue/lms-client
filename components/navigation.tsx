import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";
import { HiOutlineUserCircle } from "react-icons/hi";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const variants1 = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};
export const navItemsData = [
    { name: "Home", url: "/" },
    { name: "Course", url: "/course" },
    { name: "About", url: "/about" },
    { name: "Policy", url: "/policy" },
    { name: "Faq", url: "/faq" },
];
interface NavigationProps {
    activeItem: number;
    onClick: () => void;
}
export const Navigation: React.FC<NavigationProps> = ({
    activeItem,
    onClick,
}) => (
    <motion.ul
        variants={variants}
        className="z-30 absolute top-[100px] right-[30px] w-[230px] flex items-center flex-col justify-center "
    >
        {navItemsData.map((menuItem, index) => (
            <MenuItem
                activeItem={activeItem}
                menuItem={menuItem}
                key={menuItem.name}
                index={index}
            />
        ))}
        <motion.div variants={variants1}>
            <HiOutlineUserCircle
                size={30}
                className="cursor-pointer text-white my-2 "
                onClick={onClick}
            />
        </motion.div>

        <motion.p
            variants={variants1}
            className="text-base px-5  text-white mt-8 text-center"
        >
            Copyright 2023
        </motion.p>
    </motion.ul>
);
