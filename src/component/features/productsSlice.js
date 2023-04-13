import { api } from "./productsApi";

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/#/",
      providesTags: ["Products"],
    }),
    addProducts: builder.mutation({
      query: (todo) => ({
        url: "/todos/",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Products"],
    }),
    completeProducts: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProducts: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductsMutation,
  useCompleteProductsMutation,
  useDeleteProductsMutation,
} = productsApi;
