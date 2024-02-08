import { SuccessResponse } from "@/types/utils";
import { apiSlice } from "../api/apiSlice";
import { register, removeTokenRegister } from "./authSlice";
import { ActivationPayload, RegisterPayload } from "@/types/auth";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<SuccessResponse<string>, RegisterPayload>({
            query: (data) => ({
                url: "user/register",
                method: "POST",
                data: data,
                credentials: "include" as const,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(register(result.data.metaData));
                } catch (error) {
                    return;
                }
            },
        }),

        activation: builder.mutation<
            SuccessResponse<boolean>,
            ActivationPayload
        >({
            query: (data) => ({
                url: "user/activate-user",
                method: "POST",
                data,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled;
                    dispatch(removeTokenRegister());
                } catch (error) {}
            },
        }),
    }),
});

export const { useRegisterMutation, useActivationMutation } = authApi;
