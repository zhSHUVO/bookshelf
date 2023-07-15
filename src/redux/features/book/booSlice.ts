import { api } from "../../../api/apiSlice";

const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/book",
            providesTags: ["books"],
        }),
        getSingleBook: builder.query({
            query: (id) => `/book/${id}`,
            providesTags: ["books"],
        }),
        updateBook: builder.mutation({
            query: ({ id, data }) => ({
                url: `/book/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["books"],
        }),
    }),
});

export const {
    useGetBooksQuery,
    useGetSingleBookQuery,
    useUpdateBookMutation,
} = bookApi;
