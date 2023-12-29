import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSearch } from "react-icons/bi";

export const Hero = () => {
    return (
        <div className="items-center 1000px:flex w-full">
            <div className="1000px:w-[40%] flex 1000px:h-[calc(100vh-80px)] items-center justify-center z-10 pt-[70px] 1000px:pt-[0] relative ">
                <div className="absolute  1000px:top-[unset]  1100px:h-[550px] 1100px:w-[550px] hero_animation rounded-full left-1/2 -translate-x-1/2 "></div>
                <Image
                    src={require("../../../public/hero.png")}
                    alt=""
                    className="object-contain 1100px:max-w-[70%] 1100px:w-[70%] w-[50%] 1500px:max-w-[80%] h-auto z-10"
                />
            </div>

            <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-0 text-center 1000px:text-left mt-[150px]">
                <h2 className="dark:text-white text-[#000000c7] text-[30px] w-full px-3 1000px:text-[50px] font-bold font-Josefin py-2 1000px:leading-[60px] 1500px:w-[60%]   ">
                    Improve your online learning experience better instantly
                </h2>
              
                <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-semibold text-[18px] 1500px:!w-[60%] 1100px:!w-[78%]">
                    we have 40k+ online courses and 500k+ online register
                    students. Find your desired courses from them
                </p>
                <br />

                <div className="1500px:w-[60%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative ">
                    <input
                        type="search"
                        placeholder="Search courses..."
                        className="bg-transparent border dark:border-none dark:placeholder:text-[#ffffffdd] rounded-md p-2 w-full h-full outline-none dark:bg-[#575757] text-[#0000004e] dark:text-[#ffffffe6] text-xl font-Josefin font-medium "
                    />
                    <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
                        <BiSearch className="text-white" size={30} />
                    </div>
                </div>
                <br />
                <br />
                <div className="1500px:w-[60%] 1100px:w-[78%] w-[90%] flex items-center pb-5 gap-x-2">
                    <Image
                        alt="user1"
                        src="/user-1.avif"
                        className="rounded-full h-[50px] object-cover"
                        width={50}
                        height={50}
                    />
                    <Image
                        alt="user1"
                        src="/user-2.avif"
                        className="rounded-full h-[50px] object-cover -ml-5"
                        width={50}
                        height={50}
                    />
                    <Image
                        alt="user1"
                        src="/user-3.avif"
                        className="rounded-full h-[50px] object-cover -ml-5"
                        width={50}
                        height={50}
                    />
                    <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-semibold ">
                        500K+ People already trusted us{" "}
                        <Link
                            href="/course"
                            className="dark:text-[#46e256] text-[crimson]"
                        >
                            view courses
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
