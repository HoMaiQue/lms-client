import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
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

interface MenuItemProps {
    menuItem: {
        name: string;
        url: string;
    };
    activeItem: number;
    index: number;
}
export const MenuItem: React.FC<MenuItemProps> = ({
    menuItem,
    activeItem,
    index,
}) => {
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link href={menuItem.url}>
                <span
                    className={`${
                        activeItem === index
                            ? "text-yellow-100 dark:text-yellow-200 "
                            : "text-white"
                    } block py-2  text-base  font-Poppins font-normal`}
                >
                    {menuItem.name}
                </span>
            </Link>
        </motion.li>
    );
};
