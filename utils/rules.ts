import * as yup from "yup";
const handleConfirmPasswordYup = (refString: string) => {
    return yup
        .string()
        .required("Confirm password is required")
        .min(6, "Confirm password must be at least 6-100 characters")
        .max(160, "Confirm password must be at least 6-100 characters")
        .oneOf([yup.ref(refString)], "Confirm Password does not match");
};
export const schema = yup.object({
    email: yup
        .string()
        .required("Email is required")
        .email("Email format is not correct"),
    password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6-100 characters")
        .max(20, "Password must be at least 6-100 characters"),
    name: yup.string().required("Name is required"),
    confirm_password: handleConfirmPasswordYup("password"),
});

export type Schema = yup.InferType<typeof schema>;
