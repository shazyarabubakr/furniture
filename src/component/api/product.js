import { api } from "./productsApi";

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products/",
      providesTags: ["Products"],
    }),
    addProducts: builder.mutation({
      query: (product) => ({
        url: "/products/",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),
    updateProducts: builder.mutation({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: "PATCH",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProducts: builder.mutation({
      query: ({ id }) => ({
        url: `/products/${id}`,
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
