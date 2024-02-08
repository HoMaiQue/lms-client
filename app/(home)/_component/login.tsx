"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import { Schema, schema } from "@/utils/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { ROUTE } from "@/constants/route";
type FormData = Pick<Schema, "email" | "password">;
const loginSchema = schema.pick(["email", "password"]);
export const Login = ({setRoute}: {setRoute: (route: string)=>void}) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormData>({ resolver: yupResolver(loginSchema) });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });
    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <div className="mt-4 ">
                    <label
                        className="text-white   font-Poppins text-[15px]"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <Input
                        className="mt-1"
                        id="email"
                        register={register}
                        name="email"
                        type="text"
                        placeholder="Email"
                        errorMessage={errors.email?.message}
                    />
                </div>
                <div className="">
                    <label
                        className="text-white   font-Poppins text-[15px]"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <Input
                        className="mt-1"
                        id="password"
                        register={register}
                        name="password"
                        type="password"
                        placeholder="Password"
                        errorMessage={errors.password?.message}
                    />
                </div>

                <Button className="w-full  py-2 rounded-md mt-2 text-base font-bold transition active:scale-95 bg-orange-400 dark:bg-blue-300 ">
                    Login
                </Button>
                <br />
                <h5 className="text-white font-Poppins text-center mt-5 text-sm">
                    Or join with{" "}
                </h5>
                <div className="flex items-center justify-center space-x-3 my-3">
                    <FcGoogle size={35} className="cursor-pointer" />
                    <AiFillGithub size={35} className="cursor-pointer" />
                </div>
                <h5 className="text-center  font-Poppins text-sm">
                    Not have any account ?{" "}
                    <span
                        onClick={() => setRoute(ROUTE.signUp)}
                        className="cursor-pointer dark:text-orange-100 text-blue-200"
                    >
                        Sign up
                    </span>
                </h5>
            </form>
        </div>
    );
};
