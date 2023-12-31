import { api } from "../../../api/apiSlice";

const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addBook: builder.mutation({
            query: (data) => ({
                url: `/book`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["books"],
        }),
        getBooks: builder.query({
            query: () => "/book",
            providesTags: ["books"],
        }),
        getSingleBook: builder.query({
            query: (id) => `/book/${id}`,
            providesTags: ["book"],
        }),
        updateBook: builder.mutation({
            query: ({ id, data }) => ({
                url: `/book/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["books"],
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/book/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["books"],
        }),
        postReview: builder.mutation({
            query: ({ id, data }) => ({
                url: `/book/${id}`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["book", "books"],
        }),
    }),
});

export const {
    useGetBooksQuery,
    useGetSingleBookQuery,
    useUpdateBookMutation,
    useAddBookMutation,
    useDeleteBookMutation,
    usePostReviewMutation,
} = bookApi;
