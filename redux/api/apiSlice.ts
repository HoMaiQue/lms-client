import { customAxios } from "@/utils/customAxios";
import { createApi } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: "api",
    // All of our requests will have URLs starting with '/fakeApi'
    baseQuery: customAxios,
    // The "endpoints" represent operations and requests for this server
    endpoints: (builder) => ({}),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const {} = apiSlice;
