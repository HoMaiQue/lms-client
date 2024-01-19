import { motion } from "framer-motion";
import React from "react";
interface MenuToggleProps {
    onToggle: () => void;
}
const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="white"
        strokeLinecap="round"
        style={{ fill: "#ffff" }}
        {...props}
    />
);
export const MenuToggle: React.FC<MenuToggleProps> = ({ onToggle }) => {
    return (
        <div className="w-[50px] h-[50px] relative z-[999999999] flex items-center justify-center  ">
            <button
                onClick={onToggle}
                className="absolute top-1/2 -translate-y-1/2 "
            >
                <svg width="20" height="20" viewBox="0 0 23 23">
                    <Path
                        variants={{
                            closed: { d: "M 2 2.5 L 20 2.5" },
                            open: { d: "M 3 16.5 L 17 2.5" },
                        }}
                    />
                    <Path
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 },
                        }}
                        transition={{ duration: 0.1 }}
                    />
                    <Path
                        variants={{
                            closed: { d: "M 2 16.346 L 20 16.346" },
                            open: { d: "M 3 2.5 L 17 16.346" },
                        }}
                    />
                </svg>
            </button>
        </div>
    );
};
