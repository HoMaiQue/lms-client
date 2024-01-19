"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import { Schema, schema } from "@/utils/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
type FormData = Pick<Schema, "email" | "password" | "name">;
const signUpSchema = schema.pick(["email", "password", "name"]);
export const SignUp  = ({setRoute}: {setRoute: (route: string)=>void}) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormData>({ resolver: yupResolver(signUpSchema) });

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
                        Name
                    </label>
                    <Input
                        className="mt-1"
                        id="name"
                        register={register}
                        name="name"
                        type="text"
                        placeholder="Name"
                        errorMessage={errors.name?.message}
                    />
                </div>
                <div className="">
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
                    Sign Up
                </Button>
                <br />
                <h5 className="text-white font-Poppins text-center mt-5 text-sm">
                    Or join with{" "}
                </h5>
                <div className="flex items-center justify-center space-x-3 my-3">
                    <FcGoogle size={30} className="cursor-pointer" />
                    <AiFillGithub size={30} className="cursor-pointer" />
                </div>
                <h5 className="text-center pt-4 font-Poppins text-sm">
                    Already have an account ?{" "}
                    <span
                        onClick={() => setRoute("sign-up")}
                        className="cursor-pointer dark:text-orange-100 text-blue-200"
                    >
                        Sign in
                    </span>
                </h5>
            </form>
        </div>
    );
};
