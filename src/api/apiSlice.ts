import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://bookshelf-server-zhshuvo.vercel.app/api/v1",
    }),
    tagTypes: ["books", "book"],
    endpoints: () => ({}),
});
