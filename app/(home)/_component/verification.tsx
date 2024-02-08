"use client";
import Button from "@/components/button";
import { ROUTE } from "@/constants/route";
import { useActivationMutation } from "@/redux/auth/authApi";
import { tokenRegister } from "@/redux/auth/selector";
import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import toast from "react-hot-toast";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import OTPInput from "react-otp-input";

export const Verification = ({
    setRoute,
}: {
    setRoute: (route: string) => void;
}) => {
    const [otp, setOtp] = useState("");
    const [invalidError, setInvalidError] = useState<boolean>(false);

    const token = useAppSelector(tokenRegister);
    
    const [activation] = useActivationMutation();

    const handleClickVerify = () => {
        const activationPayload = {
            activationToken: token,
            activationCode: otp,
        };
        activation(activationPayload)
            .unwrap()
            .then((data) => {
                toast.success(data.message);
                setRoute(ROUTE.logIn);
            })
            .catch((error) => {
                setInvalidError(true);
            });
    };
    const handleChangeInput = (value: string) => {
        setInvalidError(false);
        setOtp(value);
    };
    return (
       
            <div className="w-full flex items-center justify-center mt-2 flex-col">
                <div className="w-[80px] h-[80px] rounded-full bg-blue-100 flex items-center justify-center">
                    <VscWorkspaceTrusted size={40} />
                </div>

                <div className="mt-2">
                    <OTPInput
                        value={otp}
                        onChange={handleChangeInput}
                        inputStyle={`h-[45px] !w-[45px] text-slate-900 bg-white rounded-md  outline-none border-[2px] ${
                            invalidError
                                ? "border-red-600 shake"
                                : "border-white"
                        }`}
                        numInputs={6}
                        renderSeparator={
                            <span className="h-[2px] w-[10px] mx-2 bg-white"></span>
                        }
                        renderInput={(props) => <input {...props} />}
                        shouldAutoFocus
                        inputType="tel"
                    />
                </div>

                <Button
                    onClick={handleClickVerify}
                    className="w-full  py-3 rounded-md mt-7 text-base font-bold transition active:scale-95 bg-orange-400 dark:bg-blue-300 "
                >
                    Verify
                </Button>

                <h5 className="text-center pt-4 font-Poppins text-sm">
                    Go back to sign in ?{" "}
                    <span
                        onClick={() => setRoute(ROUTE.logIn)}
                        className="cursor-pointer dark:text-orange-100 text-blue-200"
                    >
                        Sign in
                    </span>
                </h5>
            </div>
       
    );
};
