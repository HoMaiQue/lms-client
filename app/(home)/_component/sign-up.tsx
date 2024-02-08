"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import { ROUTE } from "@/constants/route";
import { useRegisterMutation } from "@/redux/auth/authApi";
import { isEntityError } from "@/utils/helpers";
import { Schema, schema } from "@/utils/rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
type FormData = Pick<
    Schema,
    "email" | "password" | "name" | "confirm_password"
>;
const signUpSchema = schema.pick([
    "email",
    "password",
    "name",
    "confirm_password",
]);

export const SignUp = ({ setRoute }: { setRoute: (route: string) => void }) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormData>({ resolver: yupResolver(signUpSchema) });
    const [registerUser] = useRegisterMutation();

    const onSubmit = handleSubmit(async (data) => {
        const registerPayload = {
            name: data.name,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirm_password,
        };

        registerUser(registerPayload)
            .unwrap()
            .then((data) => {
                toast.success(data.message);
                setRoute(ROUTE.verification);
            })
            .catch((error) => {
                if (isEntityError(error)) {
                    const formError = error.data.errors;
                    if (formError) {
                        Object.keys(formError).forEach((key) => {
                            setError(key as keyof FormData, {
                                message: formError[key as keyof FormData].msg,
                                type: "Server",
                            });
                        });
                    }
                }
            });
    });
    return (
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
            <div className="">
                <label
                    className="text-white   font-Poppins text-[15px]"
                    htmlFor="confirm-password"
                >
                    Confirm Password
                </label>
                <Input
                    className="mt-1"
                    id="confirm-password"
                    register={register}
                    name="confirm_password"
                    type="password"
                    placeholder="Confirm password"
                    errorMessage={errors.confirm_password?.message}
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
                <FcGoogle size={35} className="cursor-pointer" />
                <AiFillGithub size={35} className="cursor-pointer" />
            </div>
            <h5 className="text-center  font-Poppins text-sm">
                Already have an account ?{" "}
                <span
                    onClick={() => setRoute(ROUTE.logIn)}
                    className="cursor-pointer dark:text-orange-100 text-blue-200"
                >
                    Sign in
                </span>
            </h5>
        </form>
    );
};
