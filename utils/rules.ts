import * as yup from "yup";

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
});

export type Schema = yup.InferType<typeof schema>;
