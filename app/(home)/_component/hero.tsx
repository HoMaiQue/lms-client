import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSearch } from "react-icons/bi";

export const Hero = () => {
    return (
        <div className="items-center lg:flex container gap-x-40 ">
            <div className="lg:w-[40%] flex lg:h-[calc(100vh-80px)] items-center justify-center z-10 pt-[70px] lg:pt-[0] relative ">
                <div className="absolute  lg:top-[unset]  lg:h-[510px] lg:w-[510px] hero_animation  rounded-full left-1/2 -translate-x-1/2 "></div>
                <Image
                    src={require("../../../public/hero.png")}
                    alt=""
                    className="object-contain lg:max-w-[70%] lg:w-[70%] w-[50%] 2xl:max-w-[80%] h-auto z-10"
                />
            </div>

            <div className="flex-1 flex items-center lg:items-start px-15  lg:text-left   flex-col  lg:mt-0  mt-[50px] ">
                <h2 className="text-white capitalize   text-[30px] w-full  lg:text-[50px] font-bold font-Josefin py-2 lg:leading-[60px] lg:text-left text-center">
                Enhance Your Online Learning Experience Immediately
                </h2>

                <p className="text-white font-Josefin font-semibold text-[18px] lg:text-left text-center ">
                    we have 40k+ online courses and 500k+ online register
                    students. Find your desired courses from them
                </p>
                <br />

                <div className=" w-[90%] sm:w-[70%] h-[50px] bg-transparent relative  ">
                    <input
                        type="search"
                        placeholder="Search courses..."
                        className="bg-transparent border-2  placeholder:text-white rounded-md p-2 w-full h-full outline-none  text-white text-xl font-Josefin font-medium "
                    />
                    <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
                        <BiSearch className="text-white" size={30} />
                    </div>
                </div>
                <br />
                <br />
                <div className=" flex items-center pb-5 gap-x-2 ">
                    <Image
                        alt="user1"
                        src="/user-1.avif"
                        className="rounded-full h-[50px] object-cover shrink-0"
                        width={50}
                        height={50}
                    />
                    <Image
                        alt="user1"
                        src="/user-2.avif"
                        className="rounded-full h-[50px] object-cover -ml-5 shrink-0"
                        width={50}
                        height={50}
                    />
                    <Image
                        alt="user1"
                        src="/user-3.avif"
                        className="rounded-full h-[50px] object-cover -ml-5 shrink-0"
                        width={50}
                        height={50}
                    />
                    <p className="font-Josefin text-white lg:pl-3 text-[18px] font-semibold ">
                        500K+ People already trusted us{" "}
                        <Link
                            href="/course"
                            className="text-yellow-200 dark:text-yellow-100"
                        >
                            view courses
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
